import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = ()=>{
   const navigate = useNavigate();
   const user = useSelector(store=>store.user);
   const handleSignOut = ()=>{
    signOut(auth).then(() => {
        navigate("/");
      }).catch((error) => {
        navigate("/error");
      });
   }
    return <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
        {user && (<div className="flex p-2">
            <img className="w-12 m-2 rounded-lg" alt="userIcon" src={user?.photoURL} />
            <button className="bg-transparent m-2 hover:bg-red-500 h-12 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={handleSignOut}>Sign Out</button>
        </div>
        )}
    </div>
}
export default Header;