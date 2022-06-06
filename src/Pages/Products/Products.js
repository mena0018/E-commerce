import data from "../../data/inventory";
import "./Products.scss";
import btnLike from "./heart.svg";
import { Link } from "react-router-dom";


export default function Products() {

  return (
    <div className="container-products">

      {data.map((product) => (
        <Link key={product.id}
          to={`/produits/${product.title.replace(/\s+/g, "").trim()}`}>

          <div className="bloc-card">
            <div className="product-card">

              <div className="visual-aspect">
                <img className="img-product"
                  src={process.env.PUBLIC_URL + `./images/${product.img}.png`}
                  alt="miniature d'objet à vendre"
                />
                <div className="like-container">
                  <img src={btnLike} alt="bouton d'ajout au panier" />
                </div>
              </div>


              <div className="info">
                <p>{product.title}</p>
                <p>Prix : {product.price} € </p>
              </div>

            </div>
            <div className="back-card"></div>
          </div>
        </Link>
      ))}
    </div>
  );
}
