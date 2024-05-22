import { useEffect, useState } from "react";
import { Card, Loader } from "../components";

const Popular = () => {
    // Movie list state
    const [movieGrid, setMovieGrid] = useState([]);

    // State for infinite scroll
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

  

    // Prevent inifinite loop but helps infinite scroll LOL
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGJjZDU1ZjI4MGRjNGM5MjgzMjA5ZTAwYmIwYWQwZiIsInN1YiI6IjY2MmFiMjMxZjkxODNhMDExYzMwYWFhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WCUCZ3YdP-dpEuV2pV7ao0acQJ5DoNOhnBdJb4TMgWI'
          }
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json => setMovieGrid(prev => [...prev, ...json.results]))
        .catch(err => console.error('error:' + err));
        setLoading(false);    
    }, [page])

    // getting the window element
    const handleScroll = () =>{
     
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
            setLoading(true);
            setPage(prev => prev + 1);
        }
    }

    // Cleaning up useEffect
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  
     
    return ( 
        <>
            <main className="flex justify-center">
                <section className="max-w-7xl py-7">
                    <h1 className="b-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-8 text-center">Popular</h1>
                    <div className=" flex justify-center items-center flex-wrap">
                        { movieGrid.length > 0 && (
                           <div className="movieGrid flex justify-center flex-wrap gap-2 h-auto">
                            {movieGrid.map(movie => (
                                    <Card movie={movie} key={movie.id}/>
                            ))}
                           </div>
                        ) }                       
                    </div>
                    { loading && 
                        <Loader />
                    }               
                </section>
            </main>
        </>
     );
}
 
export default Popular;