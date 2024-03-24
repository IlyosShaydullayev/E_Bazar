import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { Language } from "@/Localization/Localization";
import { Context } from "../Context/Context";
import { CategoryData } from "@/lib/category";
import Filter from "../filter-menu_Layout/menu-filter/Filter";
import DesktopFilter from "../filter-menu_Layout/menu-filter/DesktopFilter";

function Category() {
  const { lang } = useContext(Context);
  return (
    <div>
      <div className="mx-auto my-[26px] z-20 hidden md:block relative md:gap-[24px] md:w-[764px] lg:w-[956px] 1200px:w-[956px] xl:w-[1000px] 1330px:w-[1298px]">
        <div className="flex items-center gap-[20px] ">
          <Link
            className="text-[#0074DF] text-[16px] underline font-semibold"
            to="/"
          >
            {Language[lang].Category.Category}
          </Link>
        </div>

        <div className="pt-[24px]">
          <ul className="flex relative z-20 flex-wrap gap-6 1330px:justify-between">
            {CategoryData.map(item => (
              <NavLink key={item.id}>
                <li className="600px:w-[70px] lg:w-[90px] w-[57px] space-y-2">
                  <img
                    className="rounded-full w-[100%]"
                    src={item.img}
                    alt={item.name}
                  />
                  <h2 className="600px:text-xs text-[8px] lg:text-[14px] font-bold text-center w-[100%]">
                    {item.title}
                  </h2>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <DesktopFilter />
      </div>
    </div>
  );
}

export default Category;
