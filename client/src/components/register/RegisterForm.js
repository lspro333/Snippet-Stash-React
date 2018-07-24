import React, { Component } from "react";
import {Link} from "react-router-dom";

class RegisterForm extends Component {

    render(){
        return (
            <div className= "FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit} action="/register" method= "post">

                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="firstName">First Name</label>
                    <input type="text" id="nfirstName" className= "FormField__Input" placeholder="Enter Your First Name" name="firstName"/>
                </div>

                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="firstName">Last Name</label>
                    <input type="text" id="lastName" className= "FormField__Input" placeholder="Enter Your Last Name" name="LastName"/>
                </div>

                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="name">Email</label>
                    <input type="email" id="email" className= "FormField__Input" placeholder="Enter Your email" name="email"/>
                </div>

                <div className="FormField">
                    <label className= "FormField__Label" htmlFor="name">Password</label>
                    <input type="password" id="password" className= "FormField__Input" placeholder="Enter Your Password" name="password"/>
                </div>

                
                <div className="FormField">
                    <button className= "FormField__Button mr-20">Sign Up</button>
                   
                </div>
                <div>
                <Link to= "/sign-in" className= "FormField__LinkMember">Already a member</Link>
                    <a className="FormField__LinkGuest" href="/">{'Enter as a Guest Here'}</a>
                </div>
             </form>   
            </div>
        );
    }
}

export default RegisterForm;

