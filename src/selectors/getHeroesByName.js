import { heroes } from "../data/heroes"

const getHeroesByName = (name = '') => {
    name = name.toLocaleLowerCase();
    if (name === '') {
        return [];
    } else {
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
    }
}

export default getHeroesByName
