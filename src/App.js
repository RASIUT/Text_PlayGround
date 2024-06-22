import Navbar from "./Components/Navbar";
import TextFrom from "./Components/TextForm";
import Alert from "./Components/Alert";
import {useState, useEffect} from 'react';


const App = () => {

  const[mode, setmode] = useState("Light Mode");

  const[alert, setalert] = useState(null);

  const[Timer, setTimer] = useState(0);
  const[IntervalId, setIntervalID] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message, 
      type: type
    })
    clearInterval(IntervalId);
    setTimer(0);
    const newIntervalId = setInterval(() => {
      setalert(null);
      setTimer((prevTimer) => {
        return prevTimer+1;
      })
    }, 1300);
    setIntervalID(newIntervalId);
  }


  const[bodyColor, setbodyColor] = useState({
    backgroundColor: '#FAEED1',
    color:'black'
  })

  const[navbarColor, setnavbarColor] = useState({
    backgroundColor: '#FDF7E4',
    color:'black'
  })
  
  const[TextFormColor, setTextFormColor] = useState({
    backgroundColor: '#DED0B6',
    color: 'black',
    border: 'transparent',
    outline: 'none',
    fontWeight: 'bold',
    fontSize: '20px'
  })


  const toggleMode = () => {
    // ------------------------------------------ Dark Mode--------------------------------------------------
    if(mode === "Light Mode"){
      setmode("Dark Mode");
      document.body.style.backgroundColor='#1B1A55';
      document.body.style.color='white';
  
      setbodyColor({
        backgroundColor: '#1B1A55',
        color:'white'
      })
  
      setnavbarColor({
        backgroundColor: '#070F2B',
        color:'white'
      })
  
      setTextFormColor({
        backgroundColor: '#535C91',
        color:'white',
        border: 'transparent ',
        outline: 'none',
        fontWeight: 'bold',
        fontSize: '20px'
      })
      
      showAlert("Dark mode has been enabled", "success");

    }else{        //-------------------------------------------Light Mode-----------------------------------------------
      setmode("Light Mode");
      document.body.style.backgroundColor='#FAEED1';
      document.body.style.color='black';
  
      setbodyColor({
        backgroundColor: '#FAEED1',
        color:'black'
      })
  
      setnavbarColor({
        backgroundColor: '#FDF7E4',
        color:'black'
      })
  
      setTextFormColor({
        backgroundColor: '#DED0B6',
        color:'black',
        border: 'transparent ',
        outline: 'none',
        fontWeight: 'bold',
        fontSize: '20px'
      })
      
      showAlert("Light mode has been enabled", "success");

    }
  }


  useEffect(() => {
    document.body.style.backgroundColor = bodyColor.backgroundColor;
  }, [bodyColor]);
 

  return(
    <>
      <Navbar mode={mode} toggleMode={toggleMode} navbarColor={navbarColor}/>
      <Alert alert={alert}/>
      <TextFrom bodyColor={bodyColor} TextFormColor={TextFormColor} showAlert={showAlert}/>
    </>
  );
}
export default App;