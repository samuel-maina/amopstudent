
import './App.css';
import Home from './StudentHome';
import StudentLogin from './StudentLogin';
import SetAuthToken from './SetAuthToken';
import RouteGuard from './RouteGuard';
import Logout from './Logout';
import StudentHome from './StudentHome';
import Notifications from './Notifications';
import RegisterProgram from './RegisterProgram';
import Programs from './Programs';
import Terms from './Terms';
import Expenses from './Expenditure';
import Login from './Login';
import PrivacyPolicy from './PrivacyPolicy';
import ReturnPolicy from './ReturnPolicy';
import MyClasses from './MyClasses';
import Pay from './Pay';
import Requestinfo from './Request-info';
import Receipting from './Receipting';
import Class from './Class';
import Inbox from './Inbox';
import PasswordRecovery from './PasswordRecovery';
import UpdateInfo from './UpdateInfo'
import { useLocation } from 'react-router-dom'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
function App() {
    //check jwt token
    const token = localStorage.getItem("studenttoken");
    if (token) {
        SetAuthToken(token);

    }
    return (
            <div className="">
                <Router>
                    <Switch>
                    <RouteGuard exact path="/" component={Home}/>
                    
                                        <RouteGuard exact path="/request-info" component={Requestinfo}/>
                    <RouteGuard exact path="/home" component={StudentHome}/>
                    <RouteGuard exact path="/programs" component={Programs}/>
                    <RouteGuard exact path="/programs/:id" component={RegisterProgram}/>
                    <RouteGuard exact path="/classes/:id" component={Class}/>
                    <RouteGuard exact path="/notifications" component={Notifications}/>   
                    <RouteGuard exact path ="/pay" component={Pay}/>
                    <RouteGuard exact path ="/expenses" component={Expenses}/>
                    <RouteGuard exact path ="/classes" component={MyClasses}/>
                    <RouteGuard exact path ="/class" component={Class}/>
                    <RouteGuard exact path ="/messaging" component={Inbox}/>
                    <RouteGuard exact path ="/receipting" component={Receipting}/>
                    <RouteGuard exact path ="/update-info" component={UpdateInfo}/>
                    <Route exact path ="/terms-of-use" component={Terms}/>
                    <Route exact path ="/return-policy" component={ReturnPolicy}/>
                    <Route exact path ="/privacy-policy-2" component={PrivacyPolicy}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/recover-password" component={PasswordRecovery}/>
                    <Route exact path="/logout" component={Logout}/>
                    </Switch>
                </Router>
            </div>
            );
}

export default App;
