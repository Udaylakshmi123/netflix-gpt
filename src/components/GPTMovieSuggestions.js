import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestComponent = ()=>{
    const moviesData = useSelector(store=>store?.gpt?.showSearchedMoviesList);
    if(!moviesData) return null;

    return <div className="p-4 m-4 bg-black bg-opacity-90">
       <div className="relative z-20">
       < MovieList title={"Searched Data"} movies={moviesData}/>
       </div>
    </div>
}
export default GPTMovieSuggestComponent;