import React from "react";

// icons insertion topic --- left

import "./style.css"

export function Footer(){
    const styles = {
        foot: {
            zIndex:"100",
            width:"100%",
            backgroundColor: "black",
            position:"relative",
            bottom:"0px",
            height:"60px",
            color: "#9ca3af",
            textAlign: "center",
            padding: "20px 0",
            fontSize: "14px",
            letterSpacing: "0.5px"
        }
    }

    return (
        <>
          <footer style={styles.foot}>
                <p>&copy; 2026 XpressB Hub. All rights reserved.</p>
            </footer>
        </>
    )
}