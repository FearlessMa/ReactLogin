import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <NavigationBar />
                <Routes/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
