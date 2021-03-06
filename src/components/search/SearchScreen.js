import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router';
import {useNavigate} from 'react-router-dom';
import useForm from '../../hooks/useForm/useForm';
import HeroCard from '../heroes/HeroCard';
import getHeroesByName from '../../selectors/getHeroesByName';

const SearchScreen = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const {q = ''} = queryString.parse(location.search);

    const [ {searchText}, handleInputChange] = useForm({
        searchText: q
    });
    
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }
     
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input 
                        type="text"
                        name="searchText"
                        placeholder="Find your hero"
                        autoComplete="off"
                        className="form-control"
                        value={searchText}
                        onChange={handleInputChange}
                        />
                        <button 
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary"
                        >
                        Search..
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results</h4>
                    
                    {(q === '')
                    &&
                    <div className="alert alert-info">
                        Search a Hero
                    </div>
                    }
                    {(q !== '' && heroesFiltered.length === 0)
                    &&
                    <div className="alert alert-danger">
                        There is no a hero with {q}
                    </div>
                    }
                    {
                        heroesFiltered.map(hero => 
                        <HeroCard 
                        key={hero.id}
                        {...hero}
                        />)

                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
