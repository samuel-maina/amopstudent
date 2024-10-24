import Nav from './Nav';
import React from 'react';
import ImageUpload from './ImageUpload';
import axios from 'axios';
import swal from 'sweetalert';
class UpdateInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', firstname: '', lastname: '', address: '', phone: '', error: '', next: false, previous: true, password: '', passwordConfirm: '', passwordmatch: '', confirm: false, activationCode: ''};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
        await axios.get("http://localhost:8080/api/v1/users/single")
                .then((response) => {
                    this.setState({firstname: response.data.firstname});
                    this.setState({lastname: response.data.lastname});
                    this.setState({phone: response.data.phone});
                    this.setState({address: response.data.address});
                }).catch((err) => {
        });
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handleFirstnameChange(event) {
        this.setState({firstname: event.target.value});
    }
    handleLastnameChange(event) {
        this.setState({lastname: event.target.value});
    }
    handleAddressChange(event) {
        this.setState({address: event.target.value});
    }
    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }
    handleSubmit(event) {
        var user = {firstname: this.state.firstname, lastname: this.state.lastname, address: this.state.address, phone: this.state.phone, password: this.state.password};
        axios.put("http://localhost:8080/api/v1/users/single", user)
                .then((response) => {
                    swal("", "", "success");
                }).catch((err) => {
        });
        event.preventDefault();
    }
    render() {
        return(
                <div class="">
                    <Nav/>
                    <div class="">
                        <div class="margin-top-md">
                            <div class="forsm session padding-md flex-veritical">
                                <p class="Roboto font-lg">Update your personal information</p>
                                <div class="input-variant-x h-50 relative content-body-md">                        
                                    <div class="profile-md hidden bg-gray" style={{backdgroundImage: `url(${'http://104.248.113.144:3030/' })`}}></div>
                                    <div class="relative"><ImageUpload/></div>
                                </div>      <form onSubmit={this.handleSubmit} className=" " id="user_reg">
                                    <div class=" content-body-md" >
                                        <div class="w-100">
                                            <span class="font-bold text-gray">First name*</span>
                                            <input type="text"  value={this.state.firstname} class="input-variant-x w-80 margin-sm-fixed" required onChange={this.handleFirstnameChange} placeholder="First name" />
                                        </div>
                                        <div class="w-100">
                                            <span class="font-bold text-gray">Second name*</span>                            
                                            <input type="text"  value={this.state.lastname} class=" input-variant-x w-80 form-insput  margin-sm-fixed" required onChange={this.handleLastnameChange} placeholder="Last name" />
                                        </div>
                
                                        <div class="w-100">
                                            <span class="font-bold text-gray">Phone*</span>                        
                                            <input type="text" id="phone" value={this.state.phone} class="w-80 input-variant-x form-insput  margin-sm-fixed" required onChange={this.handlePhoneChange} placeholder="Phone" />
                                        </div>
                                        <div class="w-100">
                                            <span class="font-bold text-gray">Address*</span>                        
                                            <input type="text" id="address" value={this.state.address} class="w-80 input-variant-x form-insput  margin-sm-fixed" required onChange={this.handleAddressChange} placeholder="Address" />
                                        </div>                   
                                    </div>  
                                    <div class="">
                                        <input type="submit" value="Next" className="btn-variant-7 margin-md padding-md text-white font-sm" />
                                    </div>  
                
                                </form>
                            </div> 
                        </div> 
                    </div>
                </div>);
    }
}
;
export default UpdateInfo;

