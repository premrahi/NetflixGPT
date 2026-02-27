import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInState, setSignInState] = useState(true);

  const toggleSignINForm = () => {
    setSignInState(!signInState);
  };

  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_small.jpg"
            alt="bg"
          ></img>
        </div>

        {signInState ? (
          <form className="absolute w-3/12 my-28 bg-opacity-80 bg-black mx-auto left-0 right-0 text-white ">
            <div className="m-2 p-8 flex flex-col">
              <h1 className="text-white  p-4 text-3xl font-semibold">
                {signInState ? "Sign In" : "Sign Up"}
              </h1>
              <input
                type="text"
                placeholder="Email or phone number"
                className="m-2 p-2  bg-gray-700 rounded-md w-3/3"
              ></input>
              <input
                type="password"
                placeholder="password"
                className="m-2 p-2  bg-gray-700 rounded-md w-3/3"
              ></input>
              <button
                type="submit"
                className="m-2 p-2 my-8 rounded-md border bg-red-600 text-white border-black w-3/3"
              >
                {signInState ? "Sign In" : "Sign Up"}
              </button>

              <p className="p-4 cursor-pointer" onClick={toggleSignINForm}>
                {signInState
                  ? "New to Netflix? Sign Up now!"
                  : "Already registered?, Sign In now!"}
              </p>
            </div>
          </form>
        ) : (
          <form className="absolute w-3/12 my-28 bg-opacity-80 bg-black mx-auto left-0 right-0 text-white ">
            <div className="m-2 p-8 flex flex-col">
              <h1 className="text-white  p-4 text-3xl font-semibold">
                {signInState ? "Sign In" : "Sign Up"}
              </h1>
              <input
                type="text"
                placeholder="Name"
                className="m-2 p-2  bg-gray-700 rounded-md w-3/3"
              ></input>
              <input
                type="text"
                placeholder="Email or phone number"
                className="m-2 p-2  bg-gray-700 rounded-md w-3/3"
              ></input>
              
              <input
                type="password"
                placeholder="set password"
                className="m-2 p-2  bg-gray-700 rounded-md w-3/3"
              ></input>
              <button
                type="submit"
                className="m-2 p-2 my-8 rounded-md border bg-red-600 text-white border-black w-3/3"
              >
                {signInState ? "Sign In" : "Sign Up"}
              </button>
              <p className="p-4 cursor-pointer" onClick={toggleSignINForm}>
                {signInState
                  ? "New to Netflix? Sign Up now!"
                  : "Already registered?, Sign In now!"}
              </p>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
