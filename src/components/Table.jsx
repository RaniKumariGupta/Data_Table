import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Market Type</th>
            <th>Region</th>
            <th>Primary Exchanges</th>
            <th>Local Open</th>
            <th>Local Close</th>
            <th>Current Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((curData, index) => {
              const {
                market_type,
                region,
                primary_exchanges,
                local_open,
                local_close,
                current_status,
                notes
              } = curData;

              return (
                <tr key={index}>
                  <td>{market_type}</td>
                  <td>{region}</td>
                  <td>{primary_exchanges}</td>
                  <td>{local_open}</td>
                  <td>{local_close}</td>
                  <td>{current_status}</td>
                  <td>{notes}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;



