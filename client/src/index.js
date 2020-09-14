import React from 'react'
import reducers from './Reducer'
import ReactDom from 'react-dom'
import App from './Component/App'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import reduxThunk from 'redux-thunk'
import History from './History'

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
// REDUXSTORE
const store=createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))
ReactDom.render(<Provider store={store}><Router history={History}><App/></Router></Provider>,document.getElementById('root'))