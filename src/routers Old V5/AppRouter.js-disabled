import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext.js';
// import NavBar from '../components/ui/NavBar.js';
import LoginScreen from '../components/login/LoginScreen.js';
import DashboardRoutes from './DashboardRoutes.js';
import { PrivateRoute } from './PrivateRoute.js';
import { PublicRoute } from './PublicRoute.js';
// import MarvelScreen from '../components/marvel/MarvelScreen.js'


const AppRouter = () => {

    const {user}= useContext(AuthContext);
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={user.logged} exact path="/login" component={LoginScreen}/>
                    <PrivateRoute isAuthenticated={user.logged} path="/" component={DashboardRoutes}/>
                </Switch>
            </div>
            </Router>
    )
}

export default AppRouter
