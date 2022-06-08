const INITIAL_STATE = {
    nbMugs: []
}


export default function productsReducer (state = INITIAL_STATE, action) {
    switch(action.type) {
        case "ADDPRODUCT": {
            return {
                nbMugs: action.payload.nbMugs,
            }
        }
        case "UPDATEPRODUCT": {
            return {

            }
        }
        default : {

        }
    }

    return state;
}