import {    
    Routes,
    Route,
} from "react-router-dom";
import HeroeScreen from '../components/heroes/HeroeScreen.js-disabled'
import NavBar from '../components/ui/NavBar'
import MarvelScreen from '../components/marvel/MarvelScreen.js'
import DcScreen from '../components/dc/DcScreen'
import SearchScreen from '../components/search/SearchScreen';


const DashboardRoutes = () => {
    return (

        <>
            <NavBar />            
                <Routes >
                    <Route path="/marvel" element={<MarvelScreen/>}/>
                    <Route path="/hero/:heroeId" element={<HeroeScreen/>}/>
                    <Route path="/dc" element={<DcScreen/>}/>
                    <Route path="/search" element={<SearchScreen/>}/>
                    <Route path="/" element={<MarvelScreen/>}/>
                </Routes>
        </>
    )
}

export default DashboardRoutes
