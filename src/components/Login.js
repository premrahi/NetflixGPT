import { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch() ;
  const [signInState, setSignInState] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignINForm = () => {
    setSignInState(!signInState);
  };

  const handleBtnClick = () => {
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const nameValue = signInState ? "" : name.current?.value;

    const msg = validate(emailValue, passwordValue, nameValue);

    setErrorMessage(msg);
    if (msg) return;

    if (!signInState) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // console.log(userCredential.user);

          const user = userCredential.user ;
          updateProfile(user, {
            displayName: nameValue,
            photoURL: "https://avatars.githubusercontent.com/u/139723538?v=4",
          })
            .then(() => {
              const {uid ,email ,displayName , photoURL} = auth.currentUser ; 
              // auth.current user gets the value form updated user. just "user" has no updated values yet.
              dispatch(
                addUser({uid : uid , email : email , displayName : displayName , photoURL : photoURL}) 
              )
              // Profile updated!
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.message) ;
            });

        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // console.log(userCredential.user);
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message);
        });
    }
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

        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-3/12 my-28 bg-opacity-80 bg-black mx-auto left-0 right-0 text-white "
        >
          <div className="m-2 p-8 flex flex-col">
            <h1 className="text-white  p-4 text-3xl font-semibold">
              {signInState ? "Sign In" : "Sign Up"}
            </h1>
            {!signInState && (
              <input
                ref={name}
                type="text"
                placeholder="Name"
                className="m-2 p-2  bg-gray-700 rounded-md w-3/3"
              ></input>
            )}
            <input
              ref={email}
              type="text"
              placeholder="Enter Email"
              className="m-2 p-2  bg-gray-700 rounded-md w-3/3"
            ></input>

            <input
              type="password"
              ref={password}
              placeholder="password"
              className="m-2 p-2  bg-gray-700 rounded-md w-3/3"
            ></input>
            <p className="text-red-700 font-semibold p-2">{errorMessage}</p>
            <button
              type="submit"
              className="m-2 p-2 my-8 rounded-md border bg-red-600 text-white border-black w-3/3"
              onClick={() => handleBtnClick()}
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
      </div>
    </>
  );
};

export default Login;
