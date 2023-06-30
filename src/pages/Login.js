import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useUser from "../hooks/useUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogginLoading, hasLoginError, login, isLogged } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) navigate("/home");
  }, [isLogged, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <div className="container-lg mx-auto px-4 w-3/4 max-w-md my-24">
      <div>
        <div className="text-center">
          <h2 className="text-5xl text-white font-semibold">Sign in</h2>
          {isLogginLoading && <p>Checking credentials....</p>}
        </div>

        {!isLogginLoading && (
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-24 w-full mx-center "
          >
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Email:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Password:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password "
                  onChange={(e) => setPassword(e.target.value)}
                  minLength="8"
                  
                  required
                ></input>
              </label>
            </div>
            {hasLoginError && (
              <h2 className="text-red-500 text-2xl">credentials are invalid</h2>
            )}
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>

              <Link
                to="/register"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 p-8"
              >
                Crear Usuario
              </Link>
            </div>
            
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
