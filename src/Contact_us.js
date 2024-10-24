import React from "react";
import { Link,NavLink } from 'react-router-dom';
class Contact_us extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', error: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){event.preventDefault();}
    render() {
        return(
        <form onSubmit={this.handleSubmit}>
                <div class="contact_us">
                <div class=" text-white x padding">
                <div class="font-lg w-100 padding-md">Contact Us</div>
                <div class="font-md padding-md">By reaching us, we can help you select the best course to secure your future in tech. Alternatively you can use the <Link to="help" class="text-salmon">help center</Link> to get more information about our programs.</div>
                <div class =" w-100 text-bold padding-md font-lg">Personal Information</div>
                <div class="flex-horizontal padding-md">
                <div class="flex-vertical">
                <span class="font-md padding-bm-sm">First Name* </span>
                <input type="text" class="input-variant-w-0"/>
                </div>
                <div class="flex-vertical">
                <span class="font-md padding-bm-sm">Last Name* </span>
                <input type="text" class="input-variant-w-0"/>
                </div>
                </div>
                <div class =" w-100 text-bold font-lg padding-md">Contact Information</div>
                <div class="flex-horizontal padding-md">
                <div class="flex-vertical">
                <span class="font-md padding-bm-sm">E-mail address* </span>
                <input type="text" class="input-variant-w-0"/>
                </div>
                <div class="flex-vertical">
                <span class="font-md padding-bm-sm">Phone* </span>
                <input type="text" class="input-variant-w-0"/>
                </div>
                <div class="flex-vertical">
                <span class="font-md padding-bm-sm">Nationality* </span>
                <input type="text" class="input-variant-w-0"/>
                </div>
                <div class="flex-vertical">
                <span class="font-md padding-bm-sm">State* </span>
                <input type="text" class="input-variant-w-0"/>
                </div>
                </div>
                <div class =" w-100 text-bold font-lg padding-md">Additional Information</div>
                <div class="flex-horizontal padding-md">
                <div class="flex-vertical">
                <span class="font-md padding-bm-sm">Program / course of interest* </span>
                <input type="text" class="input-variant-w-0"/>
                </div>
                </div>
                <div class="flex-horizontal padding-md">
                <div class="font-xsm w-80">By submitting this form, you are giving your express written consent without obligation for <span class="text-bold">AmazingDevOps</span> to contact you regarding our educational programs and services using e-mail, phone, or text, including automated technology for calls and/or texts to the mobile number(s) provided. For more details, including how to opt out, read our privacy policy or contact an admissions advisor.</div>
                <div class=""><input type="submit" class="btn-variant-3 text-bold" value="Submit Information"/></div>
                </div>
                </div>
                </div>
                </form>
                );
    }
}
export default Contact_us;

