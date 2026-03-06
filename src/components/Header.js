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
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const classOnNetflix = "md:absolute flex z-20 w-full justify-between bg-black md:bg-transparent md:bg-gradient-to-b md:from-black md:to-transparent flex-col md:flex-row"
  const classOnGptPage = "absolute flex z-20 w-full justify-between bg-gradient-to-b from-black to-transparent flex-col md:flex-row"


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

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const headerClass = showToggle ? classOnGptPage : classOnNetflix;
  

  
  return (
    <div className={headerClass}>
      <div>
        {/*NETFLIX HEADER LOGO*/}
        {showToggle ? (
          <img
            src={net}
            alt="logo"
            className="w-80 h-80 -mt-14 md:-mt-20 md:mx-16 mx-auto  sm:mx-auto"
          ></img>
        ) : (
          <img
            src={LOGO_URL}
            alt="logo"
            className="w-48 md:mx-20 mx-auto sm:mx-auto my-4"
          ></img>
        )}
      </div>

      <div className="mx-auto md:mx-0 md:-mt-0 -mt-36">
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
                <select
                  className="text-white h-12 bg-gray-900 cursor-pointer rounded-lg p-2  mt-8 mx-6"
                  onChange={handleLangChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <div className="md:mt-0 mt-24">
                <img
                  className=" text-white h-12 cursor-pointer  p-2  mt-8 mx-6 hover:scale-150 transition-transform delay-300"
                  alt="gpt_icon"
                  onClick={() => handleGptClick()}
                  src={gpt}
                ></img>
              </div>
            )}
            {user ? (
              // user avatar
              <img
                src={user.photoURL}
                alt="user"
                className="w-10 h-10 mt-8 md:mt-8 cursor-pointer hover:scale-105  transition-transform delay-300"
              />
            ) : (
              <img
                src={USER_IMG}
                alt="user"
                className="w-10 h-10 cursor-pointer mt-8 md:mt-8  hover:scale-105 transition-transform delay-300"
              />
            )}
            <button
              className="border text-white md:h-12 h-10 cursor-pointer rounded-lg p-2 mt-8 md:mt-8 mx-6  hover:scale-105 transition-transform delay-300"
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
