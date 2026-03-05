import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import gpt from "../assets/gpt.png";
import net from "../assets/net-gpt-logo.png";
import N_LOGO from "../assets/N_LOGO.png";
import { LOGO_URL, SUPPORTED_LANGUAGES, USER_IMG } from "../utils/constant";
import { toggleGptSearchView } from "../utils/GptSlice";

const Header = () => {
  const [btnLogo, setBtnLogo] = useState();
  const showToggle = useSelector((store) => store.gpt.showGptSearch);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const signOutFunc = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      return () => unsubscribe();
    });
  }, []);

  const handleGptClick = () => {
    // toggle gpt search
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute flex z-20 w-screen justify-between bg-gradient-to-b from-black">
      <div>
        {/*NETFLIX HEADER LOGO*/}
        {showToggle ? (
          <img src={net} alt="logo" className="w-64 h-64 -mt-14 mx-16"></img>
        ) : (
          <img src={LOGO_URL} alt="logo" className="w-48  mx-20  my-4"></img>
        )}
      </div>

      <div>
        {user && (
          <div className="flex">
            {showToggle ? (
              // gpt logo
              <>
                <img
                  className=" text-white h-24 w-24 cursor-pointer  p-2  mt-3 mx-2 hover:scale-150 transition-transform delay-300"
                  alt="N_icon"
                  onClick={() => handleGptClick()}
                  src={N_LOGO}
                ></img>
                <select className="text-white h-12 bg-gray-900 cursor-pointer rounded-lg p-2  mt-8 mx-6">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              // N logo
              <img
                className=" text-white h-12 cursor-pointer  p-2  mt-8 mx-6 hover:scale-150 transition-transform delay-300"
                alt="gpt_icon"
                onClick={() => handleGptClick()}
                src={gpt}
              ></img>
            )}
            {user ? (
              // user avatar
              <img
                src={user.photoURL}
                alt="user"
                className="w-12 h-12  mt-8 cursor-pointer hover:scale-105  transition-transform delay-300"
              />
            ) : (
              <img
                src={USER_IMG}
                alt="user"
                className="w-12 h-12 cursor-pointer mt-8  hover:scale-105 transition-transform delay-300"
              />
            )}
            <button
              className="border text-white h-12 cursor-pointer rounded-lg p-2  mt-8 mx-6  hover:scale-105 transition-transform delay-300"
              onClick={() => signOutFunc()}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
