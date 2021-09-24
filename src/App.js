import './App.css';
import Form from './components/Form';
import Chart from './components/Chart';
import Logs from './components/Logs';
import { useState, useReducer, useEffect } from 'react';
import { calc } from './utils/BMIUtils';

function reducer(state, action) {
  switch (action.type) {
    case 'GET_LOGS':
      return {
        loading: true,
        data: null,
        error: null
      };
    case 'GET_LOGS_SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case 'GET_LOGS_ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`No such ation type: ${action.type}`);
  }
}

function App() {

  // TODO: 이 데이터를 console 에 넣으면 데이터가 올라온다. 
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

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });

  function fetchData() {
    const BMIS = 'BMIS';
    dispatch({ type: 'GET_LOGS' });
    try {
      const data = JSON.parse( localStorage.getItem(BMIS) ) || [];
      dispatch({ type: 'GET_LOGS_SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'GET_LOGS_ERROR', error: e });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
      <Logs logs={state} />
    </div>
  );
}

export default App;
