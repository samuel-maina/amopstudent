import { Link, NavLink } from 'react-router-dom';
import React from "react";
import axios from 'axios';
class ResNav extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {

        return (
                <div className="top-nav-res w-100 fontsm ">
                    
                    <div class="">
                        <div class="">
                          <Link to="/">
                        <img src="/images/amops.png" width="130px" class="float-left"/>
                        </Link>
                        <div class="float-right center">
                            <Link to="/login" >
                            <div className='nav-item' >
                                LOGIN
                
                
                            </div>
                            </Link>
                           
                            
                            
                             <span class="material-symbols-rounded nav-item pointer">
menu
</span>
                            </div>
                        </div>
                       
                    </div>
                
                </div>
                );
    }
}
;
export default ResNav;