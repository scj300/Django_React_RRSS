import React, {Component} from 'react';
import './App.css';
import Tabla from './Tabla';
import axios from 'axios';
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";



class UploadPost extends Component {

    state = {
        posts: [],
        tf_title: '',
        tf_content: '',
        tf_img:'',
    };

    componentDidMount(): void {

        axios.get('http://127.0.0.1:8000/api/post/').then((r) => {
            this.setState({
                posts: r.data,
            });
        });
    }


    onChangeTextField = (event: any) => {
        let id = event.target.id;
        let value = event.target.value;

        this.setState({
            [id]: value,
        });
    };


    render () {
        return (

                <form noValidate autoComplete="off">
                    <h1>Subir Post</h1>
                    <div id="login">
                    <h2>CAMPOS DEL POST</h2>
                    <input id="tf_img" placeholder="Imagen" onChange={this.onChangeTextField}/>
                    <input id="tf_title" placeholder="Titulo" onChange={this.onChangeTextField}/>
                    <input id="tf_content" placeholder="Comentario" onChange={this.onChangeTextField} />



                <Button variant="contained" color="primary" onClick={() => {
                    // Enviar los datos al servidor
                    // Recopilar los datos

                    // Petición
                    axios.post('http://127.0.0.1:8000/api/post/', {
                        title: this.state['tf_title'],
                        content: this.state['tf_content'],
                        img_url:this.state['tf_img'],
                    }).then(r => {
                        this.setState({
                            posts: [...this.state.posts, r.data]
                        });
                    });
                }}>
                    Publicar
                </Button>
                    </div>
                </form>


        );
    }
}

export default UploadPost;