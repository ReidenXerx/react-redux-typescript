import { createStore } from 'redux'
import {rootReducer} from './Reducers'

export const store = createStore(rootReducer)
console.log(store.getState());
