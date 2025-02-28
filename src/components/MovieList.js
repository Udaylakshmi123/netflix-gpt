import MovieCard from "./MovieCard";

const MovieList = ({title,movies})=>{
    return (
    <div className="px-6">
            <h1 className="text-lg py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
            <div className="flex">
            {movies?.length && movies.map(movie=>(<MovieCard key={movie.id} movieImg={movie.poster_path}/>)
            )}
            </div>
            </div>        
    </div>
    );
}
export default MovieList;