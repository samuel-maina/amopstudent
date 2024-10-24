import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class Inbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chat: {}, chats: [], message: "", id: "", chat_type: "", users: [], recepient: "", about: "", body: "", condShow: "",toFro:""};
        this.onMessageChange = this.onMessageChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.inbox = this.inbox.bind(this);
        this.setRecepient = this.setRecepient.bind(this);
        this.outbox = this.outbox.bind(this);
        this.onAboutChange = this.onAboutChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.startChat = this.startChat.bind(this);
        this.newChat = this.newChat.bind(this);
    }
    newChat() {
        this.setState({condShow: "show"})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value});
    }
    setRecepient(id) {
        this.setState({recepient: id});

    }
    async componentDidMount() {
        await axios.get("messaging/inbox")
                .then((response) => {
                    this.setState({chats: response.data});
            this.setState({toFro: "From"})
                    this.setState({chat_type: "Inbox"});
                }).catch((err) => {

        });
        await axios.get("users/")
                .then((response) => {
                    this.setState({users: response.data});
                    this.setState({chat_type: "Inbox"});
                }).catch((err) => {

        });
    }
    inbox() {
        this.setState({condShow: ""})
        axios.get( "messaging/inbox")
                .then((response) => {
                    this.setState({chats: response.data});
                    this.setState({toFro: "From"})
                    this.setState({chat_type: "Inbox"});
                }).catch((err) => {

        });
    }
    outbox() {
        this.setState({condShow: ""})
        axios.get("messaging/outbox")
                .then((response) => {
                    this.setState({chats: response.data});
                    this.setState({chat_type: "Outbox"});
                    this.setState({toFro: "To"})
                }).catch((err) => {

        });
    }
    async  getChat(id) {
        await   this.setState({id: id});
        await axios.get("messaging/" + this.state.id)
                .then((response) => {
                    this.setState({chat: response.data});
                    this.setState({recepient: ""});

                }).catch((err) => {

        });
    }

    sendMessage(id) {
        var message = {message: this.state.message}
        axios.post("messaging/" + this.state.id, message)
                .then((response) => {
                    //this.setState({chat: response.data});
                    this.getChat(this.state.id);
                }).catch((err) => {

        });
    }
    onAboutChange(event) {
        this.setState({about: event.target.value});
    }
    onBodyChange(event) {
        this.setState({body: event.target.value});
    }
    startChat(event) {
        var chat = {about: this.state.about, message: [{message: this.state.body, receiver: {email: this.state.recepient}}]};
        axios.post("messaging/", chat)
                .then((response) => {
                    //this.setState({chat: response.data});
                    this.getChat(this.state.id);
                }).catch((err) => {

        });
        event.preventDefault();
    }

    render() {
        return(
                <div class=" margin-top-mdj">
                    <div class="flex-horizontal p bordedr-bottom-gray position-fixed  bg-light-blues Mulish">
                        <div class="inbox  pointer btn-variant-3 margin-sm text-white font-xsm center" onClick={this.newChat}> <span class="material-symbols-outlined">
                                business_messages
                            </span>New message</div>
                        <div class="inbox pointer  btn-variant-3 margin-sm font-xsm center" onClick={this.inbox}> <span class="material-symbols-outlined">
                                forward_to_inbox
                            </span>Inbox</div>
                        <div class=" text-white  inbox pointer btn-variant-3 margin-sm font-xsm center " onClick={this.outbox}> <span class="material-symbols-outlined">
                                maps_ugc
                            </span>Sent</div>                
                    </div>
                    <div class="grid-container-d2 margin-top-sdm">
                        <div class="aside margin-mdd flex-horizontal">
                
                            {!this.state.condShow ?
                                    <div class="">
                                        <div class="font-md play padding-md text-gray text-bold">{this.state.chat_type}</div>
                                        <p class="font-xsm text-green">{this.state.chats.length} conversations 90 unread messages</p>
                                        {this.state.chats.map(chat => <div class="font-sm play text-bold padding-msd  flex-f s padding-lg pointer" onClick={(e) => this.getChat(chat.id)}><div class="profile-sm"></div><span class="text-bold text-gray  play">Samuel Maina</span> <span class="float-right font-xsm">4:54PM</span>{chat.about}</div>
                                                                )}
                        
                                    </div> :
                                    <div class="font-xsm w-100 pointer flex-vertical">Members
                                        {this.state.users.map(user => <div class=" margind-md flex-horizontal border-bottom-gray padding-sm center" onClick={(e) => this.setRecepient(user.email)}><div class=" bg-crimson profile-sm"></div><div class="flex-vertical">@{user.firstname}{user.lastname}
                                                {user.userRoles.map(role => <span class=" font-sm padding-sm play border-rad-sm">{role.userRole}</span>)}
                                            </div></div>)}                    
                                    </div>}
                        </div>
                        <div class="main-content padding-md">
                            {this.state.recepient ? <div>
                
                                To: <span class="text-green font-sm">{this.state.recepient}</span>
                                <form class="flex-vertical font-sm" onSubmit={this.startChat}>
                                    <p>About</p>
                                    <input type="text" class="input-variant-x w-70" value={this.state.about} onChange={this.onAboutChange}/>
                                    <p>Message</p>
                                    <textarea class="input-variant-x w-70" value={this.state.body} onChange={this.onBodyChange}></textarea>
                                    <button class=" bg-white "><span class="material-symbols-outlined  text-white border-rad-md  pointer bg-variant-3 margin-md padding-md">
                                            send
                                        </span></button>
                                </form>
                            </div> :
                                    <div>
                                        {this.state.chat.message ?
                                                            <div>
                                                                <span class="play">{this.state.chat.about}</span>
                                                                <div class="play font-sm"> {this.state.toFro} : <span class="text-green">{this.state.chat.from}</span></div>
                                            
                                                                {this.state.chat.message.map(m =>
                                                                                            <div class="w-70">
                                                                                                {(m.messageType) === ("SENDER") ? <div class="w-100  float-left flex-vertdical centser">   <div class="bg-light-grayd  padding-md border-rad-md margin-sm bg-variant-4 font-sm maxwidth-70 overflow-none flex-vertical text-white float-right"><div>{m.message}</div> <div class="profile-sm"></div><div class=" w-100 font-xsm float-right">{m.date}</div></div></div> :
                                                                                                                                        <div class="w-100  float-right flex-verdtical centers">   <div class="bg-light-grayd  padding-md border-rad-md margin-sm bg-variant-3 font-sm ,maxwidth-70 overflow-none flex-vertical text-white float-left"><div>{m.message}</div> <div class="profile-sm"></div><div class=" w-100 font-xsm float-right">{m.date}</div></div></div>    }
                                                                        
                                                                                            </div>)}
                                                                <div class="main-contentd margin-md  "><textarea class=" border-none border-rad-md margin-sm play w-70" value={this.state.message} onChange={this.onMessageChange}/>
                                                                    <div class="  " onClick={(e) => this.sendMessage("d")}><span class="material-symbols-outlined  text-white border-rad-md  pointer bg-variant-3 margin-md padding-md">
                                                                            send
                                                                        </span></div>            
                                                                </div>
                                                            </div> : <div class="centerpage-1"><img src="/images/messaging.jpg" width="500px"/></div>}</div>}
                
                        </div>
                
                    </div>
                
                
                </div>
                );
    }
}
export default Inbox;


