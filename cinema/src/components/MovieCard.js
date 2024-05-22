import {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import Placeholder from "../assets/No-Image-Placeholder.png"

const MovieCard = ({movie}) => {
    const {removeMovieFromFavourites} = useContext(GlobalContext);
    return ( 
        <>
           <div className="w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
                <div className="poster-wrapper flex justify-center">
                    {movie.poster_path ? (
                        <img src={`http://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={`${movie.title} Poster`} className=" rounded-md text-center"/>
                    ) : (
                        <div className="filler-poster"><img src={Placeholder} className="w-auto" alt="" /></div>
                        )}
                </div>

                <div className="p-5 relative">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>

                    <button onClick={() => removeMovieFromFavourites(movie.id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  bg-red-700  rounded-lg hover:bg-red-800 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"> Remove from Favourites
                    </button>
                </div>
            </div>

        </> 
    );
}
 
export default MovieCard;

