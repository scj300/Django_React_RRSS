import React, {Component} from 'react';
import './App.css';
import Tabla from './Tabla';
import Home from './Home';
import axios from 'axios';
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import createHistory from 'history/createBrowserHistory'

class UserList extends Component {

    state = {
        posts: [],
        tf_title: '',
        tf_content: '',
        tf_img:'',
    };

    componentDidMount(): void {

        axios.get('http://127.0.0.1:8000/api/post/?filterbyuser=yes').then((r) => {
            this.setState({
                posts: r.data
            });
        });
    }


    onDeletePost = (postId: number) => {
        axios.delete('http://127.0.0.1:8000/api/post/' + postId+'/').then(r => {
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
                <Home data={this.state.posts} on_click_delete={this.onDeletePost} />
            </div>

        );
    }
}

export default UserList;