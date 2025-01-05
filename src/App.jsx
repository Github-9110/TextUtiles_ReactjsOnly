import './App.css'
import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');

  const switchButton =()=>{
        if(mode==='light'){
           setMode('dark');
          document.body.style.backgroundColor='rgb(34 90 140)';
          displayAlert("Dark Mode Enable","success");
        }else{
          setMode('light');
          document.body.style.backgroundColor='Grey';
          displayAlert("Dark Mode Disabled","success");
        }
     }

     const [alert, setAlert] = useState('');

     let displayAlert = (message, type)=>{
             setAlert({
              mgs: message,
              type : type
             });
             setTimeout(()=>{
              setAlert(null)
             },3000);
     }
  return (
     <>
      <Navbar title="TextUtils" homeTitle="Home" aboutTitle="About us" devBy="(DevShubh..)" mode={mode} ControlMode={switchButton}/>
      <Alert alert ={alert}  />
      <Textform heading="Enter to text Analyze Below" displayAlert={displayAlert} mode={mode}/>
    </>
  )
}

export default App
