import { render } from "react-dom";
import React, { useState } from "react";
import SetAuthToken from './SetAuthToken';
import axios from 'axios';
import Nav from './Nav';
import { TailSpin } from 'react-loader-spinner'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', error: '', loading: false};
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
        this.setState({loading: true});
        var user = {email: this.state.email, password: this.state.password};
        const response = axios.post("http://104.248.113.144:8080/api/auth/signin", user)
                .then((response) => {
                    const token = response.data.value;
                    localStorage.setItem("studenttoken", token);
                    SetAuthToken(token);
                    window.location.href = "/";
                    //this.setState({loading: false});
                }).catch((err) => {
            console.log(err.response.data);
            this.setState({error: err.response.data});
            this.setState({loading: false});
        });
        event.preventDefault();
    }
    render() {
        if (this.state.loading === true) {
            return(
                    <div class="centerpage">
                        <TailSpin
                            height="120"
                            width="120"
                            color="crimson"
                            ariaLabel="tail-spin-loading"
                            radius="3"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                    
                            /></div>)
        } else
            return (
                    <div id="plage" class="content-body p-hekad ">
            
            
            <div class="overlay"></div>
                        <div class="w-100 margin-top-md flex-horizontal flex-center height-md">
                            <div class="w-  height-max">
                                <div class="">
                                </div>  
                            </div>
                            <div class="flex-vertical center index-top bg-variant-1 padding-lg border-rad-md">
                                <Link to="/">
                                <img src="/images/amops.png" width="130px" class="paddingsm float-left"/>
                                </Link>
                                <div class="text-gray  font-md Mulish"><b>Login to your account</b></div>
                                <p class="font-xsm margin-sm hidden">Your account is as secure as your security practices, always log out of your account after you are done with your work</p>
                                <form onSubmit={this.handleSubmit} className="float-right flex-vertical  margin-top-sm" >
                                    <div class="flex-vertical">
                                        <div class="center">
                                            <span class="material-symbols-outlined">
                                                mail 
                                            </span>
                                            <span class="font-sm">Email address</span>
                                        </div>
                                        <input type="text" id="email" value={this.state.email} class="input-variant" required onChange={this.handleEmailChange} placeholder="Email" />
                                    </div>   
                                    <div class="flex-vertical">
                                        <div class="center">
                    
                                            <span class="material-symbols-outlined text-salmon">
                                                key 
                                            </span>
                                            <span class="font-sm">Email address</span>
                    
                                        </div>
                                        <input type="password" id="password" value={this.state.password} class=" input-variant" required onChange={this.handlePasswordChange} placeholder="password" />
                                    </div>                        
                                    <div class="w-100 font-xsm ">  
                                        {this.state.error ?
                                            <div class="center crimson-text">
                                                <span class="material-symbols-outlined ">
                                                    gpp_maybe
                                                </span>
                                                <div class="text-salmon">{this.state.error}</div>
                                            </div> : <div></div>}
                                        <Link to="/recover-password" class=" text-gray">Forgot password?</Link>
                                    </div>    
                                    <input type="submit" value="Login" className="btn-variant-2 text-white font-sm " />
                                </form>
                            </div>
                        </div>
                        <div class="studentfooter">Amazing Devops</div>
                    </div>
                    );
    }
}
;
export default Login;


