import React, {Component} from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";


import { withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'


{/*
class PostEnDetalle extends Component{
    state = {
         post:[]

        }


  componentDidMount() {
        const id =this.props.match.params.id
        axios.get(
            'http://127.0.0.1:8000/api/post/' +id+'/',    // Especificamos el post
        ).then(r => {
            this.setState({
                post: r.data           // Almacenamos todos su campos
            })
        });
    }

render() {

        return (
        <p>{this.state.post.content}</p>



        )
    }
}
export default PostEnDetalle;

*/}