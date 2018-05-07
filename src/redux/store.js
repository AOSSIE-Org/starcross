import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import logger from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'

const middleware = [thunk, logger]

const store = createStore(reducers, {}, compose(applyMiddleware(...middleware), autoRehydrate()))

persistStore(store, {
	storage: AsyncStorage
})

export default store
