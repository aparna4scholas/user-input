import React, { Component } from 'react'

 class Registerform extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            password: "",
            gender: "",

        }
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


    }
    
    render()
     {
        return (
           <div> 
               <form>
               <h2> Register here </h2>
               </form> 
           </div>
        )
    }

export default Registerform;