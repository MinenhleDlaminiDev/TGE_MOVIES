import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Card = ({movie}) => {
    // Add to favourites
    const {addMovieToFavourite, favourite} = useContext(GlobalContext);

    let storedMovie = favourite.find( (o) => o.id === movie.id);
    
    const favouriteDisabled = storedMovie ? true : false;

    return ( 
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-md:w-4/5 mx-auto my-0 max-md:p-3">
                <img className="max-md:h-56 mx-auto my-0" src={`http://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="" />

                <div className="p-5 flex flex-col justify-center items-center">
                    <h5 className="mb-2 text-2xl max-md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
    
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>

                    <button disabled={favouriteDisabled} onClick={() => addMovieToFavourite(movie)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  bg-red-700  rounded-lg hover:bg-red-800 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 "> Add to Favourites
                    </button>
                </div>
            </div>

        </>
     );
}
 
export default Card;