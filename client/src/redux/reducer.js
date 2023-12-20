import { 
    CHANGE_LOADING, 
    GET_POKEMONS,
    GET_ONE_POKEMON } from "./actions";
const initialState = {
    pokemons: [],
    isLoading: false,
    pokemon: {},
} 

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMONS: 
            return {
                ...state,
                pokemons: action.payload,
            }
        case CHANGE_LOADING: 
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        case GET_ONE_POKEMON: 
            return {
                ...state,
                pokemon: action.payload,
            }
        default: return { ...state }
    }
};

export default rootReducer;