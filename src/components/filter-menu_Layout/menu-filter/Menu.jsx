import Navbar from "@/components/Header/navbar";
import NavigationBottom from "@/components/Header/navigationBottom";
import Footer from "@/components/footer/footer";
import { CateApi } from "@/lib/data";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
    const {pathname} = useLocation()
    return (
        <>
            <Navbar />
            <div className="1330px:w-[1040px] md:hidden w-[1018px] mx-auto xl:w-[890px] lg:w-[820px] md:w-[740px] 400px:w-[349px] 600px:w-[537px] 300px:w-[301px]">
                <div className="flex items-center gap-2 mb-3">
                    <Link to={'/menu'} className={`text-[14px] ${pathname === '/menu' ? 'text-[#0074DF] underline' : 'text-[#666] '}`}>
                        Menu
                    </Link>
                    <Link to={'/filter'} className={`text-[14px] ${pathname === '/filter' ? 'text-[#0074DF] underline' : 'text-[#666] '}`}>
                        Filter
                    </Link>
                </div>
                <div className="mb-[100px] 300px:block md:hidden 1330px:w-[1300px] w-[1018px] mx-auto xl:w-[1018px] lg:w-[924px] md:w-[772px] 400px:w-[380px] 600px:w-[537px] 300px:w-[301px]">
                    <button className="bg-[#0074DF] rounded-md text-left p-3 text-white font-semibold w-[305px] text-sm flex items-center justify-between cursor-pointer">Barchasi <p><FaArrowRight/></p></button>
                    <div className="flex mt-[30px] flex-wrap gap-6">
                        {CateApi.map((item, i) => (
                            <div key={i} className="font-semibold text-[9px] w-[60px] flex items-center text-center gap-2 justify-center flex-col">
                                <img src={item.Ima} alt="category" className="w-[52px] rounded-full h-[52px]"/>
                                <Link to={item.Link}>{item.Title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            <NavigationBottom />
        </>
    )
}

export default Menu;