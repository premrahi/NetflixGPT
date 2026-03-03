import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO_URL, USER_IMG } from "../utils/constant";

const Header = () => {
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

  return (
    <div className="absolute flex z-20 w-screen justify-between bg-gradient-to-b from-black">
      <img
        src={LOGO_URL}
        alt="logo"
        className="w-48  mx-20  my-4"
      ></img>
      {user && (
        <div className="flex">
          {user ? (
            <img src={user.photoURL} alt="user" className="w-12 h-12  mt-8" />
          ) : (
            <img
              src={USER_IMG}
              alt="user"
              className="w-12 h-12  mt-8"
            />
          )}
          <button
            className="border text-white h-12 rounded-lg p-2  mt-8 mx-6"
            onClick={() => signOutFunc()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
