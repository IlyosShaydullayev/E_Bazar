import Navbar from "@/components/Header/navbar";
import NavigationBottom from "@/components/Header/navigationBottom";
import Footer from "@/components/footer/footer";
import { Link, useLocation } from "react-router-dom";

const Filter = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="1330px:w-[1298px] z-20 relative w-[1018px] mx-auto xl:w-[890px] lg:w-[820px] md:w-[740px] 400px:w-[349px] 600px:w-[537px] 300px:w-[301px]">
        <div className="flex items-center gap-2 mb-3">
          <Link
            to={"/menu"}
            className={`text-[14px] md:hidden ${
              pathname === "/menu" ? "text-[#0074DF] underline" : "text-[#666] "
            }`}
          >
            Menu
          </Link>
          <Link
            to={"/filter"}
            className={`text-[14px] ${
              pathname === "/filter"
                ? "text-[#0074DF] underline"
                : "text-[#666] "
            }`}
          >
            Filter
          </Link>
        </div>
        <div className="space-y-4 md:space-y-0 block md:flex justify-center 1330px:justify-between flex-wrap items-center gap-[50px] mb-[120px]">
          <div>
            <label className="block" htmlFor="category">
              Kategoriyalar
            </label>
            <select
              id="category"
              className="outline-none mt-2 w-[272px] h-[40px] rounded-[5px] text-gray-500 border px-[13px]"
            >
              <option value="Kulolchilik">Kulolchilik</option>
              <option value="Rasmlar">Rasmlar</option>
              <option value="Haykaltaroshlik">Haykaltaroshlik</option>
              <option value="Doppichilik">Doppichilik</option>
            </select>
          </div>
          <div>
            <label className="block" htmlFor="bottomcategory">
              Pastki kategoriya
            </label>
            <select
              id="bottomcategory"
              className="outline-none mt-2 w-[272px] h-[40px] rounded-[5px] text-gray-500 border px-[13px]"
            >
              <option value="Haykallar">Haykallar</option>
              <option value="Idishlar">Idishlar</option>
              <option value="oyinchoqlar">O{"'"}yinchoqlar</option>
              <option value="Sopollar">Sopollar</option>
            </select>
          </div>
          <div>
            <label className="block">Narxlar</label>
            <div className="flex w-[253px] items-center justify-between">
              <input
                type="number"
                className="w-[122px] text-[12px] h-[40px] border px-[9px] rounded-[5px]"
                placeholder="Dan:100 000 UZS"
              />
              <input
                type="number"
                className="w-[122px] text-[12px] h-[40px] border px-[9px] rounded-[5px]"
                placeholder="Gacha:150 000 UZS"
              />
            </div>
          </div>
          <div>
            <label className="block" htmlFor="cities">
              Shaharlar
            </label>
            <select
              id="cities"
              className="outline-none mt-2 w-[272px] h-[40px] rounded-[5px] text-gray-500 border px-[13px]"
            >
              <option value="Toshkent">Toshkent</option>
              <option value="Termez">Termez</option>
              <option value="Samarqand">Samarqand</option>
              <option value="Jizzax">Jizzax</option>
            </select>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Footer />
        <NavigationBottom />
      </div>
    </>
  );
};

export default Filter;
