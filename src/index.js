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
import NewStory from './NewStory';
import Profile from './Profile';
import Stat from './Stat';
import RelatedArticle from './RelatedArticle';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// ReactDOM.render(<Login />, document.getElementById('Login'));

ReactDOM.
    render (
            <Router>
                <Route exact path ="/home" component={Home} />
                <Route path ="/login" component={Login} />
                <Route path ="/category_page" component={CategoryPage} />
                <Route path ="/register" component={App} />
                <Route path ="/article_detail" component={ArticleDetail} />
                <Route path ="/drop" component={DropDownProfile} /> 
                <Route path ="/comment" component ={Comment} />
                <Route path ="/bookmark" component ={Bookmark} />
                <Route path ="/story" component ={Story} />
                <Route path ="/story_nav_draft" component={StoryNavDraft} />
                <Route path ="/new_story" component={NewStory} />
                <Route path ="/profile" component={Profile} />
                <Route path ="/stat" component={Stat} />
                <Route path ="/related_article" component={RelatedArticle} />
            </Router>
        
, document.getElementById('Home'));
serviceWorker.unregister();
