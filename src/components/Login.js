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
import { Login_BG, USER_IMG } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();

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

    // SIGN UP
    if (!signInState) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: nameValue,
            photoURL: USER_IMG,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }

    // SIGN IN
    else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(() => {})
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Login_BG})` }}
    >
      {/* Dark overlay */}
      <div className="min-h-screen bg-black/60">
        <Header />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 my-28 p-10 bg-black bg-opacity-80 text-white left-0 right-0 mx-auto rounded-md"
        >
          <h1 className="text-3xl font-semibold mb-6">
            {signInState ? "Sign In" : "Sign Up"}
          </h1>

          {!signInState && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-3 my-3 w-full bg-gray-700 rounded-md"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Enter Email"
            className="p-3 my-3 w-full bg-gray-700 rounded-md"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full bg-gray-700 rounded-md"
          />

          <p className="text-red-500 text-sm py-2">{errorMessage}</p>

          <button
            type="submit"
            className="p-3 my-6 w-full bg-red-600 rounded-md font-semibold hover:bg-red-700 transition"
            onClick={handleBtnClick}
          >
            {signInState ? "Sign In" : "Sign Up"}
          </button>

          <p className="cursor-pointer text-gray-300" onClick={toggleSignINForm}>
            {signInState
              ? "New to Netflix? Sign Up now!"
              : "Already registered? Sign In now!"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;