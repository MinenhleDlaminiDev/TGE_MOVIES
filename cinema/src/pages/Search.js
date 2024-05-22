import { useState } from "react";
import { ResultsCard } from "../components";

const Search = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    //Change the inputfield state and fetch as we type
    const onChange = e => {
        e.preventDefault();
        
        setSearch(e.target.value);

        const url = `https://api.themoviedb.org/3/search/movie?query=${e.target.value}&include_adult=false&language=en-US&page=1`;
        const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGJjZDU1ZjI4MGRjNGM5MjgzMjA5ZTAwYmIwYWQwZiIsInN1YiI6IjY2MmFiMjMxZjkxODNhMDExYzMwYWFhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WCUCZ3YdP-dpEuV2pV7ao0acQJ5DoNOhnBdJb4TMgWI'
        }};

        fetch(url, options)
        .then(res => res.json())
        .then(data => {
            if(!data.errors){
                setResults(data.results);
            } else {
                setResults([]);
            }
        })
        .catch(err => console.error('error:' + err));
        }

    return ( 
        <div className="main flex justify-center">
            <div className="content w-4/5">
                <div className="input-wrapper text-center mt-32 ">
                    <input type="text" className="bg-slate-800 w-4/5 p-4 rounded-sm text-white focus:outline-none" placeholder="Search for movies" 
                    value={search}
                    onChange={onChange}
                    />
                </div>

                {results.length > 0 && (
                    <ul className="results ">
                        {results.map(movie => (
                            <li key={movie.id}>
                                <ResultsCard movie={movie} /> 
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            
        </div>
     );
}
 
export default Search;