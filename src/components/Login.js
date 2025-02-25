import Header from "./Header";
import {useState} from "react";

const Login = ()=>{
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
        console.log('function done')

    }
    return <div>
        <Header />
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/AU-en-20250217-TRIFECTA-perspective_1820115a-706f-4b78-96db-4da6961758eb_large.jpg" alt="logo" />
        </div>
        <form className="p-12 text-white bg-black bg-opacity-80 rounded-lg absolute my-36 right-0 left-0 mx-auto w-4/12">
            <h1 className="font-bold text-3xl pb-4 m-4">{isSignInForm ? 'Sign in' : 'Sign Up'}</h1>
            {!isSignInForm && <input type="text" placeholder="Full name" className="p-4 m-4 w-full rounded-lg bg-gray-700"/>}
            <input type="text" placeholder="Email or mobile number" className="p-4 m-4 w-full rounded-lg bg-gray-700"/>
            <input type="password" placeholder="Password" className="p-4 m-4 w-full rounded-lg bg-gray-700" />
            <button className="p-4 m-4 font-medium bg-red-700 rounded-lg w-full">{isSignInForm ? 'Sign in' : 'Sign Up'}</button>
            {/* {isSignInForm && <p className="text-center">OR</p>}
            {isSignInForm && <button className="p-4 m-4 font-medium bg-gray-400 bg-opacity-70 rounded-lg w-full">Use a Sign-in code</button>}
            {isSignInForm && <div className="text-center"><a className="underline">Forgot Password</a></div>} */}
            <div className="p-4 m-4">{isSignInForm ? 'New to Netflix?' : 'Already you have an account?'} <b className="cursor-pointer text-xl" onClick={toggleSignInForm}>{isSignInForm ? 'Sign up' : 'Sign in'} now.</b></div>
        </form>
    </div>
}

export default Login;