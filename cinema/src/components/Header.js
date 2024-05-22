import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useEffect, useState } from "react";

const Header = () => {
    // mobile menu
    const [hidden, setHidden] = useState(true);

    // Dark Mode
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));

        if(darkMode){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },[darkMode]);

    // Styles for headings when active or inactive
    const activeClass  = "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
    const inactiveClass = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
    return ( 
        <header className="w-4.5/5 bg-slate-600">
            <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="TGE Movies" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-900 dark:text-white">TGE Movies</span>
                    </Link>
                    <div className="flex justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button onClick={() => setDarkMode(!darkMode)}>
                            { darkMode ? (<i className="fa fa-sun-o text-2xl text-slate-900 dark:text-white" aria-hidden="true"></i>) : (<i class="fa fa-moon-o text-2xl text-slate-900 dark:text-white" aria-hidden="true"></i>) }
                        </button>
                        <Link to="/favourite"><i className="fa fa-heart text-2xl text-red-700 px-3" aria-hidden="true"></i></Link>
                        <Link to="/search"><i className="fa fa-search text-2xl dark:text-white text-slate-900" aria-hidden="true"></i></Link>
                        <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true"  fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className={`${hidden ? "hidden" : ""} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="text-slate-900 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className={({isActive}) => isActive ? activeClass : inactiveClass} aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="movies/popular" className={({isActive}) => isActive ? activeClass : inactiveClass}>Popular</NavLink>
                            </li>
                            <li>
                                <NavLink to="movies/top" className={({isActive}) => isActive ? activeClass : inactiveClass}>Top Rated</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;



