

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
    setmode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert(": Dark mode enabled","success");
    }
    else
    {
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert(": Light mode enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="textUtils" about="about textUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
           */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode}/>
          {/* </Route>
        </Switch> */}

    
    
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
