import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import PostList from "./PostList";
import UploadPost from "./UpoloadPost";
import Follow from "./Follow";
import UserList from "./UserList";
import Tabla from "./Tabla";
{/*import PostEnDetalle from "./PostEnDetalle";*/}
import createHistory from 'history/createBrowserHistory';

// history={createHistory()
class App extends Component {

    componentDidMount(): void {

    axios.defaults.headers.common['Authorization'] = `JWT ${localStorage.getItem("session")}`;
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    }
    render () {
        return (

            <BrowserRouter>
                <NavBar logged_in={true}/>
                <Switch>
                    <Route path="/userlist" component={UserList} />}/>

                    <Route path="/upload" component={UploadPost}/>
                    <Route path="/follow" component={Follow}/>
                    <Route path="/register" component={RegistrationForm} />
                    <Route path="/posts" component={PostList}/>
                    <Route path="/" component={LoginForm} />}/>


                </Switch>

            </BrowserRouter>


        );
    }
}

export default App;