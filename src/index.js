import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/icons';
// import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/free-solid-svg-icons';
import './index.css';
import App from './App';
import Login from './Login';
import Home from './Home';
import Bookmark from './components/Bookmark';
import DropDownProfile from './components/DropDownProfile';
import ArticleDetail from './ArticleDetail';
import CategoryPage from './CategoryPage';
import Comment from './components/Comment';
import Story from './StoryNav';
import StoryNavDraft from './StoryNavDraft';
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
                <Route exact path ="/drop" component={DropDownProfile} /> 
                <Route exact path ="/comment" component ={Comment} />
                <Route exact path ="/bookmark" component ={Bookmark} />
                <Route exact path ="/story" component ={Story} />
                <Route excat path ="/story_nav_draft" component={StoryNavDraft} />
            </Router>
        
, document.getElementById('DropDownProfile'));
serviceWorker.unregister();
