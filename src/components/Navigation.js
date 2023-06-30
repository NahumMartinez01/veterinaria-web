import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

const Navigation = () => {
  /* const isLogged = false; */

  const { isLogged, logout } = useUser();

  const handleClick = async (e) => {
    logout();
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex space-x-4">
              <ul className="inline mx-4 text-white">
                {isLogged ? (
                  <li className="inline mx-2">
                    <Link onClick={handleClick} to="/home">
                      Logout
                    </Link>
                  </li>
                ) : (
                  <li className="inline mx-2">
                    <Link to="/login">Sign In</Link>
                  </li>
                )}
                {isLogged ? (
                  <>
                    <li className="inline mx-2">
                      <Link to="/showAppointment">My Appointments</Link>
                    </li>
                    <li className="inline mx-2">
                      <Link to="/createappointments">CreateAppointments</Link>
                    </li>
                  </>
                ) : null}
                <li className="inline mx-2">
                  <Link to="/home">Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
