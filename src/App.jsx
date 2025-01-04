// import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const switchButton =()=>{
        if(mode==='light'){
           setMode('dark');
          document.body.style.backgroundColor='#324352';
        }else{
          setMode('light');
          document.body.style.backgroundColor='white';
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
