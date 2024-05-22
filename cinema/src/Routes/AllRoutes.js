import { Routes, Route } from "react-router-dom";
import { Favourite, MovieDetails, MovieList, PageNotFound, Search, Popular, TopRated } from "../pages";

const AllRoutes = () => {
    return ( 
        <>
        <Routes>
            <Route path="/" element={<MovieList />}></Route>
            <Route path="movie/:id" element={<MovieDetails />}></Route>
            <Route path="movies/popular" element={<Popular />}></Route>
            <Route path="movies/top" element={<TopRated />}></Route>
            <Route path="search" element={<Search />}></Route>
            <Route path="/favourite" element={<Favourite />}></Route>

            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        </>
     );
}
 
export default AllRoutes;