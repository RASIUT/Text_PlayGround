import Navbar from "./Components/Navbar";
import TextFrom from "./Components/TextForm";
import {useState, useEffect} from 'react';
const App = () => {
  const[mode, setmode] = useState("Light Mode");
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
    outline: 'none'
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
        outline: 'none'
      })
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
        outline: 'none'
      })
    }
  }
  useEffect(() => {
    document.body.style.backgroundColor = bodyColor.backgroundColor;
  }, [bodyColor]);

  return(
    <>
      <Navbar mode={mode} toggleMode={toggleMode} navbarColor={navbarColor}/>
      <TextFrom bodyColor={bodyColor} TextFormColor={TextFormColor}/>
    </>
  );
}
export default App;