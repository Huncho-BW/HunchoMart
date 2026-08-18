import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiLock, CiCreditCard1 } from "react-icons/ci";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";

export default function CreateAccount() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    comfirmPassword: "",
    address: "",
    card: "",
    expireDate: "",
    cvv: "",
  });

  const [error, setError] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    let newError = {};

    // Email
    if (formData.email === "") {
      newError.email = "Email can't be empty";
    }

    // Password
    if (formData.password === "") {
      newError.password = "Check password";
    } else if (formData.password.length < 8) {
      newError.password = "Password must be at least 8 characters";
    }

    // Confirm password
    if (formData.comfirmPassword === "") {
      newError.comfirmPassword = "Please confirm your password";
    } else if (formData.comfirmPassword !== formData.password) {
      newError.comfirmPassword = "Passwords don't match";
    }

    // Address
    if (formData.address === "") {
      newError.address = "Address can't be empty";
    }

    // Card
    if (formData.card === "") {
      newError.card = "Card number can't be empty";
    } else if (formData.card.replace(/\s/g, "").length < 16) {
      newError.card = "Enter a valid card number";
    }

    // Expire date
    if (formData.expireDate === "") {
      newError.expireDate = "Required";
    }

    // CVV
    if (formData.cvv === "") {
      newError.cvv = "Required";
    } else if (formData.cvv.length < 3) {
      newError.cvv = "Invalid CVV";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      navigate("/empty");
    }
  }

  return (
    <>
      <div className="createFrame">
        <form onSubmit={handleSubmit}>
          <div className="CreateBackground">
            <div>
              <h1 className="text-[24px] [@media(max-width:640px)]:text-[24px] font-[700] text-[#333333]">
                Welcome to Huncho Mart
              </h1>

              <p className="mt-[8px] text-[16px] font-[400] text-[#888888]">
                Let’s get you started sharing your links!
              </p>
            </div>

            <div className="flex flex-col mt-[40px]">
              {/* EMAIL */}
              <label className="text-[12px] font-[400] text-[#333333]">
                Email Address
              </label>

              <div
                className={`inputCreateBorder ${error.email ? "error" : ""}`}
              >
                <span>
                  <AiOutlineMail />
                </span>

                <input
                  type="email"
                  placeholder="e.g. alex@email.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                  }}
                />

                {error.email && <p className="errorMessage">{error.email}</p>}
              </div>

              {/* PASSWORD */}
              <label className="mt-[24px] text-[12px] font-[400] text-[#333333]">
                Create Password
              </label>

              <div
                className={`inputCreateBorder ${error.password ? "error" : ""}`}
              >
                <span>
                  <CiLock />
                </span>

                <input
                  type="password"
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    });
                  }}
                />

                {error.password && (
                  <p className="errorMessage">{error.password}</p>
                )}
              </div>

              {/* CONFIRM PASSWORD */}
              <label className="mt-[24px] text-[12px] font-[400] text-[#333333]">
                Confirm Password
              </label>

              <div
                className={`inputCreateBorder ${
                  error.comfirmPassword ? "error" : ""
                }`}
              >
                <span>
                  <CiLock />
                </span>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.comfirmPassword}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      comfirmPassword: e.target.value,
                    });
                  }}
                />

                {error.comfirmPassword && (
                  <p className="errorMessage">{error.comfirmPassword}</p>
                )}
              </div>

              {/* ADDRESS */}
              <label className="mt-[24px] text-[12px] font-[400] text-[#333333]">
                Address
              </label>

              <div
                className={`inputCreateBorder ${error.address ? "error" : ""}`}
              >
                <span>
                  <AiOutlineHome />
                </span>

                <input
                  type="text"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      address: e.target.value,
                    });
                  }}
                />

                {error.address && (
                  <p className="errorMessage">{error.address}</p>
                )}
              </div>

              {/* CARD NUMBER */}
              <label className="mt-[24px] text-[12px] font-[400] text-[#333333]">
                Card Number
              </label>

              <div className={`inputCreateBorder ${error.card ? "error" : ""}`}>
                <span>
                  <CiCreditCard1 />
                </span>

                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={19}
                  placeholder="1234 5678 9012 3456"
                  value={formData.card}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .replace(/(.{4})/g, "$1 ")
                      .trim();

                    setFormData({
                      ...formData,
                      card: value,
                    });
                  }}
                />

                {error.card && <p className="errorMessage">{error.card}</p>}
              </div>

              {/* EXPIRY + CVV */}
              <div className="flex gap-[16px] mt-[24px]">
                {/* EXPIRE DATE */}
                <div className="flex flex-col flex-1">
                  <label className="text-[12px] font-[400] text-[#333333]">
                    Expiry Date
                  </label>

                  <div
                    className={`inputCreateBorder ${
                      error.expireDate ? "error" : ""
                    }`}
                  >
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={5}
                      placeholder="MM/YY"
                      value={formData.expireDate}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, "");

                        if (value.length >= 3) {
                          value =
                            value.substring(0, 2) + "/" + value.substring(2, 4);
                        }

                        setFormData({
                          ...formData,
                          expireDate: value,
                        });
                      }}
                    />

                    {error.expireDate && (
                      <p className="errorMessage">{error.expireDate}</p>
                    )}
                  </div>
                </div>

                {/* CVV */}
                <div className="flex flex-col flex-1">
                  <label className="text-[12px] font-[400] text-[#333333]">
                    CVV
                  </label>

                  <div
                    className={`inputCreateBorder ${error.cvv ? "error" : ""}`}
                  >
                    <span>
                      <CiLock />
                    </span>

                    <input
                      type="password"
                      inputMode="numeric"
                      maxLength={4}
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");

                        setFormData({
                          ...formData,
                          cvv: value,
                        });
                      }}
                    />

                    {error.cvv && <p className="errorMessage">{error.cvv}</p>}
                  </div>
                </div>
              </div>

              {/* PASSWORD INFO */}
              <p className="mt-[24px] text-[12px] font-[400] text-[#737373]">
                Password must contain at least 8 characters
              </p>

              {/* SUBMIT */}
              <div className="CreateBorder mt-[24px] bg-[#633CFF] text-center">
                <button className="text-[white] w-full" type="submit">
                  Create new account
                </button>
              </div>

              {/* LOGIN */}
              <div className="flex items-center mt-[24px] [@media(max-width:640px)]:flex-col [@media(max-width:640px)]:justify-center">
                <p className="text-[16px] font-[400] text-[#888888]">
                  Already have an account?
                </p>

                <span
                  onClick={() => navigate("/")}
                  className="text-[#633CFF] text-[16px] font-[400] cursor-pointer ml-[5px]"
                >
                  Login
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
