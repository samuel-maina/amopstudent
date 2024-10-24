import React from "react";
import { Link,NavLink } from 'react-router-dom';
import Footer from './Footer';
import ContactUs from './Contact_us';
import Nav from './Nav';
class ReturnPolicy extends React.Component {
    render() {
        return(
                <div class='content-body'>
                <Nav/>
                 <div class="margin-top-md ">
        
                <div class="program-header font-300"><div class="font-xl  margin-top-md Robosto text-bold session text-gray">RETURN POLICY</div></div>
                </div>
                <div class="session margin-top-xsm">
                        <div class="font-lg Roboto">RETURN POLICY</div>
                        <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div>
                        <p>Once you have subscribed to one of our course sessions (which lasts 6 months each), we authorize you to initiate the refund procedure within a maximum of fourteen (14) days after your registration to the course session.</p>
                <div class="font-lg Roboto">RETURN PROCESS</div>
                        <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div> 
                        <p>To unsubscribe to a course session, contact us with the following email address <Link to="mailto:customerservice@amazingdevops.com">customerservice@amazingdevops.com</Link></p>
                 <div class="font-lg Roboto">QUESTIONS</div>
                        <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div> 
                        <p>If you have any questions concerning our return policy, please contact us at:  <a href="mailto:customerservice@amazingdevops.com">customerservice@amazingdevops.com</a></p>
                
                </div>
                <ContactUs/>
                <Footer/>
                </div>        
        )}} export default ReturnPolicy;





