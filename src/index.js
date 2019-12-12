import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/icons';
import './index.css';
import App from './App';
import Login from './Login';
import Home from './Home';
// import Route from './Route';
import ArticleDetail from './ArticleDetail';
import CategoryPage from './CategoryPage';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// ReactDOM.render(<Login />, document.getElementById('Login'));

ReactDOM.
    render (
            <Router>
                <Route exact path ="/home" component={Home} />
                <Route exact path ="/login" component={Login} />
                <Route exact path ="/category_page" component={CategoryPage} />
                <Route exact path ="/register" component={App} />
                <Route exact path ="/article_detail" component={ArticleDetail} />
                {/* <Route exact path ="/route" component={Route} /> */}
            </Router>
        
, document.getElementById('Home'));
serviceWorker.unregister();
