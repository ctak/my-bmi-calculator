import './Chart.css';
import { Line } from 'react-chartjs-2';
import { calc } from '../utils/BMIUtils';

const data1 = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3,5,2,3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function Chart({logs}) {
  const { loading, data: bmis, error } = logs;
  if (! bmis) return <div className="Chart"></div>;

  const labels = bmis.map(bmi => (new Date(bmi.date)).toLocaleDateString("en-US"));
  const data = bmis.map(bmi => calc(bmi.weight, bmi.height));

  const data2 = {
    labels,
    datasets: [
      {
        label: 'BMI',
        data,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      }
    ]
  }
  return (
    <div className="Chart">
      <Line 
        data={data2} 
        options={options} />
    </div>
  );
}

export default Chart;
