import React, { Component } from 'react'

const Displayform=(props)=>{
     return (
            <div>
                <h1> user input values form</h1>
                <p> name {props.Details.name}</p>
                <p> user name is {props.Details.username} </p>
                <p> password is {props.Details.password}</p>
                <p> Age is {props.Details.age}</p>
                <p> Gender is {props.Details.gender}</p>
                
            </div>
        )
        }   

export default Displayform;