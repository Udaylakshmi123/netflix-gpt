import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBarComponent = ()=>{
    const selectedLang = useSelector(store=>store?.config?.lang);
    return (
    <div className="pt-[10%] flex justify-center">
        <form className="bg-black w-[50%] rounded-lg">
            <input type="text" className="p-4 w-[80%] m-4 rounded-lg" placeholder={lang[selectedLang].gptSearchPlaceholder}/>
            <button className="bg-red-500 h-12 my-4 font-semibold text-white py-2 px-4 border border-red-500 rounded">{lang[selectedLang].search}</button>
        </form>
    </div>
    )
}
export default GPTSearchBarComponent;