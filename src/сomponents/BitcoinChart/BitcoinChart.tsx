import React, {useEffect, useState} from 'react';
import {CurrencyData} from "../../api";
import {createMoneyProvider} from "../../di/api-client";

const BitcoinChart = () => {
    const [bitcoinData, setBitcoinData] = useState<Array<CurrencyData>>([]);
    useEffect(() => {
        const loadData = async () => {
            const provider = createMoneyProvider();
            const newBitcoinData = await provider.getPrices("BTC");
            setBitcoinData([newBitcoinData]);
        }
        const intervalId = setInterval(() => {
            loadData().catch((error) => {
                console.log(error)
            })
        }, 5000);
        return () => {
            clearInterval(intervalId)
        };
    });
    const sellItems = () => {
        return bitcoinData.map((row, index) => {
            return <tr key={index}>
                        <td>Продажа</td>
                        <td>{row.binance.sell}</td>
                        <td>{row.coinbase.sell}</td>
                        <td>{row.kraken.sell}</td>
                        <td>{row.huobi.sell}</td>
                        <td>{row.kucoin.sell}</td>
                        <td>{row.ftx.sell}</td>
                        <td>{row.bitfinex.sell}</td>
                        <td>{row.gemini.sell}</td>
                    </tr>;
        })
    }
    const buyItems = () => {
        return bitcoinData.map((row, index) => {
            return <tr key={index}>
                <td>Покупка</td>
                <td>{row.binance.buy}</td>
                <td>{row.coinbase.buy}</td>
                <td>{row.kraken.buy}</td>
                <td>{row.huobi.buy}</td>
                <td>{row.kucoin.buy}</td>
                <td>{row.ftx.buy}</td>
                <td>{row.bitfinex.buy}</td>
                <td>{row.gemini.buy}</td>
            </tr>;
        })
    }
    const spotItems = () => {
        return bitcoinData.map((row, index) => {
            return <tr key={index}>
                <td>Спот</td>
                <td>{row.binance.spot}</td>
                <td>{row.coinbase.spot}</td>
                <td>{row.kraken.spot}</td>
                <td>{row.huobi.spot}</td>
                <td>{row.kucoin.spot}</td>
                <td>{row.ftx.spot}</td>
                <td>{row.bitfinex.spot}</td>
                <td>{row.gemini.spot}</td>
            </tr>;
        })
    }
    return (
        <>
            <h2>Биткоин</h2>
            <div className={"my-table__container"}>
                <table className={"my-table"}>
                    <thead>
                    <tr>
                        <th>SAMPLE TEXT</th>
                        <th>Binance</th>
                        <th>Coinbase</th>
                        <th>Kraken</th>
                        <th>Huobi</th>
                        <th>Kucoin</th>
                        <th>FTX</th>
                        <th>Bitfinex</th>
                        <th>Gemini</th>
                    </tr>
                    </thead>
                    <tbody>
                        { sellItems() }
                        { buyItems() }
                        { spotItems() }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default BitcoinChart;