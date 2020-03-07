import {combineReducers} from 'redux'
import ProductReducer from './ProductReducer'
import CartReducer from './CartReducer'
import MessageReducer from './MessageReducer'

const rootReducer=combineReducers({
    ProductReducer,
    CartReducer,
    MessageReducer,
});
export default rootReducer