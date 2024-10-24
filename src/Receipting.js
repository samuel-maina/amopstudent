/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


import {render} from "react-dom";
import React from "react";
import {Redirect} from 'react-router-dom';
import StudentNav from './Nav';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { RotatingSquare } from 'react-loader-spinner'
        class Receipting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {payments: [], programs: [], total: 0, loading: false}
    }
   async componentDidMount() {
      await  this.setState({loading: true});
       await axios.get("payment/")
                .then((response) => {
                    this.setState({payments: response.data});
                }).catch((err) => {

        })
       await axios.get("sessions/total")
                .then((response) => {
                    this.setState({total: response.data})
                    this.setState({loading: false});
                }).catch((err) => {
                    this.setState({loading: false});



        });
    }
    render() {
        return(
                <div class="">
                    {this.state.loading ? <div class="centerpage">
                        <RotatingSquare
                            height="100"
                            width="100"
                            color="crimson"
                            ariaLabel="rotating-square-loading"
                            strokeWidth="4"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            /></div> :
                                    <div>
                                        <StudentNav/> 
                                        <div class="margin-top-md session grid-container">  
                                            <div class="input-variant-x item2">
                                                <p class="open-sans font-lg text-gray input-variant-w-0">Total spent</p>
                                
                                                <div class=" ">
                                
                                                    <span class="Mulish font-md bg-variant border-rad-md"> ${this.state.total}</span> 
                                
                                                </div></div>
                                
                                
                                            <div class="bg-variant-4  item1 content-body-sm hiden padding-md border-rad-sm play text-white"><p class="open-sans  font-vl text-white ">Receipting </p></div>
                                
                                        </div>
                                        <div class="margin-top-xsm session" >                       
                                            {  this.state.payments.map((payment, k) =>
                                                                <div class="  padding-xsm center-items grid-container font-sm  border-rad-mfd text-black"><span class="bg-variant-3 center  item2 text-white play">{payment.paymentDate}</span> <div class="item1 bg-white content-body-md"><span>${payment.amount}</span> <span><span class="material-symbols-outlined text-green">
                                                                                verified
                                                                            </span></span> <span><Link to={'/receipting/' + payment.id} class="text-salmon">view receipt</Link></span></div> </div>)}          </div>
                                    </div>}</div>
                );
    }
}
;

export default Receipting;


