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
    const tableItems = () => {
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
                        { tableItems() }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default BitcoinChart;