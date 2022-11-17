export const condition = {
  SUNNY: "sunny",
  STORMY: "stormy",
  RAINY: "rainy",
  CLOUDY: "cloudy",
};


export const DayForecast = ({ day, conditions, maxTemp, wind, hourlyTemp }) => {
  return (
    <div>
      {/* <h3>{day}</h3> */}
      <h3>{day} - <Condition conditions={conditions} /></h3>
      <p>Temperature: {maxTemp} °C</p>
      <p>Wind speed: {wind} km/h</p>
      <p style={{ color: "red" }}>{maxTemp > 30 && "Heatwave warning"}</p>
      <p style={{ color: "orange" }}>{wind > 30 && "Strong wind warning"}</p>
      {hourlyTemp && <HourlyTable hourlyTemp={hourlyTemp} />}
    </div>
  );
};

const Condition = ({ conditions }) => {
  switch (conditions) {
    case condition.SUNNY:
      return condition.SUNNY + " ☀️";
    case condition.STORMY:
      return condition.STORMY + " ⛈️";
    case condition.RAINY:
      return condition.RAINY + " 🌧️";
    case condition.CLOUDY:
      return condition.CLOUDY + " ☁️";
    default:
      return null;
  }
};

const HourlyTable = ({ hourlyTemp }) => {
  console.log({ hourlyTemp });
  return (
    <table>
      <tr>
        {hourlyTemp?.map((item, index) => <td>{index}</td>)}
      </tr>
      <tr>
      </tr>
      {hourlyTemp?.map((item) => <td>{item}</td>)}
    </table>
  );
};