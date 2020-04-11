import React from 'react';
import {AppBar, Typography, Toolbar, Button} from "@material-ui/core";
import axios from "axios";
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from "react-bootstrap";



type NavBarProps = {
    logged_in: boolean;

};



const NavBar = (props: NavBarProps) => {

  let { logged_in,} = props;
    return (

        <div className="topnav">

            <a href="/upload">Upload</a>
            <a href="/follow">Follow</a>
            <a href="/register">Register</a>
            <a href="/userlist">Profile</a>
            <a href="/posts">Posts</a>
            <a href="/">Home</a>

             <form className="navbar-form navbar-left" action="">
                <div className="form-group">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">PSS</a>
              </div>
                <input type="text" className="form-control" placeholder="Search Companies"></input>
                <input type="text" className="form-control" placeholder="Place"></input>

             </div>
            <button type="submit" className="btn btn-default">Buscar</button>
             </form>



        </div>

    );
};

export default  NavBar;

