import React, {useState} from 'react';
import './App.scss';
import BitcoinChart from "./сomponents/BitcoinChart/BitcoinChart";
import EtherChart from "./сomponents/EtherChart/EtherChart";

function App() {
  const [currentChart, setCurrentChart] = useState(1);
  return (
    <div className="App">
      <div className={"hamster-container"}>
          <h1>Хомяк-мутант</h1>
          <img src={process.env.PUBLIC_URL + "hamster-wheel-41.gif"} alt=""/>
      </div>
      <div className="button-container">
        <button className={"button"} onClick={() => {setCurrentChart(1)}}>
          Bitcoin Chart
        </button>
        <button className={"button"} onClick={() => {setCurrentChart(2)}}>
          Ether Chart
        </button>
      </div>
      <div>
        {
            currentChart === 1 &&
            <BitcoinChart />
        }
        {
            currentChart === 2 &&
            <EtherChart />
        }
      </div>
    </div>
  );
}

export default App;
