import React from 'react'
import { useLocation } from 'react-router-dom'
import "./ProductShowcase.scss"
import { useState } from 'react';


export default function ProductShowcase() {

  const location = useLocation()
  
  const [nbMugs,setNbMugs] = useState(1)
  const updateMugs = e => setNbMugs(Number(e.target.value)) 


  return (
    <div className='showcase'>

      <div className="container-img-showcase">
        <img src={process.env.PUBLIC_URL + `/images/${location.state.data.img}.png`} alt="Preview de l'article" className="img-showcase" />
      </div>

      <div className="product-infos">
        <h2>{location.state.data.title}</h2>
        <p>Prix : {location.state.data.price}€ </p>

        <form>
          <label htmlFor="quantity">Quantité</label>
          <input id="quantity" type="number" value={nbMugs} onChange={updateMugs} />
          <button>Ajouter au panier</button>
          <span className='adding-infos'></span>
        </form>

      </div>
    </div>
  )
}
