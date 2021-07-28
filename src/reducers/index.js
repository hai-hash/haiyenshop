import { combineReducers } from "redux";
import product from './product';

const myReducer = combineReducers({
    products : product,
});


export default myReducer;