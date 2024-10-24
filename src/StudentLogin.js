import { render } from "react-dom";
import React, { useState } from "react";
import SetAuthToken from './SetAuthToken';
import axios from 'axios';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class StudentLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', error: ''};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    handleSubmit(event) {
        var user = {email: this.state.email, password: this.state.password};
        const response = axios.post("http://localhost:8080/api/auth/signin", user)
                .then((response) => {
                    const token = response.data.value;
                    localStorage.setItem("token", token);
                    SetAuthToken(token);
                    window.location.href = '/student/home';
                }).catch((err) => {
            console.log(err.response.data);
            this.setState({error: err.response.data});
        });
        event.preventDefault();
    }
    render() {
        return (
                <div id="plage" class="content-body">
                    <div class="w-100 margin-top-md flex-horizontal flex-center height-md">
                        <div class="w-5    height-max">
                            <div class="login-image">
                            </div>  
                        </div>
                        <div class="w-5  flex-vertical bg-variant  height-max">
                            <p class="crimson-text"><b>Login to your account</b></p>
                            <p class="font-xsm margin-sm">Your account is as secure as your security practices, always log out of your account after you are done with your work</p>
                            <form onSubmit={this.handleSubmit} className="float-right margin-top-sm" id="user_reg">
                                <input type="text" id="email" value={this.state.email} class="input-variant " required onChange={this.handleEmailChange} placeholder="Email" />
                                <input type="password" id="password" value={this.state.password} class=" input-variant " required onChange={this.handlePasswordChange} placeholder="password" />
                                <div class="w-100 font-xsm margin-sm padding-md">    
                                    <Link to="/student/forgot_password/">Forgot password?</Link>
                                </div>    
                                <input type="submit" value="Login" className="button-variant text-white font-sm " />
                            </form>
                        </div>
                    </div>
                </div>
            );
    }
}
;
export default StudentLogin;


