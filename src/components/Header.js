import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {NETFLIX_LOGO,SUPPORTED_LANGUAGES} from "../utils/constants";
import {toggleSearchView} from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice";

const Header = ()=>{
  
  const dispatch = useDispatch();
   const navigate = useNavigate();
   const user = useSelector(store=>store.user);
   const isGptEnabled = useSelector(store=>store?.gpt?.showGPTSearch);
   const handleSignOut = ()=>{
    signOut(auth).then(() => {
      }).catch((error) => {
        navigate("/error");
      });
   };
   const handleToggleSearch = ()=>{
    dispatch(toggleSearchView())
   }
   const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value))
   }
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate('/browse');
        } else {
          // User is signed out
          dispatch(removeUser());;
          navigate('/');
        }
      });
      // Unsubscribe when component unmounts
      return ()=> unsubscribe();
    },[]); 
    return <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-44" src={NETFLIX_LOGO} alt="Logo" />
        {user && (<div className="flex p-2">
            {isGptEnabled && <select className="rounded px-1 m-2 cursor-pointer bg-gray-900 text-white" onChange={(e)=> handleLanguageChange(e)}>
              {SUPPORTED_LANGUAGES?.length && SUPPORTED_LANGUAGES.map(lang=>(
                <option value={lang.value} key={lang.value}>{lang.name}</option>
              ))}
            </select>
            }
            <button className="text-xl" onClick={handleToggleSearch}>{isGptEnabled ? "🏠" : "🔍"}</button>
            <img className="w-12 m-2 rounded-lg" alt="userIcon" src={user?.photoURL} />
            <button className="bg-transparent m-2 hover:bg-red-500 h-12 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={handleSignOut}>Sign Out</button>
        </div>
        )}
    </div>
}
export default Header;