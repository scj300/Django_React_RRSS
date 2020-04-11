import React, {Component} from "react";
import axios from "axios";

import {Container,Button,Link} from "@material-ui/core";


 const Home = (props:any)=>{
    let {data, on_click_delete,on_click_follow} = props;

    data = data.map((post:any, i:number)=>{
        return(

                <li key={post.id}>


                    <img
                        src={post.img_url}
                        width='80px'
                        height='80px'
                    />
                    <h3>Puesto de Trabajo</h3>
                     <div id="empresa">
                        <p>{post.author.username}</p>
                    </div>

                    <div id="comentario">
                        <p>{post.content}</p>

                    </div>
                    <hr/>
                     <div className="fecha">
                        <p>Fecha:</p>
                        <p>{post.date}</p>
                        <Button variant="outlined" onClick={()=>{on_click_follow(post.id)}}>Seguir</Button>
                        <Button variant="outlined" onClick={()=>{on_click_delete(post.id)}}>Ver Lista</Button>

                    </div>

                </li>

        );
    });
    return(

                    <section id="userposts">
                      <div id="topbutton">
                     <Button variant="outlined" >Crear Oferta</Button>
                     </div>
                        <ul >
        {data}
                        </ul>
                    </section>
    );
};
  {/*   <Link to={'/postdetail/${post.id}'}>Show</Link>*/}


export default Home;