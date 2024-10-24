/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


import {render} from "react-dom";
import React from "react";
import {Redirect} from 'react-router-dom';
import StudentNav from './Nav';
import axios from 'axios';
import Footer from './Footer';
import { RotatingSquare } from 'react-loader-spinner'
import Calendar from 'react-calendar';
import { Link, NavLink } from 'react-router-dom';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
class StudentHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {older: [], today: [], yesterday: [], payments: [], programs: [], loading: false}
        this.showConversation = this.showConversation.bind(this);
    }
    async   componentDidMount() {
        this.setState({loading: true});
        await   axios.get("payment/")
                .then((response) => {
                    this.setState({payments: response.data});
                }).catch((err) => {

        })
        await  axios.get("sessions/student")
                .then((response) => {
                    this.setState({programs: response.data});
                    this.setState({loading: false});
                }).catch((err) => {
            this.setState({loading: false});

        });
        await axios.get("sessions/sorted")
                .then((response) => {
                    if (response.data.Older != null) {
                        this.setState({older: response.data.Older});
                    }
                    if (response.data.Yesterday != null) {
                        this.setState({yesterday: response.data.Yesterday});
                    }
                    if (response.data.Today != null) {

                        this.setState({today: response.data.Today});

                    }
                }).catch((err) => {



        });

    }
    showConversation(id) {
        var style = document.getElementById(id).style.display;
        if (style === "block") {
            document.getElementById(id).style.display = "none";
            document.getElementById('su' + id).style.transform = "rotate(0deg)";
        } else {
            document.getElementById(id).style.display = "block";
            document.getElementById('su' + id).style.transform = "rotate(180deg)";
        }
    }
    render() {
        return(
                <div class="">
        <StudentNav/>
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
                                         
                                        <div class=" margin-top-md session">
                                            <div class="p-head"></div>
                                
                                
                                            <hr/>
                                
                                
                                            <div class="margin-top-xsm  grid-container">  
                                                <div class="input-variant-x item2 border-rad-md">
                                                    <p class="open-sans font-lg text-gray input-variant-w-0">   My Classes</p>
                                                    <div class=" content-body-sm ">
                                
                                                        {this.state.programs.map(program =>
                                                                <Link to={'/classes/' + program.id} class=' p '>  
                                        
                                        
                                                                <div class="  p-head-sm" style={{backgroundImage: `url(${'http://104.248.113.144:3030/' + program.image.smallImage})`}}></div>
                                                                <div class="flex-vertical pointer padding-md ">
                                                                    <u class="crimson-text font-xsm">{program.name}</u> 
                                        
                                        
                                                                </div>
                                        
                                        
                                                                </Link>)}
                                                        <Calendar/>
                                                    </div>
                                                </div>
                                                <div class="item1  padding-md border-rad-md  overflow-none " >
                                                    <div>
                                                        <div class="open-sans font-sm text-gray  margin-md">NOTIFICATIONS </div>
                                                        <hr/>
                                                        <div class=" border-rad-md input-variant-x">
                                                            <div class="input-variant-0 bg-white  border-rad-md padding-md margin-top-xsm font-xsm">
                                                                <div class="alert-container center">                                                    
                                                                    <span class="material-symbols-outlined icon">
                                                                        campaign
                                                                    </span>
                                                                    <div class="info">
                                                                        Hello samuel we welcome you today as you begin this owesome journey with us. We hope that you will have  a great time with us.
                                                                    </div>                                                
                                                                    <div class="date">Today 4:45AM</div>
                                                                    <div class="expand"><span class="material-symbols-outlined">
                                                                            arrow_drop_down
                                                                        </span></div>
                                                                </div></div>
                                                            <hr/>
                                                            <div class="input-variant-0 bg-white  border-rad-md padding-md margin-top-xsm font-xsm">
                                                                <div class="alert-container center">                                                    
                                                                    <span class="material-symbols-outlined icon">
                                                                        campaign
                                                                    </span>
                                                                    <div class="info">
                                                                        Hello samuel we welcome you today as you begin this owesome journey with us. We hope that you will have  a great time with us.
                                                                    </div>                                                
                                                                    <div class="date">Today 4:45AM</div>
                                                                    <div class="expand"><span class="material-symbols-outlined">
                                                                            arrow_drop_down
                                                                        </span></div>
                                                                </div></div>
                                                            <hr/>
                                                            <div class="input-variant-0 bg-white  border-rad-md padding-md margin-top-xsm font-xsm">
                                                                <div class="alert-container center">                                                    
                                                                    <span class="material-symbols-outlined icon">
                                                                        campaign
                                                                    </span>
                                                                    <div class="info">
                                                                        Hello samuel we welcome you today as you begin this owesome journey with us. We hope that you will have  a great time with us.
                                                                    </div>                                                
                                                                    <div class="date">Today 4:45AM</div>
                                                                    <div class="expand"><span class="material-symbols-outlined">
                                                                            arrow_drop_down
                                                                        </span></div>
                                                                </div></div>
                                
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="open-sans font-sm text-gray input-variant-w-0-x text-white margin-top-xsm">EXPENSES ON AMAZINGDEVOPS</div>
                                                        <hr/>                                                
                                                        <div class=" border-rad-md input-variant-x font-sm play ">
                                                            <div class=" ">
                                                                {this.state.payments.map(p => <div class="content-body-xsm bg-variant-3 margin-top-xsm   padding-md  border-rad-md text-white"><div>{p.paymentDate}</div> <div>${p.amount}</div> <div> {p.receiptedProgram}</div> <span class="material-symbols-outlined float-right text-silver">
                                    verified
                                </span></div>)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p class="open-sans font-sm text-gray ">CONVERSATIONS </p>
                                                        <hr/>
                                                        <div class=" border-rad-md input-variant-x">
                                                            <div class="input-variant-0 bg-white  border-rad-md padding-md margin-top-xsm font-xsm">
                                                                <div class="alert-container center">                                                    
                                                                    <span class="material-symbols-outlined icon">
                                                                        mail
                                                                    </span>
                                                                    <div class="info">
                                                                        Hello samuel we welcome you today as you begin this owesome journey with us. We hope that you will have  a great time with us.
                                                                    </div>                                                
                                                                    <div class="date">Today 4:45AM</div>
                                                                    <div class="expand"><span id="su2"class="material-symbols-outlined border-rad-md bg-variant-4 pointer text-white" onClick={(e) => this.showConversation(2)}>
                                                                            arrow_drop_down
                                                                        </span></div>
                                                                </div>
                                                                <div class="hidden" id="2">So there you have it, a way to do performant clip animations using scale transforms. In a perfect world, it would be great to see clip animations be accelerated (there’s a Chromium bug for that made by Jake Archibald), but until we get there, you should be cautious when animating clip or clip-path, and definitely avoid animating width or height.
                                
                                                                    It would also be handy to use Web Animations for effects like this, because they have a JavaScript API but can run on the compositor thread if you only animate transform and opacity. Unfortunately, support for Web Animations isn’t great, though you could use progressive enhancement to use them if they’re available</div>
                                
                                                            </div>
                                                            <hr/>
                                                            <div class="input-variant-0 bg-white  border-rad-md padding-md margin-top-xsm font-xsm">
                                                                <div class="alert-container center">                                                    
                                                                    <span class="material-symbols-outlined icon pointer">
                                                                        mail
                                                                    </span>
                                                                    <div class="info">
                                                                        Hello samuel we welcome you today as you begin this owesome journey with us. We hope that you will have  a great time with us.
                                                                    </div>                                                
                                                                    <div class="date">Today 4:45AM</div>
                                                                    <div class="expand"><span id="su3"class="material-symbols-outlined border-rad-md bg-variant-4 text-white pointer" onClick={(e) => this.showConversation(3)}>
                                                                            arrow_drop_down
                                                                        </span></div>
                                                                </div>
                                                                <div class="hidden" id="3">So there you have it, a way to do performant clip animations using scale transforms. In a perfect world, it would be great to see clip animations be accelerated (there’s a Chromium bug for that made by Jake Archibald), but until we get there, you should be cautious when animating clip or clip-path, and definitely avoid animating width or height.
                                
                                                                    It would also be handy to use Web Animations for effects like this, because they have a JavaScript API but can run on the compositor thread if you only animate transform and opacity. Unfortunately, support for Web Animations isn’t great, though you could use progressive enhancement to use them if they’re available</div>
                                
                                
                                                            </div>
                                                            <hr/>
                                                              <div class="input-variant-0 bg-white  border-rad-md padding-md margin-top-xsm font-xsm">
                                                                <div class="alert-container center">                                                    
                                                                    <span class="material-symbols-outlined icon pointer">
                                                                        mail
                                                                    </span>
                                                                    <div class="info">
                                                                        Hello samuel we welcome you today as you begin this owesome journey with us. We hope that you will have  a great time with us.
                                                                    </div>                                                
                                                                    <div class="date">Today 4:45AM</div>
                                                                    <div class="expand"><span id="su4"class="material-symbols-outlined border-rad-md bg-variant-4 text-white pointer" onClick={(e) => this.showConversation(4)}>
                                                                            arrow_drop_down
                                                                        </span></div>
                                                                </div>
                                                                <div class="hidden" id="4">So there you have it, a way to do performant clip animations using scale transforms. In a perfect world, it would be great to see clip animations be accelerated (there’s a Chromium bug for that made by Jake Archibald), but until we get there, you should be cautious when animating clip or clip-path, and definitely avoid animating width or height.
                                
                                                                    It would also be handy to use Web Animations for effects like this, because they have a JavaScript API but can run on the compositor thread if you only animate transform and opacity. Unfortunately, support for Web Animations isn’t great, though you could use progressive enhancement to use them if they’re available</div>
                                
                                
                                                            </div>
                                
                                                        </div>                                                
                                                    </div>
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>                  
                                
                                
                                
                                        </div>
                                        <Footer/>
                                    </div>}</div>
                );
    }
}
;

export default StudentHome;