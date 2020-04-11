import React, {Component} from 'react';
import './App.css';
import Tabla from './Tabla';
import axios from 'axios';
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";


class Follow extends Component {

    state = {
        username:''

    };

    componentDidMount(): void {


    }
    onChangeTextField = (event: any) => {
        let id = event.target.id;
        let value = event.target.value;

        this.setState({
            [id]: value,
        });
    };

    onFollow(){
        axios.post('http://127.0.0.1:8000/api/follow/',{
            username:this.state.username,
        });
        };

    render(){
        return(
            <div>
                <form noValidate autoComplete="off">
                    <TextField id="username" label="IdUser" onChange={this.onChangeTextField}/>

                </form>
                <Button variant="contained" color="primary" onClick={()=>{this.onFollow()}}></Button>
            </div>

        )
    }
}
export default Follow;