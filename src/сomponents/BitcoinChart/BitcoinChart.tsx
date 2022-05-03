import React, {useEffect, useState} from 'react';
import {CurrencyData} from "../../api";
import {createMoneyProvider} from "../../di/api-client";

const BitcoinChart = () => {
    const [bitcoinData, setBitcoinData] = useState<Array<CurrencyData>>([]);
    useEffect(() => {
        const loadData = async () => {
            const provider = createMoneyProvider();
            const newBitcoinData = await provider.getPrices("BTC");
            setBitcoinData([...bitcoinData, newBitcoinData]);
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
                <td>{row.binance.price}</td>
                <td>{row.coinbase.price}</td>
                <td>{row.kraken.price}</td>
                <td>{row.huobi.price}</td>
                <td>{row.kucoin.price}</td>
                <td>{row.ftx.price}</td>
                <td>{row.bitfinex.price}</td>
                <td>{row.gemini.price}</td>
            </tr>;
        })
    }
    return (
        <>
            <h1>Биткоин</h1>
            <div>
                <table>
                    <thead>
                    <tr>
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