import CartContext from "./cart-context";
import React,{useReducer} from "react";
const defaultCartState={
    items:[],
    TotalAmount:0
}
const updateState =(state,action)=>{
    if(action.type==='ADD_ITEMS'){
        const updateAmount = state.TotalAmount + (action.item.price *action.item.amount)
        const existingitems = state.items.findIndex((item)=> item.id === action.item.id)
        const finditem = state.items[existingitems]
        let updateItems
        if(finditem){
            const updateitem = {
                ...finditem,
                amount:finditem.amount + action.item.amount
            }
            updateItems = [...state.items]
            updateItems[existingitems]=updateitem
        }
        else{
         updateItems = state.items.concat(action.item);
        }

        return{
            items : updateItems,
            TotalAmount: + updateAmount
        }
    }
    if(action.type==='Remove_item'){
        const existingitems = state.items.findIndex((item)=> item.id === action.id)
        const finditem = state.items[existingitems]
        let updateditems
        if(finditem.amount === 1){
             updateditems= state.items.filter(item=> item.id != action.id)
        }
        else{
            const updateitem = {
                ...finditem,
                amount:finditem.amount -1
            }
            updateditems = [...state.items]
            updateditems[existingitems]=updateitem
        }

        const updateAmount = state.TotalAmount - finditem.price;
        return{
            items : updateditems,
            TotalAmount : updateAmount
        }
    }
 return defaultCartState;
}
const CartProvider =(props)=>{
    const [cartState , dispatchCartState]=useReducer(updateState,defaultCartState)
    const addItemHandler = item =>{
        dispatchCartState({type:'ADD_ITEMS',item:item})
    };
    const removeItemHandler = id=>{
        dispatchCartState({type:'Remove_item',id:id})
    }
    const cartcontext = {
        items:cartState.items,
        totalAmount: cartState.TotalAmount,
        addItems:addItemHandler,
        removeItem:removeItemHandler
    }
   return( <CartContext.Provider value={cartcontext}>{props.children}</CartContext.Provider>
   )
}

export default CartProvider;