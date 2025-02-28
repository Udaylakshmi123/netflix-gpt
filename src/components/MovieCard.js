import {IMG_CDN_URL} from "../utils/constants";

const MovieCard = ({movieImg})=>{
    if(!movieImg) return null;
    return (<div className="w-48 pr-4">
        <img alt="movie path" src={IMG_CDN_URL + movieImg} />
    </div>)
}
export default MovieCard;