import React from "react";

let outer = {
    display : "flex",
    justifyContent: "space-around",
    backgroundColor:"black",
    alignItems:"center",
    width: "90%",
    margin:"auto",
    marginTop: "20px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    gap:"50px",
}

let logo = {
    color:"white",
}

let links = {
    display: "flex",
    gap:"25px",
    alignItems:"center",
    color: "silver",
}

let btn = {
    padding: "5px 20px 5px 20px",
    fontSize: "18px",
    borderRadius: "20px",
    border:"teal",
    color: "white",
    backgroundColor: "dodgerblue"
}
const Navbar = () => {
    return(
        <div style = {outer}>
            <div> <h2 style = {logo}>LOGOBAKERY</h2> </div>
            <div style = {links}> <h3>Services</h3> <h3>Projects</h3> <h3>About</h3> </div>
            <div> <button style = {btn} >Contact</button> </div>
        </div>
    )
}

export {Navbar};