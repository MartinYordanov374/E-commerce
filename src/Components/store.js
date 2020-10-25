import {persistStore, persistReducer} from 'redux-persist'
import {createStore, applyMiddleware} from 'redux'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers'
import logger from 'redux-logger'
//persistConfig
const persistConfig = {
    key: 'root', 
    storage,
}
//logger

//persistStore
export const persistedReducer = persistReducer(persistConfig, reducer)
//persistReducer
export const store = createStore(persistedReducer,applyMiddleware(logger))
export const persistor = persistStore(store)
//persistor
