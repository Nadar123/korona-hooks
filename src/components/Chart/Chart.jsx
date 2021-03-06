import React, { useState, useEffect, Fragment } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import './chart.scss';

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
      const fetchApi = async () => {
        setDailyData( await fetchDailyData());
      }
      fetchApi();
  }, [])

  const BarChart = (
    confirmed
    ? (
      <Bar
      data={{ 
        labels: ['infected', 'Recovered', 'Deaths'],
        datasets: [{
          label: 'People',
          backgroundColor: [
            'rgba(0,0,255,0.5)',
            'rgba(0,255,0,0.5)',
            'rgba(255,0,0,0.5)'
          ],
          data: [confirmed.value, recovered.value, deaths.value]
        }]
       }}
       options={{ 
         legend:{display: false},
         title: {display:true, text:`Current state in ${country}`}
        }}
      />
    ) : null
  );
  
  const lineChart = (
    dailyData.length 
    ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(({confirmed}) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map(({deaths}) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  return (
      <Fragment>
        <div className="container line-chart">
            {country ? BarChart: lineChart}
        </div>
      </Fragment>
  );
};

export default Chart;
