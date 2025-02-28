import GPTMovieSuggestComponent from "./GPTMovieSuggestions";
import GPTSearchBarComponent from "./GPTSearchBar";
import {NETFLIX_BG_IMG} from "../utils/constants";

const GPTSearchComponent = () => {
  return (
    <div className="bg-black bg-opacity-50 h-screen">
        <div className="absolute -z-10">
        <img className="h-screen w-screen"
          src={NETFLIX_BG_IMG}
          alt="logo" />
      </div>
      <GPTSearchBarComponent />
      <GPTMovieSuggestComponent />
    </div>
  );
};
export default GPTSearchComponent;
