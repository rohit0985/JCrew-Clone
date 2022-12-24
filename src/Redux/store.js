import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import {reducer as AppReducer} from './AppReducer/reducer'
import {reducer as AuthReducer} from './AuthReducer/reducer'
import {reducer as CartReducer} from './CartReducer/reducer'
import {reducer as ShopLaterReducer} from './ShopLaterReducer/reducer'
import {reducer as SingleProductReducer} from "./SingleProduct/reducer"

const rootReducer = combineReducers({AppReducer, AuthReducer, CartReducer,ShopLaterReducer, SingleProductReducer})

const ComposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(rootReducer, ComposeEnhancers(applyMiddleware(thunk)))

export { store }