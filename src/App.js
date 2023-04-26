import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert,SetAlert]= useState(null)
  function showAlert(message,type){
    SetAlert(
      {message: message,
    type :type
  })
  setTimeout(() => {
    SetAlert(null)
  }, 1500);
}

  const [mode,setMode]=useState('light')
  function toggleMode(){
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark Mode has been Enabled !","success")
     document.title="Dark Mode-Home"
      // setInterval(() => {
      //   document.title="This is an amazing Utility"
      // }, 1000);
      // setInterval(() => {
      //   document.title="Install now"
      // }, 1500);
      
    }
  else{
setMode('light')
document.body.style.backgroundColor='white';
showAlert("Light Mode has been Enabled !","success")
//document.title="Light Mode-Home"
  }
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    
    <div className="container" >
    <Routes>
          <Route path='/about' element={ <About />}>
           
          </Route>
          <Route path="/" element={ <Textform heading="Enter the text here" mode={mode} showAlert={showAlert} />}>
         
          </Route>
        </Routes>
      
    </div>

    </Router>
  </>
  );
}

export default App;
