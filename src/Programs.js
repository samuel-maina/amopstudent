import {render} from "react-dom";
import React, {setState}from "react";
import {Redirect} from 'react-router-dom'
import StudentNav from './Nav';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { RotatingSquare } from 'react-loader-spinner'
        class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {programs: [], loading: false};
    }
    async componentDidMount() {
        this.setState({loading: true});
        const response = await axios.get("programs/")
                .then((response) => {
                    this.setState({programs: response.data});
                    this.setState({loading: false});
                }).catch((err) => {


        });
    }

    render() {
        return(
                <div> 
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
                            /></div> : <div>
                        
                        <div class="session">
                
                            <div class="program-headerh  margin-top-md"></div>  
                
                            <div class=" content-body-md">
                
                                {this.state.programs.map(program =>
                                                <Link to={'/programs/' + program.id} class='font-md p'>  
                                
                                
                                                <div class="  p-head" style={{backgroundImage: `url(${'http://104.248.113.144:3030/' + program.image.bigImage})`}}></div>
                                                <div class="flex-vertical pointer padding-md ">
                                                    <u class="crimson-text font-lg">{program.name}</u> 
                                                    <span class=" font-sm  play text-bold"> Sessions :                                         <span class="font-sm green-text">{program.sessions.length}</span>
                                                    </span>
                                                    <span class="padding-sm font-sm text-gray Roboto">{(program.description).substring(0, 100) + "...."}</span>
                                
                                
                                                </div>
                                
                                                <div class="btn-variant bottom-md-0"></div>                                
                                                </Link>
                                                            )
                                }
                
                            </div>
                        </div>
                    </div>} 
                </div>
                );
    }
}
;

export default Programs;


