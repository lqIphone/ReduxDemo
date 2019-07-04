import {createStore} from 'redux'
import reducer from './Reducer'

const initValue = {
    first:0,
    second:0,
    third:0
}
const store = createStore(reducer,initValue,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;