import Loading from "./components/Loading";
import { useState } from "react";
import axios from "axios";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });
  const getWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(`https://api.weatherapi.com/v1/current.json?key=8373ce37cc3a4b3c99870819213006&q=${city}&aqi=no`)
    .then(res => {
      setResults({
        country: res.data.location.country,
        cityName: res.data.location.name,
        temperature: res.data.current.temp_c,
        conditionText: res.data.current.condition.text,
        icon: res.data.current.condition.icon
      })
      setCity("");
      setLoading(false);
    })
    .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
  }

  return (
    <div className="Wrapper">
      <div class="container">
        <Title />
        <Form getWeather={getWeather} city={city} setCity={setCity} />
        {loading ? <Loading /> : <Results results={results} />}
      </div>
    </div>
  );

}

export default App;
