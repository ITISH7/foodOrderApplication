import MealForm from './MealForm';
import './mealitem.css';
import { useContext } from 'react';
import CartContext from '../../context/cart-context';
const MealItem =(props)=>{
    const cartctx = useContext(CartContext);
    const price = `$${props.price}`;
    const addToCartHandler =(amount)=>{
        cartctx.addItems({
            id: props.id,
            name:props.name,
            amount:amount,
            price: props.price
        })
    }
    return(
        <li className='meal'>
            <div>
                <h3>{props.name}</h3>
                <div className='description'>{props.description}</div>
                <div className='price'>{price}</div>
            </div>
            <div>
                <MealForm id={props.id} onAddAmount = {addToCartHandler}/>
            </div>
        </li>
    )
}
export default MealItem;