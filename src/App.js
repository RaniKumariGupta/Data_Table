import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import './App.css';
import Graph from './components/Graph';

const API = "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo";
const API_GRAPH = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo";

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [graphData, setGraphData] = useState([]);

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

    const fetchGraphData = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setGraphData(data); 
      } catch (error) {
        console.error('Error fetching graph data:', error);
      }
    };

    fetchData(API);
    fetchGraphData(API_GRAPH);

  }, []);

  return (
    <div className="app-container">
      <h1>Market Data</h1>
      <div className="table-container">
        <Table data={tableData} />
      </div>
      <br/>
      <br/>
      <h2>Graph Display</h2>
      <br/><br/>
        <Graph data={graphData} />
      
    </div>
  );
};

export default App;






