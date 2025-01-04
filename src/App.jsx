import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const switchButton =()=>{
        if(mode==='light'){
           setMode('dark');
          document.body.style.backgroundColor='rgb(34 90 140)';
        }else{
          setMode('light');
          document.body.style.backgroundColor='Grey';
        }
     }
  return (
     <>
      <Navbar title="TextUtils" homeTitle="Home" aboutTitle="About us" devBy="(DevShubh..)" mode={mode} ControlMode={switchButton}/>
      <Textform heading="Enter to text Analyze Below" mode={mode}/>
    </>
  )
}

export default App
