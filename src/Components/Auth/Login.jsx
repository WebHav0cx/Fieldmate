import React, { useState } from "react";
import log from "../../assets/images/log.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useUser();

  const loginUser = (email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );
    console.log("Found user", user);
    return user;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = loginUser(email, password);

    if (user) {
      login(user.fullname);
      navigate("/equipment-catalogue");
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="font-inria">
      <div className="h-screen flex">
        <div className="w-1/2">
          <img
            className="h-full w-full object-cover"
            src={log}
            alt="Side image"
          />
        </div>
        <div className="w-1/2 bg-default-background">
          <div className="flex flex-col gap-4">
            <div className="flex justify-around pt-2">
              <Link to="/" className="text-3xl">
                FIELDMATE
              </Link>
              <div className="flex gap-4">
                <p>Don’t have an account?</p>
                <Link to="/signup" className="text-primary-100">
                  Sign up!
                </Link>
              </div>
            </div>
            <div className="flex flex-col m-auto max-w-[29rem]">
              <div className="flex flex-col gap-6 justify-center items-center">
                <div className="flex flex-col text-center gap-5">
                  <h2 className="text-4xl font-bold">Welcome Back</h2>
                  <p className="text-faded-100">Login into your account</p>
                </div>
                <div className="flex flex-row gap-4">
                  <button className="flex p-4 w-36 justify-center rounded-md gap-4 text-xs bg-white items-center">
                    <Icon className="text-2xl" icon="flat-color-icons:google" />
                    Google
                  </button>
                  <button className="flex p-4 w-36 justify-center rounded-md gap-4 text-xs bg-white items-center">
                    <Icon className="text-2xl" icon="logos:facebook" />
                    Facebook
                  </button>
                </div>
                <div>
                  <p>or continue with</p>
                </div>
                <div></div>
              </div>
              <form
                className="flex flex-col gap-4 w-full"
                onSubmit={handleSubmit}
              >
                <input
                  required
                  className="p-3 rounded-lg"
                  type="email"
                  placeholder="Email"
                />
                <div className="relative">
                  <input
                    required
                    className="p-3 pr-12 rounded-lg w-full"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <div className="text-red-500">{error}</div>
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <Icon
                      icon={
                        showPassword
                          ? "ant-design:eye-invisible-outlined"
                          : "ant-design:eye-filled"
                      }
                      width="24"
                      height="24"
                    />
                  </button>
                </div>
                <Link to="/Forgotpassword" className="text-terms-200 text-end">
                  Forgot Password?
                </Link>
                <button
                  className="bg-default-green p-3 rounded-lg text-white"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
