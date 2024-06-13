import Navbar from "./Components/Navbar";
import TextFrom from "./Components/TextForm";
import {useState, useEffect} from 'react';
const App = () => {
  const[mode, setmode] = useState("Light Mode");
  const[bodyColor, setbodyColor] = useState({
    backgroundColor: '#FFEEA9',
    color:'black'
  })
  const[navbarColor, setnavbarColor] = useState({
    backgroundColor: '#FEFFD2',
    color:'black'
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
    }else{        //-------------------------------------------Light Mode-----------------------------------------------
      setmode("Light Mode");
      document.body.style.backgroundColor='#FFEEA9';
      document.body.style.color='black';
      setbodyColor({
        backgroundColor: '#FFEEA9',
        color:'black'
      })
      setnavbarColor({
        backgroundColor: '#FEFFD2',
        color:'black'
      })
    }
    }
    useEffect(() => {
      document.body.style.backgroundColor = bodyColor.backgroundColor;
    }, [bodyColor]);
  
  return(
    <>
      <Navbar mode={mode} toggleMode={toggleMode} navbarColor={navbarColor}/>
      <TextFrom bodyColor={bodyColor}/>
    </>
  );
}
export default App;