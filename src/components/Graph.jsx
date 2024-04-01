import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Graph = ({ data }) => {

  if (!data || !data["Weekly Time Series"]) {
    return <div>No data available for graph</div>;
  }
 console.log(data);
 const TimeSeries = Object.values(data["Weekly Time Series"])
 console.log(Object.values(TimeSeries[0])[0])
 const data1 = [
  {
    name: 'Page A',
    open: Object.values(TimeSeries[0])[0],
    high:Object.values(TimeSeries[0])[1],
    low:Object.values(TimeSeries[0])[2],
    close: Object.values(TimeSeries[0])[3],
  },
  {
    name: 'Page B',
    open: Object.values(TimeSeries[1])[0],
    high:Object.values(TimeSeries[1])[1],
    low:Object.values(TimeSeries[1])[2],
    close: Object.values(TimeSeries[1])[3],
  },
  {
    name: 'Page B',
    open: Object.values(TimeSeries[2])[0],
    high:Object.values(TimeSeries[2])[1],
    low:Object.values(TimeSeries[2])[2],
    close: Object.values(TimeSeries[2])[3],
  },
  {
    name: 'Page C',
    open: Object.values(TimeSeries[3])[0],
    high:Object.values(TimeSeries[3])[1],
    low:Object.values(TimeSeries[3])[2],
    close: Object.values(TimeSeries[3])[3],
  },
  {
    name: 'Page D',
    open: Object.values(TimeSeries[4])[0],
    high:Object.values(TimeSeries[4])[1],
    low:Object.values(TimeSeries[4])[2],
    close: Object.values(TimeSeries[4])[3],
  },
  {
    name: 'Page E',
    open: Object.values(TimeSeries[5])[0],
    high:Object.values(TimeSeries[5])[1],
    low:Object.values(TimeSeries[5])[2],
    close: Object.values(TimeSeries[5])[3],
  },
];
 

  return (
   
   
    <LineChart
      width={500}
      height={300}
      data={data1}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="open" stroke="#8884d8"  />
      <Line type="monotone" dataKey="high" stroke="#82ca9d" />
      <Line type="monotone" dataKey="low" stroke="#82ca9d" />
      <Line type="monotone" dataKey="close" stroke="#82ca9d" />
    </LineChart>

   
  );
};

export default Graph;
