import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Language } from "@/Localization/Localization";
import { Context } from "../Context/Context";


function Footer({singleProduct}) {

  const {lang} = useContext(Context)
  return (
    <div className="hidden z-20 relative md:block justify-between px-4 items-center bg-white py-10 ">
      <div className="flex items-center justify-between mx-auto px-10 md:max-w-[796px] lg:max-w-[956px] xl:max-w-[1026px] 1330px:max-w-[1268px]">
        <div className="space-y-1 w-[162px]">
          <Link to="/" className="text-blue-600 font-bold text-[20px]">
            BazART
          </Link>
          <h2 className="text-[1rem]">+88015-88888-9999</h2>
        </div>
        <div className="space-y-2">
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <img
                  className="w-[24px] h-[24px]"
                  src="/public/images/social-icons/facebook.png"
                  alt="facebook icon"
                />
              </Link>
              <Link to="/">
                <img
                  className="w-[24px] h-[24px]"
                  src="/public/images/social-icons/instagram.png"
                  alt="instagram icon"
                />
              </Link>
              <Link to="/">
                <img
                  className="w-[24px] h-[24px]"
                  src="/public/images/social-icons/telegram.png"
                  alt="telegram icon"
                />
              </Link>
            </div>
            <div>
              <p className="text-[14px]">{Language[lang].Footer.FotterText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
