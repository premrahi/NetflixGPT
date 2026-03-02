import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

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

  return (
    <div className="absolute flex z-10 w-screen justify-between bg-gradient-to-b from-black">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-48  mx-20 my-4"
      ></img>
      {user && (
        <div className="flex">
          {user ? (
            <img src={user.photoURL} alt="user" className="w-12 h-12  mt-8" />
          ) : (
            <img
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              alt="user"
              className="w-12 h-12  mt-8"
            />
          )}
          <button
            className="border text-white h-12 font-semibold  mt-8 mx-6"
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
