import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser} from "../utils/userSlice";
import { USER_AVATAR,NETFLIX_BG_IMG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const fullnm = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleLoginBtnClick = () => {
    // validate the form data
    let msg;
    if (isSignInForm) {
      msg = checkValidData(email.current.value, password.current.value);
    } else {
      msg = checkValidData(email.current.value, password.current.value, fullnm.current.value,"SignUp");
    }
    setErrorMsg(msg);
    if (msg) return; // if any message is present return it
    if (!isSignInForm) {
      // create a new user(signUp)
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        
          updateProfile(userCredential.user, {
            displayName: fullnm.current.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          }).catch((error) => {
            // An error occurred
            const errorCode = error.code;
            setErrorMsg(errorCode);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMsg(errorCode);
        });
    } else {
      // Sign In the user
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMsg(errorCode);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={NETFLIX_BG_IMG}
          alt="logo" />
      </div>
      <form onSubmit={(e) => e.preventDefault()}
        className="p-12 text-white bg-black bg-opacity-80 rounded-lg absolute my-36 right-0 left-0 mx-auto w-4/12" >
        <h1 className="font-bold text-3xl pb-4 m-4">{isSignInForm ? "Sign in" : "Sign Up"}</h1>
        {!isSignInForm && (<input type="text" ref={fullnm} placeholder="Full Name"
            className="p-4 m-4 w-full rounded-lg bg-gray-700" />)}
        <input type="text" ref={email} placeholder="Email address" className="p-4 m-4 w-full rounded-lg bg-gray-700"/>
        <input type="password" ref={password} placeholder="Password" className="p-4 m-4 w-full rounded-lg bg-gray-700"/>
        {errorMsg && (
          <p className="mx-4 font-semibold text-red-700">{errorMsg}</p>
        )}
        <button className="p-4 m-4 font-medium bg-red-700 rounded-lg w-full"
          onClick={handleLoginBtnClick}> {isSignInForm ? "Sign in" : "Sign Up"}</button>
        {/* {isSignInForm && <p className="text-center">OR</p>}
            {isSignInForm && <button className="p-4 m-4 font-medium bg-gray-400 bg-opacity-70 rounded-lg w-full">Use a Sign-in code</button>}
            {isSignInForm && <div className="text-center"><a className="underline">Forgot Password</a></div>} */}
        <div className="p-4 m-4">
          {isSignInForm ? "New to Netflix?" : "Already you have an account?"}
          <b className="cursor-pointer text-xl underline" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign Up" : "Sign In"} Now.</b>
        </div>
      </form>
    </div>
  );
};

export default Login;
