import React from 'react'
import "./Home.scss"
import imgHomeShop from "./shopimg.jpg"


export default function Home() {

  return (
    <div className='global-container'>

      <h1 className="home-title">Bienvenu au <span>Shop</span> </h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eaque et at sequi error doloribus blanditiis, similique tempora, perspiciatis voluptatum eligendi itaque in eos laborum distinctio recusandae? Facilis enim, ad quae temporibus laborum vero quidem, alias est molestiae reprehenderit fugiat. Enim dolore at optio a similique autem maiores amet dolorem.</p>

      <img src={imgHomeShop} alt="accueil shop" />

    </div>
  )
}
