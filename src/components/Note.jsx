import React from "react";
import { useState } from "react";

function NoteItem(props) {
    const [initial, setState] = useState(true);

    function strikethroughNote(i) {
        setState(prevState => ({
          ...initial,
          [i]: !prevState[i]
        }));
    }
    return <li key={props.id} onDoubleClick = {() => {props.onDoubleClick(props.id)}} 
    onClick={() => strikethroughNote(props.id)} style={initial[`${props.id}`] ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{props.text}</li>
}

export default NoteItem