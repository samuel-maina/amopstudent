


import {render} from "react-dom";
import React from "react";
import {Redirect} from 'react-router-dom'
import StudentNav from './Nav';
import axios from 'axios';
import Pay from './Pay';
import { RotatingSquare } from 'react-loader-spinner'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class RegisterCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {older: [], today: [], yesterday: [], total: 0, loading: false};
    }
    async componentDidMount() {
        this.setState({loading: true});
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

        await axios.get("sessions/total")
                .then((response) => {
                    this.setState({total: response.data})
                    this.setState({loading: false});
                }).catch((err) => {
this.setState({loading: false});


        });

    }

    render() {
        const isLoggedIn = false;
        return(
                <div class="margin-top-md">
                    {this.state.loading ? <div class="centerpage App">
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
                                        <div class="program-header session">
                                
                                        </div>
                                        <div class="notification  session">
                                            <span class="Mulish font-lg">Notifications</span>
                                            <hr/>
                                            {this.state.today.length === 0 ? <></> :
                                                            <div>
                                                                <p class="play text-gray">Today</p>
                                                                {this.state.today.map(today_ =>
                                                                                            <div class="bg-white grid-container margin-top-xsm">
                                                                                                <div class="profile-sm-2 item2"></div>
                                                                                                <div class="flex-horizontal item1">
                                                                                                    <div class="">
                                                                                                        <span class="Mulish text-bold">{today_.receiptedProgram} <span class="text-gray">1hr ago</span></span>
                                                                                                        <p class="font-sm Roboto">You have successfully registered for {today_.receiptedProgram} program</p></div>
                                                                            
                                                                                                </div>
                                                                            
                                                                                            </div>
                                                                                        )}</div>}
                                            {this.state.yesterday.length === 0 ? <></> :
                                                            <div>
                                                                <p class="play text-gray">Yesterday</p>
                                                                {this.state.yesterday.map(old =>
                                                                                            <div class="bg-white grid-container margin-top-xsm">
                                                                                                <div class="profile-sm-2 item2"></div>
                                                                                                <div class="flex-vertical item1">
                                                                            
                                                                                                    <p class="Mulish text-bold w-100">{old.receiptedProgram} <span class="text-gray">1 day ago</span></p>
                                                                                                    <p class="font-sm Roboto">You have successfully registered for {old.receiptedProgram} program</p>
                                                                                                </div>
                                                                            
                                                                            
                                                                            
                                                                                            </div>)}</div>}
                                            {this.state.older.length === 0 ? <></> :
                                                            <div>
                                                                <p class="play text-gray">Older</p>
                                                                {this.state.older.map(old =>
                                                                                            <div class="bg-white grid-container margin-top-xsm">
                                                                                                <div class="profile-sm-2 item2"></div>
                                                                                                <div class="flex-vertical item1">
                                                                            
                                                                                                    <p class="Mulish text-bold w-100">{old.receiptedProgram} <span class="text-gray">{old.age} days ago</span></p>
                                                                                                    <p class="font-sm Roboto">You have successfully registered for {old.receiptedProgram} program</p>
                                                                                                </div>
                                                                            
                                                                            
                                                                            
                                                                                            </div>)}</div>}
                                
                                        </div>
                                    </div>}</div>
                );
    }
}
;

export default RegisterCourse;
