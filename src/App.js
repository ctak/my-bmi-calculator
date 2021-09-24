import './App.css';
import Form from './components/Form';
import Chart from './components/Chart';
import Logs from './components/Logs';
import { useState } from 'react';
import { calc } from './utils/BMIUtils';

function App() {
  
  const BMIS = [
    { id: 1, weight: 80, height: 175, date: new Date(2021, 8, 24, 8, 58, 1), },
    { id: 2, weight: 80, height: 175, date: new Date(2021, 8, 24, 8, 59, 1), },
    { id: 3, weight: 75, height: 175, date: new Date(2021, 8, 24, 9, 0, 1), },
  ]  
  
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleWeightChange = w => setWeight(w);
  const handleHeightChange = h => setHeight(h);
  const handleCalcClick = () => {
    const c = calc(weight, height);
    alert(c);
  }

  return (
    <div className="App">
      <h1>BMI Tracker</h1>
      <Form 
        weight={weight}
        height={height}
        onWeightChange={handleWeightChange}
        onHeightChange={handleHeightChange}
        onCalcClick={handleCalcClick}
      />
      <Chart />
      <Logs bmis={BMIS} />
    </div>
  );
}

export default App;
