// @ts-nocheck


import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
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

  return (
    <div>
      <h1>maaser cheshbon</h1>
      <div>
        <button onClick={() => setCount((count) => count - money)}>
          tzeduka
        </button>
        <> $</>

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
          Your {feedback}: ${Math.ceil(result)}
        </p>
      </div>
    </div>
  );
};


export default App
