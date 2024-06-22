import PropTypes from 'prop-types';
import {useState} from 'react';
const TextForm = (props) => {
    const[textval, settextval] = useState('');
    const[orgtext, setorgtext] = useState('');
    const handleonChange = (event) => {
        settextval(event.target.value);
        setorgtext(event.target.value);
    }
    const handleUppercase = () => {
        settextval(textval.toUpperCase());
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowercase = () => {
        settextval(textval.toLowerCase());
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleOriginaltext = () => {
        settextval(orgtext);
        props.showAlert("Converted to Original text", "success");
    }
    
    const handleCopyText = () => {
        navigator.clipboard.writeText(textval);
        setcopyButton("Copied");
        setTimeout(() => {
            setcopyButton("Copy");
        },1300);
        props.showAlert("Text Copied", "success");
    }
    
    const [copyButton, setcopyButton] = useState("Copy");

    const text = textval;
    const words = textval.length === 0 ? 0 : textval.split(" ").length;

    return(
        <div className="container" style={props.bodyColor}>
            <div className="mb-3 ">
                <h3>Enter text below for the operations to be done</h3>
                <textarea style={props.TextFormColor} className="form-control " id="exampleFormControlTextarea1"  onChange={handleonChange} value={textval} placeholder="Enter text here" rows="8"></textarea>
                <style>{`.form-control::placeholder {color: ${props.placeholderColor};}`}</style>
            </div>
            <button type="button" className="m-3 btn btn-primary" onClick={handleUppercase}>UpperCase</button>
            <button type="button" className="m-3 btn btn-primary" onClick={handleLowercase}>LowerCase</button>
            <button type="button" className="m-3 btn btn-primary" onClick={handleOriginaltext}>Original</button>
            <button type="button" className="m-3 btn btn-primary" onClick={handleCopyText}>{copyButton}</button>
            <div>
                <h2>Your text summary</h2>
                <p>{words} words and {text.length} characters</p>
                <h2>Time you require to read</h2>
                <p>{0.08 * text.length} seconds (It is an estimate)</p>
            </div>
        </div>
    );
}

TextForm.propTypes = {
    text: PropTypes.string
}
export default TextForm;