import React from 'react'
import cartIcon from "./shopping-cart.svg"
import "./FloatingCart.scss"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function FloatingCard() {

  const shoppingCart = useSelector(state => state)
  

  let total = 0;

  for (const item of shoppingCart.panier) {
    total += item.quantity
  }


  return (
    <Link to="panier">
      <div className='floating-cart'>

        <p>Votre panier</p>

        <div className="img-notif-container">
          <img src={cartIcon} alt="icône panier" />
          <span>{total}</span>
        </div>

      </div>
    </Link>
  )
}
