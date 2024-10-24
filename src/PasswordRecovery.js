import { render } from "react-dom";
import React, { useState } from "react";
import SetAuthToken from './SetAuthToken';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class PasswordRecovery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', loading: false};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    
    handleSubmit(event) {
        this.setState({loading: true});
        var user = {email: this.state.email, password: this.state.password};
        const response = axios.post("http://104.248.113.144:8080/api/auth/signin", user)
                .then((response) => {
                    const token = response.data.value;
                    localStorage.setItem("studenttoken", token);
                    SetAuthToken(token);
                    window.location.href = "/recover-code";
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
                    <div id="plage" class="content-bo centerpage margin-top-mdd ">
                        <div class="w-100  flex-horizontal flex-center height-mdd">
                            
                            <div class="flex-d center content-body-md">
                            <div class="bg-variant flex-vertical  center padding-md border-rad-md">
                                <img src="/images/amops.png" width="130px" class="paddingsm float-left"/>
                                
                                <div class="text-gray Mulish font-md">Enter your e-mail address</div>
                                </div>
                                <form onSubmit={this.handleSubmit} className=" float-right  bg-variant-3 padding-md border-rad-md flex-fvertical  " >
                                    <div class="flex-vertical">
                                       
                                        <input type="text" id="email" value={this.state.email} class=" border-rad-md input-variant" required onChange={this.handleEmailChange} placeholder="Email" />
                                    </div>   
                                                           
                                    <div class="w-100 font-xsm ">  
                                        {this.state.error ?
                                            <div class="center crimson-text">
                                                <span class="material-symbols-outlined ">
                                                    gpp_maybe
                                                </span>
                                                <div class="text-salmon">{this.state.error}</div>
                                            </div> : <div></div>}
                                        
                                    </div>    
                                    <input type="submit" value="Go" className="margin-top-sm btn-variant-2 border-rad-md text-white font-sm " />
                                </form>
                            </div>
                        </div>
                        <div class="studentfooter">Amazing Devops</div>
                    </div>
                    );
    }
}
;
export default PasswordRecovery;


