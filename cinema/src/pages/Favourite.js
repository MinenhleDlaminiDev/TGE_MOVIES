import {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "../components/MovieCard";

const Favourite = () => {
    const {favourite} = useContext(GlobalContext);
    return ( 
        <div className="favourites-page text-center">
            <div className="contain flex flex-col justify-center items-center">
                <div className="header">
                <h1 className="b-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-8 text-center">My Favourites</h1>
                </div>

                {favourite.length > 0 ? (
                    <div className="movie-grid flex gap-8 flex-wrap justify-center w-4/5">
                    {favourite.map((movie) => (
                        <MovieCard movie={movie} key={movie.id}/>
                    ))}
                    </div>
                ):(
                    <h2 className="text-2xl text-gray-400">No movies in your favourites, Add Some! Let's have fun</h2>
                )}
                



            </div>
            
        </div>
     );
}
 
export default Favourite;