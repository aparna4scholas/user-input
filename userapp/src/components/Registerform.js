import React, { Component } from 'react';


 class Registerform extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            password: '',
            gender: '',

        }
        this.handleSubmit=this.handleSubmit.bind(this)
        
  }
  firsthandler = (e) => {
      this.state({
          firstname: e.target.value
      }
      )
  }
  lasthandler = (e) => {
    this.state({
        lastname: e.target.value
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
           <div> 
               <form onSubmit={this.handleSubmit}>
               <h2> SignUp form </h2>
               <label> Firstname :</label> 
               <input type='text' className="form-control" placeholder="First Name" value={this.state.firstname} onChange={this.state.firstname} />
               <br />
               <label> Lastname :</label> 
               <input type='text' value={this.state.lastname} onChange={this.state.lastname} />
               <br />
               <label> Password :</label> 
               <input type='text' value={this.state.password} onChange={this.state.password} />
               <br />
               <label> Gender:</label>
   

                <select>
               <option defaultValue> Select Gender</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
               </select> 
                <br />
               <input type="submit" value="Submit" /> 

            </form> 
           </div>
        );
    }
}

export default Registerform;