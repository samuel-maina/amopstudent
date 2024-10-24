import React from "react";
import { Link,NavLink } from 'react-router-dom';
import Footer from './Footer';
import ContactUs from './Contact_us';
import Nav from './Nav';
import Sessions from './Sessions';
class AboutUs extends React.Component {
    render() {
        return(
                <div class='content-body'>
                <Nav/>
                <div class="session margin-top-md">
                <div class="font-xl Roboto margin-sm">
                Who are we and what do we do?
                <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div>
                </div>
                <div class=" flex-horizontal margin-top-sm  center">
                
                    <div class="trainer"><img src="/images/trainer.jpg" width="300px"/></div>
                    <div class="margin-sm padding-md w-75">
                <div class="flex-vertical text-left">
                                <div class='font-md  Roboto'>
                                    <span class="material-symbols-rounded text-salmon rotate">
                                        format_quote
                                    </span>
                                    At AmazingDevOps, we offer technical training in <Link to="/devops" class="crimson-text">DevOps</Link>,<Link to="/software-development" class="crimson-text"> software devopment</Link> and <Link to="/it-project-management" class="crimson-text">IT project management </Link>to people of all ages so as to prepare them for a highly marketable career in tech. Our experienced trainers provide a personalized mode of learning for each of our students ensuring that at the end of your course you are confident to apply for some of the most competitive and wll paying jobs in tech.
                                     <span class="material-symbols-rounded text-salmon">
                                        format_quote
                                    </span>
                                </div>
                                <div class="">
                                    <div class="text-bold font-md float-right ubuntu">Josh K, Founder and trainer - AmazingDevOps, USA</div>     
                                </div>
                                
                            </div>
                </div>
                </div>
                <div class="font-md margin-top-sm">Experience is critical in the IT field. AmazingDevOps aims to provide our students with work experience and underlying skills through challenging projects that simulate a DevOps engineer’s day-to-day activities in the office. The projects we provide focus on helping students gain both technical and soft skills necessary to succeed as a DevOps engineer.

We have established an IT environment that allows students to attend daily and weekly meetings: Standup, Swarm, Pair programming, Decision Making, Retrospective, and IT War room, and improve technical, soft, collaboration, communication, negotiation, and leadership skills.

We have a burning desire to simulate the work environment and help our students interact with day-to-day workplace tools such as Slack (Real-Time Communication), Jira Kanban board (Ticketing, Planning), Confluence (documentation), Microsoft Teams (Real-time communication), and Service Desk Plus (Change Management Tool).
</div>
                </div>
                
                <Footer/>
                </div>        
        )}} export default AboutUs;


