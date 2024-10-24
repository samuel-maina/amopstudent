import React from "react";
import { Link,NavLink } from 'react-router-dom';
class Footer extends React.Component {
    render() {
        return(
                <div class="footer padding-lg ">
                <div class="flex-horizontal hidden flex-center">
                <div class="padding-md w-S20">
                <div class="flex-vertical text-bold fontsm ">
                <Link to="/request-info" class="padding-bm-sm">
                <div className='nav-itsem btn-variant-3' >
REQUEST INFO


                </div>
            </Link>
                        <Link to="/apply" class="padding-bm-sm">
                <div className='nav-itdem btn-variant-5 ' >
APPLY NOW
                </div>
            </Link>
                </div>
                </div>
                <div class="flex-vertical padding-md w-S20">
                <div class="text-bold fontsm" >QUICK LINKS</div>
                                        <Link to="/home">
                <div className=' fontsm margin-top-xsm text-gray' >
Home
                </div>
            </Link>
                                    <Link to="/programs">
                <div className=' fontsm margin-top-xsm text-gray' >
Programs & Courses
                </div>
            </Link>
                                    <Link to="/contact-us">
                <div className=' fontsm margin-top-xsm text-gray' >
Contact Us
                </div>
            </Link>
                                    <Link to="/admissions">
                <div className='fontsm margin-top-xsm text-gray' >
Admissions
                </div>
            </Link>
                                    <Link to="/about-us">
                <div className='fontsm margin-top-xsm text-gray' >
About AmazingDevOps
                </div>
            </Link>

                </div>
                <div class="flex-vertical padding-md w-S20">
                <div class="text-bold fontsm" >STUDENT RESOURCES</div>
                <Link to="/blog">
                <div className=' fontsm margin-top-xsm text-gray' >
AmazingDevOps Blog
                </div>
            </Link>
            <Link to="">
                <div className=' fontsm margin-top-xsm text-gray' >
Student Account
                </div>
            </Link>
                </div>
                <div class="flex-vertical padding-md w-S20">
                <div class="text-bold fontsm" >TRAINING KENYA</div>
                </div>
                <div class="flex-vertical padding-md w-S20">
                <div class="text-bold fontsm" >TRAINING USA</div>
                </div>
                <div class="flex-vertical padding-md w-S20">
                <div class="text-bold fontsm" >CONTACT US</div>
                <Link to="\tel:0208152149">
                <span className=' fontsm text-bold margin-top-sm bottom-border-sm' >
0208152149
                </span>
            </Link>
            <Link to="help">
                <span className=' fontsm text-bold margin-top-sm bottom-border-sm' >
Help Center
                </span>
            </Link>
            <Link to="contacts">
                <span className=' fontsm text-bold margin-top-sm bottom-border-sm' >
More contact Options
                </span>
            </Link>
            <div class="text-bold font-xsm margin-top-md text-gray" >OUR lOCATION</div>
            <div class="font-sm text-gray margin-top-sm">3616 Kirkwood Hwy, </div>
            <div class="font-sm text-gray">Wilmington, DE 19808,</div>
            <div class="font-sm text-gray"> United States</div>
            <Link to="mailto:itsupport@amazingdevops.com">
                <span className=' fontsm text-bold margin-top-sm bottom-border-sm' >
itsupport@amazingdevops.com
                </span>
            </Link>
                </div>
                </div>
                <div class="flex-horizontal flex-center">
                <Link to="/privacy-policy-2">
                <span className=' fontsm text-bold margin-sm margin-top-sm bottom-border-sm' >
Privacy policy
                </span>
            </Link>
            <Link to="/return-policy">
                <span className=' fontsm text-bold margin-top-sm margin-sm bottom-border-sm' >
Return policy
                </span>
            </Link>
            <Link to="/terms-of-use">
                <span className=' fontsm text-bold margin-sm margin-top-sm bottom-border-sm' >
Terms of use
                </span>
            </Link>
            <Link to="/about-us">
                <span className=' fontsm text-bold margin-top-sm margin-sm bottom-border-sm' >
About Us
                </span>
            </Link>
            
                </div>
                <div class="flex-horizdontal float-right padding-sm">
                <div class="fontsm">Copyright &copy;2023 AmazingDevops.com</div>
                </div>
                
                </div>
                
                );
    }
}
export default Footer;




