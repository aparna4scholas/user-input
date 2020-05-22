import React, { Component } from 'react';
import Displayform from './Displayform';


 class Registerform extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: " ",
            username:" ",
            password: ' ',
            gender: " ",
            age:" ", 

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleGenderClick = this.handleGenderChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        
  }
  namehandler = (e) => {
      this.state({
          name: e.target.value
      }
      )
  }
  usernamehandler = (e) => {
    this.state({
        username: e.target.value
    }
    )
}
passwordhandler = (e) => {
    this.state({
        password: e.target.value
      })
}
genderhandler = (e) => {
    this.state({
        gender: e.target.value
     } )
}
handleSubmit = (e) => {
    this.state({
        value: e.target.value
    })

}

    render()
     {
        return (
               <form onSubmit={this.handleSubmit}>
                <div className="form-group">
               <h2> User Registration Form </h2>
               </div>
               <p> please fill all the fields to crete a new acccount</p>
               <div className="form-group">
               <label> Name :</label> 
               <input type='text' className="form-control" placeholder=" Name" value={this.state.firstname} onChange={this.state.firstname} />
               </div>
               <br />
               <div className="form-group">
               <label> Username :</label> 
               <div className="col-xs-4">
               <input type='text' className="form-control" value={this.state.lastname} onChange={this.state.lastname} />
               </div>
               </div>
               <br />
               <div className="form-group">
               <label> Password :</label> 
               <input type='text' className="form-control" value={this.state.password} onChange={this.state.password} />
               </div>
               <br />
               <div className="form-group">
               <label> Gender:</label>
                <select>
               <option defaultValue> Select Gender</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
               </select> 
                </div>
                <br />
                
               <input type="submit" className="btn btn-primary" value="Submit" /> 
               
            </form> 
           
        );
    }
}

export default Registerform;