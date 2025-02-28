import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SubContainer from "./SubContainer";
import { useSelector } from "react-redux";
import GPTSearchComponent from "./GPTSearch";

const Browse = ()=>{
    const isGptEnabled = useSelector(store=>store?.gpt?.showGPTSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (<div>
        <Header />
        {isGptEnabled ? <GPTSearchComponent /> : 
        <>
        <MainContainer />
        <SubContainer />
        </>
        }
    </div>
    )
}

export default Browse;