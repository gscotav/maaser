// @ts-nocheck


import { useState, useEffect } from 'react';
import './App.css'
import accounting from 'accounting';



function App() {
  const savedResult = localStorage.getItem('count');
  const initialResult = savedResult ? parseFloat(savedResult) : 0;

  const [count, setCount] = useState(initialResult);
  const [money, setMoney] = useState('');

  let feedback = '';
  if (count < 0) {
    feedback = 'צדקה';
  } else {
    feedback = 'מעשר';
  }

  let result = '';
  if (count < 0) {
    result = Math.abs(count);
  } else {
    result = count;
  }

  const handleSave = () => {
    localStorage.setItem('count', count.toString());
  };
 
  const handleReset = () => {
    setCount(0)
  };
  useEffect(() => {
    handleSave();
  }, [handleReset]);
  
  return (
    <div className="container">
    <h1 className="title">מעשר חשבון</h1>
    <div className="button-container">
      <button className="tzedukah-button" onClick={() =>  {
    setCount((count) => count - money);
    setMoney(''); 
  }}>
        צדקה
      </button>
      <input
        value={money}
        onChange={(e) => setMoney(e.target.value)}
        placeholder="Enter your earnings or Tzedakah"
        className="money-input"
      />
      <button className="maaser-button" onClick={() => {
         setCount((count) => count + money / 10);
         setMoney('');}}>
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
        if (window.confirm('Are you sure you want to reset?')) 
          {handleReset();}
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



