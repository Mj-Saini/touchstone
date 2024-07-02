// src/components/AuthForm.js
import React, { useState } from "react";
import userImg from "../assets/images/svg/user.svg";
import emailImg from "../assets/images/svg/email.svg";
import passwordImg from "../assets/images/svg/password.svg";
import googleImg from "../assets/images/svg/google-icon.svg";
import fbImg from "../assets/images/svg/fb-icon.svg";
import inImg from "../assets/images/svg/linkdin.svg";
import logo from "../assets/images/svg/logo.svg";
import bibleText from "../assets/images/svg/bible-logo.svg";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        console.log("Passwords do not match!");
        return;
      }
      console.log("Sign Up Data:", formData);
    } else {
      console.log("Sign In Data:", formData);
    }
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/main-page");
  };

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="flex flex-wrap w-full grow">
        <div className="w-full md:w-2/5  flex items-center">
          <div className="bg-[#CCBFABCC] md:rounded-r-[52px] p-8 flex flex-col items-center justify-center md:h-[665px]">
            <h2 className="text-black text-2xl md:text-3xl lg:text-[43px] pb-4 md:pb-[38px] text-center uppercase">
              WELCOME BACK!
            </h2>
            <p className="mb-8 text-center font-normal text-lg md:text-[22px] text-black">
              To continue reading the Bible with us, please login with your
              personal information.
            </p>
            <button
              onClick={toggleForm}
              className="text-black text-lg sm:text-xl lg:text-[23px] border border-black px-[60px] py-2.5 rounded-xl shadow-drop_shadow"
            >
              {!isSignUp ? "SIGN UP" : "SIGN IN"}
            </button>
          </div>
        </div>

        {/* Create Account Section */}
        <div className="w-full md:w-3/5 flex flex-col items-center">
          <div className="flex justify-end w-full mb-5 lg:mb-12 py-3">
            <div className="flex items-end flex-col px-5 sm:px-[29px]">
              <img className=" w-[150px] md:w-[251px]" src={logo} alt="logo" />
              <img className=" w-14 md:w-[79px]" src={bibleText} alt="logo" />
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[43px] text-black">
            {isSignUp ? "CREATE ACCOUNT" : "SIGN IN"}
          </h2>
          <div className="w-full md:max-w-[404px] mt-5">
            <div className="flex justify-center gap-5 mb-5">
              <span className="flex justify-center items-center w-[50px] h-[50px] rounded-[16px] border border-black">
                <a href="https://www.google.com" target="_black">
                  <img className="w-[30px]" src={googleImg} alt="google-icon" />
                </a>
              </span>
              <span className="flex justify-center items-center w-[50px] h-[50px] rounded-[16px] border border-black">
                <a href="https://www.facebook.com" target="_black">
                  {" "}
                  <img className="w-[30px]" src={fbImg} alt="google-icon" />
                </a>
              </span>
              <span className="flex justify-center items-center w-[50px] h-[50px] rounded-[16px] border border-black">
                <a href="https://www.linkdin.com" target="_black">
                  {" "}
                  <img className="w-[30px]" src={inImg} alt="google-icon" />
                </a>
              </span>
            </div>
            <p className="text-center text-sm text-black font-normal">
              or use your email to register
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 justify-center items-center rounded px-8 pt-3 pb-8"
            >
              {isSignUp && (
                <div className="flex gap-3 md:gap-5 border border-black rounded-[16px] px-5 w-full">
                  <img src={userImg} alt="user-icon" />
                  <input
                    className="text-base md:text-lg text-black border-none outline-none w-full bg-transparent placeholder:text-black  py-3"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              <div className="flex gap-3 md:gap-5 border border-black rounded-[16px] px-5 w-full">
                <img src={emailImg} alt="user-icon" />
                <input
                  className="text-base md:text-lg text-black border-none outline-none w-full bg-transparent placeholder:text-black  py-3"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex gap-3 md:gap-5 border border-black rounded-[16px] px-5 w-full">
                <img src={passwordImg} alt="user-icon" />
                <input
                  className="text-base md:text-lg text-black border-none outline-none w-full bg-transparent placeholder:text-black  py-3"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              {isSignUp && (
                <div className="flex gap-3 md:gap-5 border border-black rounded-[16px] px-5 w-full">
                  <img src={passwordImg} alt="user-icon" />
                  <input
                    className="text-base md:text-lg text-black border-none outline-none w-full bg-transparent placeholder:text-black  py-3  "
                    id="reconfirm password"
                    name="confirmPassword"
                    type="password"
                    placeholder="reconfirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              <div className="flex items-center justify-between mt-2">
                <button
                  className="text-black text-lg sm:text-xl lg:text-[23px] border border-black px-[60px] py-2.5 rounded-xl shadow-drop_shadow"
                  type="submit"
                >
                  {isSignUp ? "SIGN UP" : "SIGN IN"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
