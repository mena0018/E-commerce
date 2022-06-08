import { createStore } from 'redux';
import productsReducer from './reducer/productsReducer';


const store = createStore(productsReducer);

export default store;
