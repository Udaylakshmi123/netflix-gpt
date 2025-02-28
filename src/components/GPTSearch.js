import GPTMovieSuggestComponent from "./GPTMovieSuggestions";
import GPTSearchBarComponent from "./GPTSearchBar";
import {NETFLIX_BG_IMG} from "../utils/constants";

const GPTSearchComponent = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={NETFLIX_BG_IMG}
          alt="logo" />
      </div>
      <GPTSearchBarComponent />
      <GPTMovieSuggestComponent />
    </div>
  );
};
export default GPTSearchComponent;
