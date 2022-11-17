import { DayForecast } from './weatherForecast/DayForecast';
import './App.css';
import { forecastData } from './weatherForecast/data';
import Scoreboard from './cricketScoreboard/Scoreboard';
import ProductList from './productSearch/productList';


const WeatherForecast = () => {
  return (
    forecastData.map((item) => <DayForecast day={item.day} conditions={item.conditions} maxTemp={item.maxTemp} wind={item.wind} hourlyTemp={item.hourlyTemp} />)
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <WeatherForecast /> */}
        {/* <Scoreboard /> */}
        <ProductList />
      </header>
    </div>
  );
};

export default App;
