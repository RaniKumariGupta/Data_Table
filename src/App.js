import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import './App.css';

const API = "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo";

const App = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTableData(data.markets.slice(0, 10));
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData(API);

  }, []);

  return (
    <div className="app-container">
      <h1>Market Data</h1>
      <div className="table-container">
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default App;






