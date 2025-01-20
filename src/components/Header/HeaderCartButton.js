import './HeaderCartButton.css'
import CartIcon from '../Cart/CartIcon';
import { useContext} from 'react';
import CartContext from '../../context/cart-context';
const HeaderCartButton=(props)=>{
    const cartCtx = useContext(CartContext);
    const totalItems = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount
    },0);
    const btnclass = `button bump`;
    return(<button className={btnclass} onClick={props.showcart}>
        <span className='icon'><CartIcon/></span>
        <span>Your cart</span>
        <span className='badge'>{totalItems}</span>
    </button>)
}
export default HeaderCartButton;