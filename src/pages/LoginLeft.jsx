import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { FaLink } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { AuthenticatonContext } from "../context/AuthenticatonContext";
import { useLocation } from "react-router-dom";
export default function LoginLeft() {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData, setFormDate, setUser, accounts } =
    useContext(AuthenticatonContext);
  const [error, setError] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    let newError = {};

    if (formData.email === "") {
      newError.email = "cant be empty";
    }
    if (formData.password === "") {
      newError.password = "check password ";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      const comfirmAccount = accounts.find(
        (account) =>
          account.email === formData.email &&
          account.password === formData.password,
      );

      if (!comfirmAccount) {
        setError({
          email: "Account does not exist or password is incorrect",
        });

        return;
      }

      setUser(comfirmAccount);

      const from = location?.state?.from?.pathname || "/home";

      navigate(from, { replace: true });
    }
  }
  return (
    <>
      <div className="loginFrame">
        <form onSubmit={handleSubmit} className="inputBackground">
          <div>
            <h1 className="text-[24px] text-[#333333] [@media(max-width:767px)]:text-[24px] font-[600] topHeader">
              Welcome to Huncho Mart
            </h1>
            <p className="mt-[8px] text-[16px]  font-[400] text-[#737373] font-serif">
              Add your details below to get back into the app
            </p>
          </div>
          <div className="flex flex-col mt-[40px]">
            <label className=" font-serif text-[12px] font-[400]">
              Email Address
            </label>
            <div className={`inputLoginBorder ${error.email ? "error" : ""}`}>
              <span>
                <AiOutlineMail />
              </span>{" "}
              <input
                onChange={(e) => {
                  setFormDate({ ...formData, email: e.target.value });
                  setError("");
                }}
                type="email"
                name=""
                id=""
                placeholder="Email address"
              />
              {error.email && <p className="errorMessage">{error.email}</p>}
            </div>

            <label className="mt-[24px] font-serif  text-[12px] font-[400]">
              Passwords
            </label>
            <div
              className={`inputLoginBorder ${error.password ? "error" : ""}`}
            >
              <span>
                <CiLock />
              </span>{" "}
              <input
                onChange={(e) => {
                  setFormDate({ ...formData, password: e.target.value });
                  setError("");
                }}
                type="password"
                name=""
                id=""
                placeholder="password"
              />
              {error.password && (
                <p className="errorMessage">{error.password}</p>
              )}
            </div>

            <div className="LoginBorder hover:bg-[#BEADFF] mt-[24px] bg-[#633CFF] text-center">
              <button className=" font-serif  text-[white]" type="submit">
                Login
              </button>
            </div>
            <div className="flex items-center mt-[24px]  [@media(max-width:640px)]:flex-col  [@media(max-width:640px)]:justify-center ">
              <p className="">Don’t have an account?</p>
              <span
                onClick={() =>
                  navigate("/create-account", {
                    state: {
                      from: location?.state?.from,
                    },
                  })
                }
                className=" text-center text-[#633CFF] cursor-pointer"
              >
                Create account
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
