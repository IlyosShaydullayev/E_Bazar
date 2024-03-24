import Navbar from "@/components/Header/navbar";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="md:hidden">
        <Navbar />
      </div>
      <div className="400px:w-[369px] 300px:w-full mx-auto mt-0 bg-white md:mt-[128px] rounded-lg 400px:p-[56px] p-[20px]">
        <h1 className="text-[20px] font-[500] text-[#0074DF] text-center mb-[32px]">
          Log in
        </h1>
        <form>
          <label htmlFor="number" className="text-[#444]">
            Phone Number*
            <input
              type="number"
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
          <p className="text-[13px] text-[#0074DF] cursor-pointer">
            <Link to={'/sign-up'}>
                Have an account?
            </Link>
          </p>

          <Button className="w-full py-[10px] bg-[#0074DF] rounded-lg text-white text-[12px] font-[600] mt-[14px] hover:bg-blue-600">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
