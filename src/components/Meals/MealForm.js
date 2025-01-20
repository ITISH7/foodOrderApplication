import Input from '../UI/Input';
import './MealForm.css';
import React,{useRef} from 'react';
const MealForm =(props)=>{
    const InputAmountRef = useRef();
    const submitHandler =(event)=>{
        event.preventDefault();
        const enternedAmount = (InputAmountRef.current.value);
       const amount = + enternedAmount 
        props.onAddAmount(amount);
    }

    return(
    <form className='form' onSubmit={submitHandler}>
        <Input label='Amount' ref= {InputAmountRef} input={{
            id:'amount_' + props.id,
            type: 'number',
            min:"0",
            max:"15",
            step:'1',
            defaultValue:'0'
        }}/>
        <button type='submit'>+ Add</button>
    </form>)
}
export default MealForm;