import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import {addGptMovieResult} from "../utils/gptSlice";

const GPTSearchBarComponent =  ()=>{
    const selectedLang = useSelector(store=>store?.config?.lang);
    const searchTxt = useRef(null);
    const dispatch = useDispatch();

    const handleGptSearch = async ()=>{
    //  Make an API call to GPT API and get movie Results
    // const gptQuery = 'Act as a movie Recommendation system and suggest some movies for the query: '+searchTxt.current.value+"Only give me names of 5 movies, comma seperated like the example result give ahead. Example Result: Gader, Fida, Don, Lion, Hello"
    // const gptResults = await client.chat.completions.create({
    //     messages: [{ role: 'user', content: gptQuery }],
    //     model: 'gpt-4o',
    // });
    //  output -> gptResults.choices?.[0]?.message?.content -> "3idoits, idol, Padosan, agra, chupke"
    // with chatGpt movies list data we need to call each time TMDB movie api here i'm didn't give billing so i didnt call openAI call
    // search movie in TMDB
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTxt.current.value}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
      const json = await data.json();
      dispatch(addGptMovieResult(json.results));
    }
    return (
    <div className="pt-[10%] flex justify-center">
        <form className="bg-black w-[50%] rounded-lg" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" ref={searchTxt} className="p-4 w-[80%] m-4 rounded-lg" placeholder={lang[selectedLang].gptSearchPlaceholder}/>
            <button className="bg-red-500 h-12 my-4 font-semibold text-white py-2 px-4 border border-red-500 rounded" onClick={handleGptSearch}>{lang[selectedLang].search}</button>
        </form>
    </div>
    )
}
export default GPTSearchBarComponent;