import "./ShoppingCart.scss"
import { useSelector, useDispatch} from 'react-redux';


export default function ShoppingCart() {

  const stateData = useSelector(state => state)
  const dispatch = useDispatch()

  const handleChange = (event, id) => {

    const index = stateData.panier.findIndex(obj => obj.id === id)

    const objUpdate = {
      ...stateData.panier[index],
      quantity : Number(event.target.value)
    }

    dispatch({
      type: "UPDATEPRODUCT",
      payload: objUpdate
    })
  }

  let totalPrice = 0;
  
  // Si notre panier contient au moins 1 article
  if (stateData.panier.length > 0) {

    for (const item of stateData.panier) {
      const itemPrice = item.price * item.quantity;
      totalPrice += itemPrice;
    }
  }

  return (
    <div className='global-container'>

      <p className='heading-cart'>Votre panier : </p>

      <ul className="cart-list">
        {stateData.panier.map(item => (
            <li key={item.id}>

              <img alt="miniature des articles dans le panier" 
              src={process.env.PUBLIC_URL + `/images/${item.img}.png`} />

              <div className="bloc-cart-infos">
                <h4> {item.title} </h4>
                <p> Prix : {item.price}€ </p>
              </div>

              <div className="bloc-input">
                <label htmlFor="quantityInput">Quantité</label>
                <input type="number" 
                       value={item.quantity} 
                       onChange={e => handleChange(e, item.id)}
                       id="quantityInput" />
              </div>
                          
            </li>
        ))}
      </ul>

      <p className="total-price">Total : {totalPrice.toFixed(2)}€</p>
      <button className="btn-cart">Procéder au paiement</button>
    </div>
  )
}
