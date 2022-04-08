import React, { useMemo } from 'react'
import { Navigate, useParams } from 'react-router';
import { heroImages } from '../../helpers/heroImages';
import getHeroeById from '../../selectors/getHeroeById';


const HeroeScreen = ({history}) => {


    const {heroeId} = useParams(); // Hook de react router, que nos permite acceder al parámetro de la url. Ej: /spider-marvel -> const heroId = 'spider-marvel'

    const hero = useMemo(() => getHeroeById(heroeId), [heroeId]);

    if(!hero) {
        return <Navigate to="/" />;
    }

    const handleReturn = () => {
        if(history.length <= 2) {
            history.push('/')
        }else{
        history.goBack();
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                // src={`../assets/heroes/${heroeId}.jpg`} 
                src={heroImages(`./${heroeId}.jpg`).default}
                className="img-thumbnail animate__animated animate__fadeInLeft" alt={superhero}/>
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> {superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b> {first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                className="btn btn-outline-info"
                onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}

export default HeroeScreen


