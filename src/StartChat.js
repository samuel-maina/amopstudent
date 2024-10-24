import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const  StartChat=(r)=> {
    const recepient = r.r;
const[about,setAbout] = useState("");
const[body,setBody] = useState("");
  const  onAboutChange=(event)=> {
        setAbout( event.target.value);
    }
   const onBodyChange=(event)=> {
        setBody(event.target.value);
    }
  const  startChat=(event)=> {
        var chat = {about: about, message: [{message: body, receiver: {email:recepient}}]};
        axios.post("messaging/", chat)
                .then((response) => {
                    //this.setState({chat: response.data});
                    
                }).catch((err) => {

        });
        event.preventDefault();
    }
    
    const showChat=()=>{
     document.getElementById("startChat").style.display="block";   
    }

    
        return(
                
                 
                        <div class=" bg-white centerpage-1  padding-md" id="startChart">
                            
                
                                To: <span class="text-green font-sm">{recepient}</span>
                                <form class="flex-vertical w-100 bg-white font-sm" onSubmit={startChat}>
                                    <p>About</p>
                                    <input type="text" class="input-variant-x " value={about} onChange={onAboutChange}/>
                                    <p>Message</p>
                                    <textarea class="input-variant-x " value={body} onChange={onBodyChange}></textarea>
                                    <div>                        
         <button class="background-none btn-variant border-none">   <span class="material-symbols-outlined text-white border-rad-md  pointer bg-variant-3 margin-md padding-md" >
                                            send
                                            </span></button></div>
                                </form>
                            
                </div>
                );
    
}
export default StartChat;



