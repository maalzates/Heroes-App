import React from 'react'
import {    
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import HeroeScreen from '../components/heroes/HeroeScreen'
import NavBar from '../components/ui/NavBar'
import MarvelScreen from '../components/marvel/MarvelScreen.js'
import DcScreen from '../components/dc/DcScreen'
import SearchScreen from '../components/search/SearchScreen';


const DashboardRoutes = () => {
    return (

        <>
            <NavBar />
            <div className="container mt-2">
                <Switch>
                    <Route path="/marvel" component={MarvelScreen}/>
                    <Route path="/hero/:heroeId" component={HeroeScreen}/>
                    <Route path="/dc" component={DcScreen}/>
                    <Route path="/search" component={SearchScreen}/>
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes
