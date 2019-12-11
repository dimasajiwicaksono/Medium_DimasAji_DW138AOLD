import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/icons';

import './index.css';
// import App from './App';
// import Login from './Login';
import Home from './Home';
//import CategoryPage from './CategoryPage';
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<Login />, document.getElementById('Login'));
// ReactDOM.render(<App />, document.getElementById('Register'));
ReactDOM.render(<Home />, document.getElementById('Home'));
//ReactDOM.render(<CategoryPage />, document.getElementById('CategoryPage'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
