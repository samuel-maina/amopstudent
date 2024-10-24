import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import Footer from './Footer';
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notifications: [], error: "", image: ""};

    }
    async componentDidMount() {

        const response = await axios.get("notifications/")
                .then((response) => {

                    this.setState({notifications: response.data});
                }).catch((err) => {



        });


        await axios.get("http://localhost:8080/api/v1/users/profile")
                .then((response) => {

                    this.setState({image: response.data});
                }).catch((err) => {



        });

    }
    showNotifications() {
        if (document.getElementById("notifications").style.display === "block")
        {
            document.getElementById("notifications").style.display = "none";
        } else
            document.getElementById("notifications").style.display = "block";
    }
    render() {

        return (
                <div className="top-nav bg-crimson p font-sdm text-bold text-gray flex-verticdal fledx-center">
                    <Link to="/">
                    <img src="/images/amops.png" width="130px" class="paddingsm float-left"/>
                    </Link>
                    <div class=" ">
                        <div class="float-right center">
                            <NavLink to="/home" activeClassName="selected-2" className='nav-item font-md font-sm' >
                                <div>
                                    <div className='' title="Data&Reports">
                
                
                                    </div>
                                    HOME
                                </div>
                            </NavLink>
                
                            <NavLink to="/classes" activeClassName="selected-2" className='nav-item font-xsm' >
                                <div>
                                    <div className='' >
                
                
                                    </div>
                                    CLASSES
                                </div>
                            </NavLink>
                
                
                
                
                
                            <NavLink to="/programs" activeClassName="selected-2" className='nav-item font-xsm' >
                                <div>
                                    <div className='' title="Data&Reports">
                
                
                                    </div>
                                    APPLY
                                </div>
                            </NavLink>
                           
                
                            
                            <div class="nav-item float-right pointer">
                
                                <div onClick={this.showNotifications} class="flex-horizontal" >
                                    <div class="profile-sm relative " style={{backgroundImage: `url(${'http://localhost:3030/' + this.state.image })`}}>
                                        <div className='text-gray absolute border-rad-md profile ' id="notifications">
                                            <Link to="/update-info" class="play font-sm margin-md pointer text-gray center bg-white padding-sm"> <span class="material-symbols-outlined">
                                                manage_accounts
                                            </span>Update info</Link>
                                            <div class="play font-sm margin-md pointer"></div>
                                            <NavLink to="/logout" activeClassName="selected-2" className='play margin-md font-sm center text-gray bg-white padding-sm' > <span class="material-symbols-outlined">
                                                    exit_to_app
                                                </span>Sign out</NavLink>
                                        </div>
                
                
                                    </div>
                                    <span class="font-xsm center">Samuel Maina<span class="material-symbols-outlined">
                                            arrow_drop_down
                                        </span></span> </div>
                            </div>
                        </div>
                
                    </div>
                
                    <div id="chatBar" class="chat">
                        <div class="btn-variant-3 pointer  chat center font-sm Ubuntu text-bold text-wheat">Chat with us today <span class="material-symbols-outlined">phone chat mail</span></div></div>
                
                </div>
                );
    }
}
export default Nav;