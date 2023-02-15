import { Link } from "react-router-dom";

export default function NavBar() {

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
              <div className="">
                <Link to={"/createUser"} className="">
                  Register
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
