import {createStore} from 'redux'
import taskReducer from './reducers'
const store = createStore(taskReducer)

store.subscribe(()=>
        console.log('Your store is now', store.getState())

    )
export default store