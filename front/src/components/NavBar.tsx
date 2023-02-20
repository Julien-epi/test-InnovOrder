import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authServices from "../services/authServices";
import { User } from "../types/user";

export default function NavBar() {
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    const user = authServices.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    authServices.logout();
    setCurrentUser(undefined);
  };

  return (
    <div className="sticky top-0 bg-neutral-50 z-10">
      <div className="mx-auto px-2 sm:px-4 lg:px-8 shadow-lg py-2">
        <div className="relative flex items-center justify-between h-16">
          <div className="md:flex items-center lg:px-0 flex-1">
            <Link to={"/"}>
              <p className="inline-flex items-center text-base font-bold text-primary">
                Home
              </p>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1">
            {currentUser ? (
              <div className="flex items-center text-center space-x-3 xl:space-x-6 mx-3">
                <Link to={`/profile/${currentUser.id}`}>
                  <p className="inline-flex items-center text-black text-base font-semibold text-primary">
                    {currentUser.firstname}
                  </p>
                </Link>
                <button className="cursor-pointer" onClick={logOut}>
                  <Link to={"/login"}>
                    <p className="inline-flex items-center text-base font-semibold text-primary">
                      Log out
                    </p>
                  </Link>
                </button>
              </div>
            ) : (
              <div className="flex items-center text-center space-x-3 xl:space-x-6 mx-3">
                <Link to={"/register"}>
                  <p className="inline-flex items-center text-base font-semibold text-primary">
                    Register
                  </p>
                </Link>
                <Link to={"/login"}>
                  <p className="inline-flex items-center text-base font-semibold text-primary">
                    Login
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
