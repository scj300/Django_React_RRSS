import React, {Component} from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import createHistory from 'history/createBrowserHistory'



type LoginFormProps = {
    on_login: any;
    history:any;
}

type LoginFormState = {
    username: string;
    password: string;
}



class LoginForm extends Component<LoginFormProps, LoginFormState> {

    state = {
        username: '',
        password: ''
    };



    onSubmit = (event: any) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/auth/', this.state).then( r => {

            localStorage.setItem('session', r.data.token);
            localStorage.setItem('username', r.data.username);
            axios.defaults.headers.common['Authorization'] = `JWT ${localStorage.getItem("session")}`;
            this.props.history.push('/posts')
        });

    };


    onChangeTextField = (event: any) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name === 'username') {
            this.setState({
                username: value,
            });
        } else if (name === 'password') {
            this.setState({
                password: value,
            });
        }
    };

    render() {

        return (

            <form  onSubmit={event => {this.onSubmit(event)}}>
                <h1>Login Usuario</h1>
                <div id="login">
                <h2>INICIAR SESIÓN</h2>
              <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.onChangeTextField}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.onChangeTextField}
                />
                <input type="submit"  />

                </div>
            </form>

        );
    }
}
export default LoginForm;