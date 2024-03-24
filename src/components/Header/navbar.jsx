import { useContext } from "react";
import {
  AlignLeft,
  Heart,
  MapPin,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import { Language } from "@/Localization/Localization";
import UserPopover from "../shared/user-popover";

function Navbar() {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const size = window.screen.availWidth
  const nav = () => {
    if(size > 768){
      if(pathname != '/'){
        navigate('/')
      }else{
        navigate('/') 
      }
    }else{
      if(pathname == '/menu'){
        navigate('/')
      }else{
        navigate('/menu') 
      }
    }
  }
  const {lang, setLang, login} = useContext(Context)
  return (
    <div className=" flex items-center justify-center md:py-[40px] 300px:py-[20px] mx-auto w-full">
      <div className="h-[44px]  flex items-center justify-between  lg:gap-20  1330px:w-[1298px] md:space-x-6 600px:space-x-32 400px:space-x-10 300px:space-x-10">
        <div className="flex items-center justify-around space-x-2" onClick={nav}>
          <AlignLeft className="block md:hidden text-blue-600" />
          <Link to="/" className="text-blue-600 font-bold text-[20px]">
            BazART
          </Link>
        </div>
        <div className="flex items-center justify-center ">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <input
                  type="search"
                  placeholder={Language[lang].header.Search}
                  className="rounded-l-lg rounded-r-none bg-gray-50 xl:w-[320px] 300px:w-[100px] 400px:w-[150px] 600px:w-[250px] pl-[25px] outline-none h-[32px] rounded"
                />
                <Button className="hover:bg-[#FFFFFF] bg-[#FFFFFF] rounded-none hidden md:flex h-[32px] border-none text-gray-500">
                  <MapPin /> &nbsp; {Language[lang].header.map}
                </Button>
              </div>
              <Button
                className="bg-white text-black h-[32px] hover:bg-white md:bg-blue-500 md:hover:bg-blue-600 md:text-white rounded-none rounded-r-lg"
                variant="default"
              >
                <Search />
              </Button>
            </div>
          </div>
          <div className="space-x-4 items-center justify-center hidden md:flex">
            <select
              value={lang} onChange={(evt) => setLang(evt.target.value)}
              name="select"
              defaultValue={"uz"}
              className="outline-none bg-inherit cursor-pointer"
            >
              <option value="uz">Uzbek</option>
              <option value="ru">Russian</option>
              <option value="en">English</option>
            </select>
            <div className="flex space-x-2 items-center justify-around gap-[10px] cursor-pointer ">
              <Heart />
              <ShoppingCart />
              {login ? (
                <Link to={'/sign-in'} className="text-[18px]">
                  <UserPopover />
                </Link>
              ) : (
                <Link to={'/sign-in'} className="text-[18px]">
                  Kirish
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Navbar;
