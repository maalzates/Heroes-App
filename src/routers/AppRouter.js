import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
// import NavBar from '../components/ui/NavBar.js';
import LoginScreen from '../components/login/LoginScreen.js';
import DashboardRoutes from './DashboardRoutes.js';
import { PrivateRoute } from './PrivateRoute.js';
import { PublicRoute } from './PublicRoute.js';
// import MarvelScreen from '../components/marvel/MarvelScreen.js'


const AppRouter = () => {

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/login" element={
                        <PublicRoute>
                            <LoginScreen/>
                        </PublicRoute>
                    }/>
                        <Route path="/*" element={
                            <PrivateRoute>
                                <DashboardRoutes/>
                            </PrivateRoute>
                    }/>
                    {/* <PublicRoute isAuthenticated={user.logged} exact path="/login" component={LoginScreen}/>
                    <PrivateRoute isAuthenticated={user.logged} path="/" component={DashboardRoutes}/> */}
                </Routes>
            </BrowserRouter>
    )
}

export default AppRouter
