
import {render} from "react-dom";
import React, {setState} from "react";
import {Redirect} from 'react-router-dom'
import StudentNav from './Nav';
import axios from 'axios';
import Footer from './Footer';
import Pay from './Pay';
import { RotatingSquare } from 'react-loader-spinner'
import {Link} from 'react-router-dom';


class RegisterProgram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {program: "", courses: [], session: 0, image: "", sessions: [],loading:false}
    }
    async componentDidMount() {
this.setState({loading: true});
        await axios.get("programs/" + this.props.match.params.id)
                .then((response) => {
                    this.setState({program: response.data});
                    this.setState({session: response.data.sessions.length});
                    this.setState({sessions: response.data.sessions});
                    this.setState({image: response.data.image.bigImage});
                    this.setState({loading: false});
                }).catch((err) => {
            

        });
    }



    render() {
        return(
                <div> 
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
                            /></div>:
        <div>
                    <StudentNav/>
                    <div class="session margin-top-md">
                
                        <div class='program-header' style={{backgroundImage: `url(${'http://104.248.113.144:3030/' + this.state.image})`}}>
                
                
                
                        </div>
                        <div class="s margin-top-sm">
                
                            <div class="input-variant-x">
                                <Pay sessionId={this.state.program.id} class="w-100 bg-white"></Pay> 
                            </div>
                            <div class="   margin-md">
                
                                <div class="flex-verticadl w-40s">
                                    <div class="font-lg  w-100 Roboto center">{this.state.program.programId}:{this.state.program.name} 
                                    </div> 
                                    <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div>
                
                                    <span class="font-xsm ">{this.state.program.description}</span>
                                </div>
                                <div class="w-100 content-body-md ">{this.state.sessions.map(session => <div class="w-100 "><div clas="float-right">
                
                                        </div><div class="flex-verticald Mulish input-variant-x">SESSION {session.sessionId} <span class="material-symbols-outlined  text-bold  float-right   pointer">
                                                edit 
                                            </span></div>
                                        <div class="flex-vertical  text-bold text-gray">
                                            {session.courses.map(course => <span class=" margin-md font-sm  width-auto text-black pointer float-lefdt border-rad-med padding-sm margin-md center "> <div class="square"></div>{course.name}</span>)}</div> <div class="float-right">
                                        </div></div>)}
                                </div>
                
                
                
                            </div>
                        </div>
                        <div class="bg-silver">
                
                
                            <div class="">
                
                
                
                                
                                    <div class="w-100 flex-vertical f word-bosx font-bold">
                                        <div class="word-box font-sm font-bold flex-horizontal">
                                            <div class=" Mulish"> <span class="btn-variant-2 text-white text-bold">Starts on</span> {new Date().toString()}</div>  
                                            <div class=" float-right text-white"><span class="btn-variant-6 text-white text-bold">Ends on</span> {new Date().toString()}</div>
                
                                        </div>
                
                                </div>                                 
                            </div>
                        </div>
                
                        <div class="studentfooter font-sm center"><a href="https://www.tawitechnologies.com" target="blank">@Tawi Technologies</a> || 0707588686 || 0208152149</div>
                
                    </div>
                    <Footer/>
                </div>}</div>
                );
    }
}
;

export default RegisterProgram;


