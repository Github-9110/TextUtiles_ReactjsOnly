import './App.css'
import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Aboutus from './components/Aboutus';

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
     <Router>
     <Navbar title="TextUtils" homeTitle="Home" aboutTitle="About us" devBy="(DevShubh..)" mode={mode} ControlMode={switchButton}/>
     <Alert alert ={alert}  />

      <div className="container">
        <Routes>
            <Route path='/'
              element={<Textform heading="Enter to text Analyze Below" displayAlert={displayAlert} mode={mode}/>
            }
            >
            </Route>
            <Route path="/about"   
            element={<Aboutus/>}
            >
            </Route>
        </Routes>
      </div>
     </Router>
     

    </>
  )
}

export default App
