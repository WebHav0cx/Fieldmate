import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import log from "../../assets/images/log.png";

const registerUser = (userData) => {
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = existingUsers.some(
    (user) => user.email === userData.email
  );

  if (userExists) {
    return { error: "User already exists" };
  } else {
    // Add the new user to the existing users
    const updatedUsers = [...existingUsers, userData];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    return { success: true };
  }
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordsWritten, setPasswordsWritten] = useState(false);
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
    setPasswordsWritten(!!e.target.value && !!confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === password);
    setPasswordsWritten(!!password && !!e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const userData = {
        username: email,
        fullName,
        email,
        password,
      };

      // Store user data in local storage
      const registrationResult = registerUser(userData);

      if (registrationResult.error) {
        setError(registrationResult.error);
      } else {
        // Registration success, navigate to the "RegistrationSuccess" component
        navigate("/registration-success");
      }
    } else {
      //If passwords do not match, show error message
      setError("Passwords do not match");
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
              <p className="text-3xl">FIELDMATE</p>
              <div className="flex gap-4">
                <p>have an account?</p>
                <Link to="/login" className="text-primary-100">
                  Sign in!
                </Link>
              </div>
            </div>
            <div className="flex flex-col m-auto max-w-[29rem]">
              <div className="flex flex-col gap-6 justify-center items-center">
                <div className=" flex flex-col text-center gap-5">
                  <h2 className="text-4xl font-bold">
                    Get Started With FIELDMATE
                  </h2>
                  <p className="text-faded-100">Getting started is easy</p>
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
                <div className="bar">
                  <hr />
                  <span>or continue with</span>
                </div>
                <div></div>
              </div>
              <form className="flex flex-col gap-4 w-full">
                <input
                  required
                  className="p-3 rounded-lg border-none outline-none focus:outline-none"
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  required
                  className="p-3 rounded-lg border-none outline-none focus:outline-none"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="relative">
                  <input
                    required
                    className="p-3 pr-12 rounded-lg border-none w-full outline-none focus:outline-none"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <Icon
                      icon={
                        showPassword
                          ? "ant-design:eye-invisible-outlined"
                          : "ant-design:eye-outlined"
                      }
                      width="24"
                      height="24"
                    />
                  </button>
                </div>
                <div className="relative">
                  <input
                    required
                    className="p-3 w-full pr-12 rounded-lg border-none outline-none focus:outline-none"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    onChange={handleConfirmPasswordChange}
                  />
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    <Icon
                      icon={
                        showConfirmPassword
                          ? "ant-design:eye-invisible-outlined"
                          : "ant-design:eye-outlined"
                      }
                      width="24"
                      height="24"
                    />
                  </button>
                </div>
                {!passwordsMatch && passwordsWritten && (
                  <p className="text-red-500">Passwords do not match</p>
                )}

                {error && <p className="text-red-500">{error}</p>}
                <button
                  className={`bg-${
                    passwordsMatch ? "default-green" : "gray-400"
                  } p-3 rounded-lg text-white`}
                  type="submit"
                  disabled={!passwordsMatch}
                  onClick={handleSubmit}
                >
                  Create Account
                </button>

                <p className="text-sm font-light text-terms-100">
                  By continuing you indicate that you read and agreed to the
                  Terms of Use
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
