import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const CHANGE_LOADING = "CHANGE_LOADING";
export const GET_ONE_POKEMON = "GET_ONE_POKEMON";

export const getPokemons = () => async (dispatch)=> {
    dispatch(changeLoading());
    try {
        const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon")
        .then( pokemons => pokemons.data.results);
        dispatch({ payload: pokemons, type: GET_POKEMONS })
    } catch(error) {
        console.log(error.message);
    }
    dispatch(changeLoading());
};

export const changeLoading = () => {
    return { type: CHANGE_LOADING }
};

export const getOnePokemon = (name) => async (dispatch) =>  {
    dispatch(changeLoading());
    try {
        const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name) 
        .then(pokemon => pokemon.data)
        .then(pokemon => { 
            return { 
                name: pokemon.name,
                perfil_img: pokemon.sprites.other.dream_world.front_default,
                base_experience: pokemon.base_experience,
                weight: pokemon.weight,
                height: pokemon.height,
                stats: pokemon.stats,
                type: pokemon.types[0].type
            };
        });
        dispatch({ type: GET_ONE_POKEMON, payload: pokemon });
    } catch(error) {
        console.log(error.message)
    }
    dispatch(changeLoading());
};