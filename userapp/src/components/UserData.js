import React, { Component } from 'react'
import Displayform from './Displayform';


class UserData extends Component {
    constructor(props) 
    {
        super(props);
        
        this.state = {
            name: '',
            username: '',
            password: '',
            gender: '',
            age: '',
            form:false
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleGenderClick = this.handleGenderClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.name, event.target.value);
    }
    handleGenderClick(event) {
        this.setState({ gender: event.target.value });

    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({ form: true })
    }


    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <h2> User Registration Form </h2>
                </div>
                <p> please fill all the fields to crete a new acccount</p>
                <div className="form-group">
                    <label> Name :</label>
                    <input type='text' className="form-control" placeholder=" Name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <br />
                <div className="form-group">
                    <label> Username :</label>
                    <div className="col-xs-4">
                        <input type='text' className="form-control" value={this.state.username} onChange={this.handleChange} />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label> Password :</label>
                    <input type='text' className="form-control" value={this.state.password} onChange={this.handleChange} />
                </div>
                <br />
                <div className="form-group">
                    <label> age :</label>
                    <input type='number' className="form-control" value={this.state.age} onChange={this.handleChange} />
                </div>
                <br />
                <div className="form-group">
                    <label> Gender:</label>
                    <select className='options' onClick={this.handleGenderClick}>
                        <option defaultValue> </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <br />

                <input type="submit" className="btn btn-primary" value="Submit" />
                {this.state.form===true && <Displayform Details={this.state} />}

            </form>


        );
    }
}

export default UserData;