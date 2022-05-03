import React from "react";
import { useState } from "react";


function InputArea(props) {
    const [inputText, setInput] = useState('');
    
    function handleChange(event) {
        const newValue = event.target.value;
        setInput(newValue);
    }

    return (
        <div className="form">
            <input type="text" value={inputText} onChange = {handleChange}/>
            <button onClick={() => {
                props.onClick(inputText);
                setInput("");
                }}>
            <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea