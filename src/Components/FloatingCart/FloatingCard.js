import React from 'react'
import cartIcon from "./shopping-cart.svg"
import "./FloatingCart.scss"
import { Link } from 'react-router-dom';


export default function FloatingCard() {
  
  return (
    <Link to="panier">
      <div className='floating-cart'>

        <p>Votre panier</p>

        <div className="img-notif-container">
          <img src={cartIcon} alt="icöne panier" />
          <span>0</span>
        </div>

      </div>
    </Link>
  )
}
