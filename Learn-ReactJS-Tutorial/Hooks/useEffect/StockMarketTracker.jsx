import React, { useState, useEffect } from 'react';

function StockMarketTracker() {
  const [stockData, setStockData] = useState([]);
  const [exchangeRate, setExchangeRate] = useState({ USD: 1.0, EUR: 0.85 });

  useEffect(() => {
    // Simulated local data for stock market.
    const simulatedStockData = [
      { name: 'AAPL', price: 150.50 },
      { name: 'GOOGL', price: 2750.20 },
      { name: 'TSLA', price: 750.10 },
    ];
    setStockData(simulatedStockData);

    // Simulated local data for exchange rates.
    const simulatedExchangeRate = { USD: 1.0, EUR: 0.85 };
    setExchangeRate(simulatedExchangeRate);
  }, []);

  return (
    <div>
      <h1>Stock Market and Exchange Rates</h1>
      <h2>Stock Market Data:</h2>
      <ul>
        {stockData.map((stock, index) => (
          <li key={index}>{stock.name}: ${stock.price}</li>
        ))}
      </ul>
      <h2>Exchange Rates:</h2>
      <p>USD to EUR: {exchangeRate.USD} to {exchangeRate.EUR}</p>
    </div>
  );
}

export default StockMarketTracker;
