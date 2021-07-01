
const Results = (props) => {
  const { cityName, country, temperature, conditionText, icon } = props.results;
  return (
    <div>
      {cityName && 
      <div className="results-city">{cityName}</div>}
      {country && 
      <div className="results-country">{country}</div>}
      {temperature && 
      <div className="results-temp">{temperature} <span>℃</span></div>}
      {conditionText && 
      <div className="results-condition">
        <img src={icon} alt="icon" />
        <span>{conditionText}</span>
      </div>}
      
    </div>
  );
};

export default Results;