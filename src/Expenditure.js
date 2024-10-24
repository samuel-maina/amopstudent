


import {render} from "react-dom";
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, {setState} from "react";
import {Redirect} from 'react-router-dom'
import StudentNav from './Nav';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { jsPDF } from "jspdf";


class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {expenses: [], total_expenses: 0};
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:8080/api/v1/payment/user")
                .then((response) => {
                    this.setState({expenses: response.data});
                }).catch((err) => {
            console.log(err.response.data);
        });
        await axios.get("http://localhost:8080/api/v1/payment/user/total_by_student")
                .then((response) => {
                    this.setState({total_expenses: response.data});
                }).catch((err) => {
            console.log(err.response.data);
        });


    }

    render() {
        return(
                <div class="bg-white"> 
                    <StudentNav/>
                    <div class="content " id="pdf">
                
                        <div class="w-100 bg-variantk">
                
                            <div class="program-header"> 
                
                                <div class="margin-top-md">
                                    <h2 class="Roboto" >Payment History</h2>
                                    <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div>
                                </div>
                
                            </div>
                
                
                        </div>
                        <div class="  session flex-horizontal margin-top-sm">
                            <div class="w-20 ">
                                <CircularProgressbar value={(450 / this.state.total_expenses) * 100} text={this.state.total_expenses} strokeWidth={20}
                                                     styles={buildStyles({
                                                             // Rotation of path and trail, in number of turns (0-1)
                                                             rotation: 0,

                                                             // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                             strokeLinecap: 'butt',

                                                             // Text size
                                                             textSize: '16px',
                                                             textColor: '#f88',
                                                             trailColor: '#d6d6d6',
                                                             backgroundColor: '#3e98c7'

                                                         })}
                
                                                     /></div>
                            <div class="w-20 font-xsm flex-vertical centder margin-top-md float-left">
                                <div class="legend-1"></div> Spent
                                <div class="legend-2"></div> Balance
                            </div>
                        </div>
                        <div class="session bg-white sessisdon border-rad-md paddidng-md float-right" id="">
                
                
                            <div class="flex-horizontadl sessiosn center">
                
                                <table class="sessions ">
                                    <div class="font-lg float-left">  Payments</div>
                                    <tr class="text-white">
                                        <th>Transaction Code</th>
                                        <th>Expense Date</th>
                                        <th>Amount</th>
                                    </tr>
                                    {this.state.expenses.map(expense =>
                                <tr class="font-xsm">
                                    <td  class="">{expense.id} </td>
            
            
            
                                    <td class=" " >{expense.paymentDate}</td>
            
            
            
                                    <td class=" " >${expense.amount}</td>
                                </tr>

                                        )}
                                    <tr class="green-text bottom-border-sm text-bold Roboto"><td class="text-green font-sm">Total <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div></td><td></td><td class="font-sm">{this.state.total_expenses}</td></tr>
                                </table>
                
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}
;
export default Programs;


