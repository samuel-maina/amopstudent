
import {render} from "react-dom";
import React, {setState} from "react";
import {Redirect} from 'react-router-dom'
import StudentNav from './Nav';
import axios from 'axios';
import Footer from './Footer';
import Pay from './Pay';
import StartChat from './StartChat';
import { RotatingSquare } from 'react-loader-spinner'
import {Link} from 'react-router-dom';


class RegisterProgram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {program: "", courses: [], session: 0, image: "", sessions: [], recepient: "maina9025@gmail.com", startCon: false, loading: false}

        this.showCon = this.showCon.bind(this);
    }
    async componentDidMount() {
        this.setState({loading: true});
        await axios.get("programs/" + this.props.match.params.id)
                .then((response) => {
                    this.setState({program: response.data});
                    this.setState({session: response.data.sessions.length});
                    this.setState({sessions: response.data.sessions});
                    this.setState({image: response.data.image.bigImage});
                }).catch((err) => {


        });

        await axios.get("courses/program/" + this.props.match.params.id)
                .then((response) => {
                    this.setState({courses: response.data});
                    this.setState({loading: false});
                }).catch((err) => {


        });
    }

    showCon() {
        this.setState({startCon: true});
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
                            /></div> : <div>
                        <StudentNav/>
                        <div class="session margin-top-md">
                            {this.state.startCon ?
                                                    <StartChat r={this.state.recepient}/> : <></>}
                            <div class='program-header text-bold text-white' style={{backgroundImage: `url(${'http://104.248.113.144:3030/' + this.state.image})`}}>
                
                                <div class="Roboto font-vl">{this.state.program.programId}{this.state.program.name}</div>
                
                            </div>
                            <div class="grid-container margin-top-sm">
                                <div class="item2 margi-top-sm">
                                    <div>Quick Links</div>
                                    <Link to="" class="font-sm">Personalized learning</Link>
                                    <div class="w-100"> Instructor</div>
                                    <div class="profile-sm"></div>
                                    <p class="font-sm Mulish center"> <span class="material-symbols-outlined  text-bold  float-right   pointer">
                                            person 
                                        </span>: Samuel Maina</p>
                                    <p class="Mulish font-sm center">  <span class="material-symbols-outlined  text-bold  float-right   pointer">
                                            email
                                        </span>: samuel@samuelmaina.com</p>
                                    <div class="font-sm Mulish centerd flex-horizontal hover-decorate pointer padding-sm" onClick={this.showCon}> 
                                        <span class="material-symbols-outlined  text-bold hover-decorate btn-variant-d5 border-rad-md-2    pointer">
                                            message
                                        </span> : <u class=""> Start a conversation</u></div>
                                </div>
                                <div class="item1 ">
                
                
                                    <p class="font-sm"> {this.state.program.description}</p>
                                    <div class=" font-lg play">What you are going to learn</div>
                                    <div class="content-body-md ">
                                        <iframe width="100%" height="480" src="https://www.youtube.com/embed/YlxEmDPeoTE" title="Realm of the Volga - A River is Born | Full Nature Documentary" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>                
                                </div>
                            </div>
                
                
                            
                        </div>
                        
                    </div>}</div>
                );
    }
}
;

export default RegisterProgram;


