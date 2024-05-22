import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Placeholder from "../assets/No-Image-Placeholder.png"

const ResultsCard = ({movie}) => {
    //Adding movie to Global Context
    const { addMovieToFavourite, favourite  } = useContext(GlobalContext);

    let storedMovie = favourite.find( (o) => o.id === movie.id);
    
    const favouriteDisabled = storedMovie ? true : false;
    return ( 
        <div className="results-card bg-slate-500 flex m-1 gap-5 p-3 max-w-9-12">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`http://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={`${movie.title} Poster`} className="max-w-32 max-md:max-w-32"/>
                ) : (
                    <div className="filler-poster"><img className="w-32" src={Placeholder}  alt="" /></div>
                )}
            </div>
            
            <div className="info flex flex-col justify-center items-center">
                <div className="header text-slate-900">
                    <h3 className="title font-bold text-xl max-md:text-lg">{movie.title}</h3>
                    <h4 className="release-date">{movie.release_date}</h4>
                    <h4 className="rating">Rating: {movie.vote_average}</h4>
                    <button type="button" disabled={favouriteDisabled} onClick={() => addMovieToFavourite(movie)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 my-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i className="fa fa-heart text-l" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
     );
}
 
export default ResultsCard;