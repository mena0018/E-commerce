import "./ProductShowcase.scss"
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';


export default function ProductShowcase() {

  const location = useLocation()
  const dispatch = useDispatch()

  
  const [nbMugs,setNbMugs] = useState(1)
  const updateMugs = e => setNbMugs(Number(e.target.value)) 


  const addingInfo = useRef();
  let timerInfo;
  let display = true;
  
  const addArticle = (e) => {
    e.preventDefault()
    
    const newItem = {
      ...location.state.data, 
      quantity: nbMugs
    }
    
    dispatch({
      type: "ADDPRODUCT",
      payload: newItem
    })

    addingInfo.current.innerText = "Ajouté au panier"

    // Permet d'éviter le spam click
    if(display){
      display = false;

      timerInfo = setTimeout(() => {
        addingInfo.current.innerText = "";
        display = true;
      }, 1000)
    }
  }


  useEffect(() => {
      return () => clearTimeout(timerInfo)
  }, [])
  

  return (
    <div className='showcase'>

      <div className="container-img-showcase">
        <img src={process.env.PUBLIC_URL + `/images/${location.state.data.img}.png`} alt="Preview de l'article" className="img-showcase" />
      </div>

      <div className="product-infos">
        <h2>{location.state.data.title}</h2>
        <p>Prix : {location.state.data.price}€ </p>

        <form onSubmit={addArticle}>
          <label htmlFor="quantity">Quantité</label>
          <input id="quantity" type="number" value={nbMugs} onChange={updateMugs} />
          <button>Ajouter au panier</button>
          <span className='adding-infos' ref={addingInfo}></span>
        </form>

      </div>
    </div>
  )
}
