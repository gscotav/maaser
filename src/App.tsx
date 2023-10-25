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
    feedback = 'צדקה';
  } else {
    feedback = 'מעשׂר';
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

  useEffect(() => {
    handleSave();
  }, [result]);


  

  return (
    <div className="container">
    <h1 className="title">מעשר חשבון</h1>
    <div className="button-container">
      <button className="action-button" onClick={() => setCount((count) => count - money)}>
        צדקה
      </button>
      <input
        value={money}
        onChange={(e) => setMoney(e.target.value)}
        placeholder="Enter your ernings or Tzedukah"
        className="money-input"
      />
      <button className="action-button" onClick={() => setCount((count) => count + money / 10)}>
        מעשר
      </button>
    </div>
    <p className="result">
      {feedback}: {accounting.formatMoney(result, '$')}
    </p>
    <div>
    <button className="save-button" onClick={handleSave}>
      save
    </button>
    <button
      className="reset-button"
      onClick={() => {
        if (window.confirm('Are you sure you want to reset?')) {
          setCount(0);
          handleSave();
        }
      }}
    >
      reset
    </button>
    </div>
  </div>
);
}
;


export default App



