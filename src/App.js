import { DayForecast } from './weatherForecast/DayForecast';
import './App.css';
import { forecastData } from './weatherForecast/data';
import Scoreboard from './cricketScoreboard/Scoreboard';
import ProductList from './productSearch/productList';
import TodoList from './todo/todoList';
import Jukebox from './jukeBox/jukeBox';
import OverallFeedback from './feedback/overallFeedback';
import MiniTwitter from './miniTwitter/MiniTwitter';
import { DateFactMain } from './dateFact';
import { StopWatch } from './stopWatch';


// const WeatherForecast = () => {
//   return (
//     forecastData.map((item) => <DayForecast day={item.day} conditions={item.conditions} maxTemp={item.maxTemp} wind={item.wind} hourlyTemp={item.hourlyTemp} />)
//   );
// };

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <WeatherForecast /> */}
        {/* <Scoreboard /> */}
        {/* <ProductList /> */}
        {/* <TodoList /> */}
        {/* <Jukebox /> */}
        {/* <OverallFeedback /> */}
        {/* <MiniTwitter /> */}
        {/* <DateFactMain /> */}
        <StopWatch />
      </header>
    </div>
  );
};

export default App;
