import React from 'react';
import { useLocation } from 'react-router-dom'
import { Route, Redirect } from 'react-router-dom';
const RouteGuard = ({ component: Component, ...rest }) => {
        function hasJWT() {
                let flag = false;
                localStorage.getItem('studenttoken') ? flag = true : flag = false;
                return flag;
        }

        return (
                <Route {...rest}
                        render={props => (
                               
                                hasJWT() ?
                                        <Component {...props} />
                                        :
                                        <Redirect to={{ pathname: '/login' }} />
                        )}
                />
        );
};
export default RouteGuard;


