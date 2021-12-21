import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import { useContextApi } from './context/ContextApi';

const createChartData = (data, casesType) => {
  let chartData = [];
  let lastValue;
  for (let date in data.cases) {
    if (lastValue) {
      let newData = {
        x: date,

        y: data[casesType][date] - lastValue,
      };
      chartData.push(newData);
    }
    lastValue = data[casesType][date];
  }
  return chartData;
};

const CountryCasesGraph = () => {
  const { casesType } = useContextApi();
  const [data, setData] = useState({});
  useEffect(() => {
    const featchData = async () => {
      const res = await axios.get(
        'https://disease.sh/v3/covid-19/historical/all?lastdays=120'
      );
      const chartData = createChartData(res.data, casesType);
      setData(chartData);
    };
    featchData();
  }, [casesType]);

  return (
    <div className="bg-white shadow-md p-5 rounded-md">
      <h2 className="text-2xl font-semibold pb-4">Cases Chart</h2>
      <Line
        data={{
          datasets: [
            {
              data: data,
              backgroundColor: 'rgba(204,16,52,0.5)',
              borderColor: '#cc1034',
            },
          ],
        }}
      />
    </div>
  );
};

export default CountryCasesGraph;
