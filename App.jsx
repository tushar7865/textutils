
import './App.css'
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setMode]=useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3F51B5';
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils - Dark Mode"; 
    } 
    else {
      setMode('light');
        
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils - Light Mode"; 
    }
  }
return(
  <>
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
<Textform/>
<Alert alert={alert}/>
  </>
)
      
  
}

export default App;
