import React, {Component} from 'react';
import './App.css';
import Tabla from './Tabla';
import Home from './Home';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

let config = {
    headers: {
        Authorization: `JWT ${localStorage.getItem("session")}`
    }
};

class PostList extends Component {

    state = {
        posts: [],
        tf_title: '',
        tf_content: '',
        tf_img:'',

    };

    componentDidMount(): void {

        axios.get('http://127.0.0.1:8000/api/post/', config).then((r) => {
            this.setState({

                posts: r.data,
            });
        });
    }
    onFollow(postId:number){
     axios.post('http://127.0.0.1:8000/api/follow/'+postId+'/',{
     });
    }


    onDeletePost = (postId: number) => {
        axios.delete('http://127.0.0.1:8000/api/post/' + postId+'/', config).then(r => {
            if (r.status === 200) {
                const new_posts = this.state.posts.filter((p: any) => {
                    return p.id !== postId;
                });

                this.setState({
                    posts: new_posts
                })
            }
        });
    };

    render () {
        return (
            <div>

                <Home data={this.state.posts} on_click_delete={this.onDeletePost} on_click_follow={this.onFollow}/>
            </div>

        );
    }
}

export default PostList;