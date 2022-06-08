const INITIAL_STATE = {
    panier: []
}


export default function productsReducer (state = INITIAL_STATE, action) {
    switch(action.type) {
        case "ADDPRODUCT": {

            const indexProductAdd = state.panier.findIndex(obj => obj.id === action.payload.id)
            
            // Est ce que l'objet existe déjà dans le panier ? Oui => on met à jour la propriété quantity
            if (indexProductAdd !== -1) {
                const newArr = [...state.panier]
                newArr[indexProductAdd].quantity += action.payload.quantity

                return {
                    panier: newArr
                }
            }
            // Sinon on l'ajoute au panier
            else {
                const newArr = [...state.panier]
                newArr.push(action.payload)

                return {
                    panier: newArr
                }
            }
        }
        default : {}
    }
    return state;
}
