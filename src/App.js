import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MealsSummary from './components/Meals/MealsSummary';
import MealItems from './components/Meals/MealItems';
import Cart from './components/Cart/Cart';
import CartProvider from './context/cartProvider';
import { useState } from 'react';
function App() {
  const [carIsShown , SetCartIsShown]= useState(false);
  const showCartHandler=()=>{
    SetCartIsShown(true);
  } 
  const hideCardHandler =()=>{
    SetCartIsShown ( false );
  }
  return (<CartProvider>
  {carIsShown&&<Cart hideCard = {hideCardHandler}/>}
  <Header showCart = {showCartHandler}/>
  <MealsSummary/>
  <MealItems/>
  </CartProvider>)
}

export default App;
