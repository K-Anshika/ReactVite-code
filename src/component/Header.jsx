import React from "react";

import "./style.css"

export function Header(){
    const styles = {
        box: {
            height:"100%",
            width: "100%",
            backgroundColor:"#f4f5f7"
        },
        head : {
             zIndex:"100",
             height:"80px",
             width:"1530px",
             backgroundColor: "black",
             position: "fixed",
             top:"0px",
             display:"flex",
             gap:"10px",
             margin:"0px",
             alignItems:"center",
             justifyContent: "space-between",
             boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)"
        },
        head1 : {
            fontSize:"30px",
            marginLeft:"60px",
            color:"#FFB000",
        },
        span :{
            fontSize:"30px",
            color: "white",
            // textShadow:"5px 0  white"
        },
        nav: {
            margin:"0 60px 0 300px",
        },

        home:{
              color:"darkgrey",
              textDecoration:"none",
              marginRight:"30px"
        },
        about:{ color:"white",
              textDecoration:"none",
             marginRight:"30px"
            },
        service:{ color:"darkred",
              textDecorationColor:"darkred",
              marginRight:"30px",
              fontWeight:"bolder"
            },
        contact:{
                 color:"white",
              textDecoration:"none",
              marginRight:"30px"
        }
    }

    return (
        <>
        <div style = {styles.box}>

          <header style={styles.head}>
            <h1 style={styles.head1}>UI <span style={styles.span}> Hub </span></h1>
            <nav style={styles.nav}>
                <a href="/" style={styles.home}>Home</a>
                <a href="/welcome" style={styles.about}>About</a>
                <a href="" style={styles.service}>Services</a>
                <a href="/fetchdata" style={styles.service}>Products</a>
                <a href="" style={styles.contact}>Contact</a>
            </nav>
          </header>

        </div>
        </>
    )
}