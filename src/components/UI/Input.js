import './Input.css';
import React from 'react';
const Input=React.forwardRef((props,ref)=>{
    return(<div className='input'>
        <label>{props.label}</label>
        <input id={props.input.id} ref = {ref} {...props.input}/>
    </div>)
})
export default Input;