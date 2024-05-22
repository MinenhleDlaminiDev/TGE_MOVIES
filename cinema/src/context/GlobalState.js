import {createContext, useReducer, useEffect} from "react";
import  AppReducer from "./AppReducer";
// Context api works like redux

//initial State
const initialState = {
    favourite: localStorage.getItem("favourite") ? JSON.parse(localStorage.getItem("favourite")) : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("favourite", JSON.stringify(state.favourite))
    }, [state])

    // Actions
    // Add Movie to Favourites
    const addMovieToFavourite = movie => {
        dispatch({type: "ADD_MOVIE_TO_FAVOURITE", payload: movie})
    }

    // Remove Movie from Favourites
    const removeMovieFromFavourites = (id) =>{
        dispatch({type: "REMOVE_MOVIE_FROM_FAVOURITE", payload: id})
    }
    return (
        <GlobalContext.Provider 
            value={{
                favourite: state.favourite, 
                addMovieToFavourite,
                removeMovieFromFavourites,
            }}
        >
            {props.children}
        </GlobalContext.Provider>

    )
}