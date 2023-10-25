// @ts-nocheck


import { useState, useEffect } from 'react';
import './App.css'
import accounting from 'accounting';



function App() {
  const savedResult = localStorage.getItem('result');
  const initialResult = savedResult ? parseFloat(savedResult) : 0;

  const [count, setCount] = useState(initialResult);
  const [money, setMoney] = useState('');

  let feedback = '';
  if (count < 0) {
    feedback = 'tzeduka';
  } else {
    feedback = 'maaser';
  }

  let result = '';
  if (count < 0) {
    result = Math.abs(count);
  } else {
    result = count;
  }

  const handleSave = () => {
    localStorage.setItem('result', result.toString());
  };

  

  return (
    <div>
      <h1>maaser cheshbon</h1>
      <div>
        <button onClick={() => setCount((count) => count - money)}>
          tzeduka
        </button>
        <> </>

        <input
          value={money}
          onChange={(e) => setMoney (e.target.value)}
          placeholder="Enter your earnings or tzeduka"
          style={{
            whiteSpace: 'nowrap',
            width: '185px',
          }}
        />
        
        <button onClick={() => setCount((count) => count +  money / 10)}>
          maaser
        </button>
        <p>
          Your {feedback}: {accounting.formatMoney(result, '$')}
        </p>
        <button onClick={handleSave}>
          save
        </button><button
        onClick={() => {
          if (window.confirm('Are you sure you want to reset?'))
          setCount(0)
        }}>
          reset
        </button>
      </div>
    </div>
  );
};


export default App



