// @ts-nocheck


import { useState, useEffect} from 'react';
import './App.css'
import accounting from 'accounting';
                     

function App() {
  const savedResult = localStorage.getItem('count');
  const initialResult = savedResult ? parseFloat(savedResult) : 0;

  const [count, setCount] = useState(initialResult);
  const [money, setMoney] = useState('');
  const [money2, setMoney2] = useState('');
  const [edit, setEdit] = useState(false);   
  const [edit2, setEdit2] = useState('')

  

  const [saver, setSaver] = useState(false)

  const handleMaaser = () => {
         setCount((count) => money / 10 + count);
        setMoney('');
        setEdit2('')
  }


  let feedback = '';
  let feedbackCss = '';                                                                                         
  if (count < 0) {
    feedback = 'צדקה :';
    feedbackCss = 'tzedakahCss';
  }  else if (count > 0) {
    feedback = 'מעשר :';
    feedbackCss = 'maaserCss';
  } else {
    feedback = ''; 
    feedbackCss = 'noCss';}

  let result = '';
  if (count < 0) {
    result = Math.abs(count);
  } else {
    result = count;
  }

let lock = '';
if (edit !== false) {
  lock = 'lock';
}

  let fund = accounting.formatMoney(result, '$')

  const handleSave = () => {
    localStorage.setItem('count', count.toString());
  };

  

  let zero = '';
  if (count === 0 && saver === true) {
   zero = handleSave();
   setSaver(false)
  }
 
  const handleReset = () => {
    setCount(0);
    setSaver(true)
  };

  const handleEdit = () => { 
  setEdit(true)
setEdit2('')
} 

let timer = '';
if (0-edit2) {
  timer = handleSave();
  
}


const saveAsTzedukah = () => { 
  if (edit2 !== ''){
  setCount(0-edit2);
  setEdit(false)
  
}  }


let cal = '';
if (edit2 === count) {
  cal = handleSave();
  
}


const saveAsMaaser = () => { 
  if (edit2 !== ''){
  setCount(edit2);
  //window.location.reload();
  setEdit(false)
};
  
  
}

 
  return (
    <div className="container">
    <h1 className="title" >מעשר חשבון</h1><div id = 'lockid' className = {lock}>
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
        type="number"
      />
      <button className="maaser-button" onClick={() => {
        handleMaaser();
        }}>
        מעשר
      </button>
      
    </div>
    <br /><div className='buttonp'>
    <button className='edit-button'
    onClick = {() => handleEdit()}
    >
      Edit
    </button>
    <p id="feedbackid" className={feedbackCss}>{feedback} {fund}
    </p></div>
    <div><br />
    <button className="save-button" onClick={handleSave}>
      Save
    </button>
    <button
      className="reset-button"
      onClick={() => {
        if (window.confirm('Are you sure you want to reset?')) 
          {handleReset();}
      }}
    >
      Reset
    </button>

    </div>
  </div>

    {edit && (<div className='popup'>
      <input
      type="number"
      onChange={(e) => setEdit2(e.target.value)}
      placeholder="Enter your own number"
      className="edit-input"
      /> 
      
     
      <button className='cancel'
      onClick = {() => setEdit(false)}
      >Cancel</button>
      <div> <br />

      <button className='sat'
  onClick = {() => {saveAsTzedukah() 
  }}
  
      >Save as צדקה
      </button>
      <button className='sam'
      onClick = {() => saveAsMaaser()}
      >Save as מעשר
      </button></div></div>)}
    </div>
  
);
}
;

export default App
