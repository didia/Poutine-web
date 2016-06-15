import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './src/containers/App'
//import thunkMiddleware from 'redux-thunk'
//import api from './middleware/api'
import authentication from './src/reducers/authentication'

//let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)
let store = createStore(authentication)
let rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store = { store }>
        <App/>
    </Provider>,
    rootElement
)