


import {render} from "react-dom";
import React from "react";
import {Redirect} from 'react-router-dom'
import StudentNav from './Nav';
import Footer from './Footer';
import axios from 'axios';
import { Line, Circle } from 'rc-progress';
import { RotatingSquare } from 'react-loader-spinner';
import { Link, NavLink } from 'react-router-dom';

        class MyClasses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {programs: [], program: '', sessions: [], total_expenses: 0, loading: true};
    }
    async componentDidMount() {
        
        await axios.get("sessions/student")
                .then((response) => {
                    this.setState({programs: response.data});
                    this.setState({loading: false})
                }).catch((err) => {

        });
    }

    render() {
        const isLoggedIn = false;
        return(
                <div> 
                    <StudentNav/>
                    {this.state.loading? <div class="centerpage">
                        <RotatingSquare
                            height="100"
                            width="100"
                            color="crimson"
                            ariaLabel="rotating-square-loading"
                            strokeWidth="4"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            /></div>:<div>
                    <div class="session margin-top-md">
                        <div class="program-header hidden">                
                
                
                
                        </div>
                
                        <div class="content-body-lg margin-top-xsm">
                            {this.state.programs.map(program =>
                           
                                        <Link to={'/classes/' + program.id} class="   bg-variant-2 padding-md border-rad-md    ">
                            
                            
                                            <div class="text-white Roboto font-lg text-bold"></div>
                                            <div class="text-white Mulish  font-md  "> {program.name}</div>
                                            <div class="content-body-sm center ">
                                                <div class="badge margin-xsm font-xsm padding-sm text-white border-rad-md">  In Progress</div>
                                                <div class="item6 w-20 border-rad-md padding-md Ubuntu  text-gray">
                            
                                                    <Circle percent="20" strokeWidth="10" strokeColor="crimson" trailWidth="1"/>                            
                                                </div>
                            
                            
                                             
                            <div class="text-gray border-rad-md padding-sm font-sm  bg-white w-20 Mulish"> sessions {program.sessions.length} </div>
                                        
                            
                            
                                            </div>  
                                            <div class="text-gray hidden border-rad-md padding-sm font-sm  bg-white w-20 Mulish"> sessions {program.sessions.length} </div>
                                        </Link>

                                        )}
                        </div>
                    </div>
                    </div>}
                </div>
                );
    }
}
;

export default MyClasses;



