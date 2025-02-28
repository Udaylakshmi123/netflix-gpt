import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SubContainer = ()=>{
    const movies = useSelector(store=>store?.movies);
    return (<div className="bg-black">
        <div className="relative z-20 pl-12 -mt-80">
        < MovieList title={"NOW Playing"} movies={movies.nowPlayingMovies}/>
        < MovieList title={"Popular"} movies={movies.popularMovies}/>
        < MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        < MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      </div>
    </div>
    )
}
export default SubContainer;