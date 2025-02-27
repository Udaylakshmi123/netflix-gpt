import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SubContainer from "./SubContainer";

const Browse = ()=>{

    useNowPlayingMovies();

    return <div>
        <Header />
        <MainContainer />
        <SubContainer />
    </div>
}

export default Browse;