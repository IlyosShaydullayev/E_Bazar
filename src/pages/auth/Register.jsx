import Navbar from "@/components/Header/navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="md:hidden">
        <Navbar />
      </div>
      <div className="400px:w-[369px] 300px:w-full mx-auto mt-0 bg-white md:mt-[128px] rounded-lg 400px:p-[56px] p-[20px]">
        <h1 className="text-[20px] font-[500] text-[#0074DF] text-center mb-[32px]">
          Registration
        </h1>
        <form>
          <label htmlFor="fullName" className="text-[#444]">
            Full name*
            <input
              type="text"
              id="fullName"
              className="mt-[8px] mb-[25px] block text-black py-[12px] px-[13px] w-full text-[14px]"
              placeholder="Enter Your full name"
              required
            />
          </label>
          <label htmlFor="number" className="text-[#444]">
            Phone Number*
            <input
              type="text"
              id="number"
              className="mt-[8px] mb-[25px] block text-black py-[12px] px-[13px] w-full text-[14px]"
              placeholder="Enter Your phone number"
              required
            />
          </label>
          <label htmlFor="password" className="text-[#444]">
            Password*
            <input
              type="password"
              id="password"
              className="mt-[8px] mb-[25px] block text-black py-[12px] px-[13px] w-full text-[14px]"
              placeholder="123456"
              required
            />
          </label>
          <label htmlFor="confirmPassword" className="text-[#444]">
            Confirm Password*
            <input
              type="password"
              id="confirmPassword"
              className="mt-[8px] mb-[25px] block text-black py-[12px] px-[13px] w-full text-[14px]"
              placeholder="123456"
              required
            />
          </label>
          <p className="text-[13px] text-[#0074DF] cursor-pointer">
            <Link to={'/sign-in'}>
              Have an account?
            </Link>
          </p>

          <Button className="w-full py-[10px] bg-[#0074DF] rounded-lg text-white text-[12px] font-[600] mt-[14px] hover:bg-blue-600">
            Log in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
