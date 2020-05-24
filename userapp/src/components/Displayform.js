import React, { Component } from 'react'

const Displayform = (props) => { 
     return (
            <div>
                <h1> user input values are</h1>
                <p> name :{props.Details.name}</p>
                <p> user name : {props.Details.username} </p>
                <p> password : {props.Details.password}</p>
                <p> Age :{props.Details.age}</p>
                <p> Gender :{props.Details.gender}</p>
                
            </div>
        )
        }   

export default Displayform;