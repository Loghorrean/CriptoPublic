import React, {useState} from 'react';
import './App.css';
import BitcoinChart from "./сomponents/BitcoinChart/BitcoinChart";
import EtherChart from "./сomponents/EtherChart/EtherChart";

function App() {
  const [currentChart, setCurrentChart] = useState(1);
  return (
    <div className="App">
      <div className="button-container">
        <button onClick={() => {setCurrentChart(1)}}>
          Bitcoin Chart
        </button>
        <button onClick={() => {setCurrentChart(2)}}>
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
