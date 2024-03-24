/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext } from "react";
import Navbar from "@/components/Header/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Heart } from "lucide-react";
import { products } from "@/lib/data";
import ProductItem from "./product-item";
import Footer from "../footer/footer";
import NavigationBottom from "../Header/navigationBottom";
import PageHistory from "../shared/page-history";
import { Language } from "@/Localization/product";
import { Context } from "../Context/Context";

function SingleProduct({
  name,
  images,
  description,
  info,
  brand,
  price,
  stock,
  disCountPrice,
  sizes,
  weight,
}) {
  const [image, setImage] = useState(null);
  const { lang } = useContext(Context);
  return (
    <div className="relative">
      <Navbar />
      <PageHistory />
      <div className="grid pt-4 grid-cols-1 md:grid-cols-2 items-center justify-between 1330px:w-[1300px] w-[1018px] mx-auto xl:w-[1018px] lg:w-[924px] md:w-[772px] 400px:w-[380px] 600px:w-[537px] 300px:w-[301px]">
        <div className="w-[300px] relative mx-auto xl:w-[490px] lg:w-[400px] md:w-[350px] 1330px:w-[600px] 300px:w-[301px] md:ml-0 400px:w-[350px] 600px:w-full h-[400px]">
          <img
            src={image || images[0]?.url}
            className="rounded-[8px] w-[300px] xl:w-[490px] lg:w-[400px] md:w-[350px] 1330px:w-[600px] 1330px:h-[500px] xl:h-[450px] lg:h-[400px] md:h-[360px] 600px:h-[500px] 400px:h-[400px] 300px:h-[300px] object-cover 300px:w-[301px] 400px:w-[350px] 600px:w-full"
            alt={name}
          />
          <Button
            className="bg-blue-500 absolute top-0 right-0 md:hidden hover:bg-blue-600 p-[10px] text-white rounded-[8px]"
            variant="default"
          >
            <Heart />
          </Button>

          <div className="mt-[16px]">
            <p className="text-[16px]">{Language[lang].product.rang}</p>
            <div className="mt-[8px]">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full  md:ml-0 space-x-2 px-1"
              >
                <CarouselContent>
                  {images.map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-1/4 300px:basis-[max-content]  600px:basis-1/4 md:basis-1/3  400px:basis-1/3 lg:basis-[max-content] "
                    >
                      <div
                        className={`w-[105px] box-border border rounded-[4px] ${
                          image == _.url
                            ? " border-[#0074DF]"
                            : "border-[#919191]"
                        }`}
                      >
                        <Card
                          className="p-0 w-[100px]"
                          onClick={() => setImage(_.url)}
                        >
                          <CardContent className="flex items-center justify-center p-0 w-[100px] h-[80px]">
                            <div className={`w-full cursor-pointer`}>
                              <img
                                src={_.url}
                                alt="img"
                                className="object-cover w-[100px] h-[80px] rounded-[1px]"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="mt-[60px] 400px:mt-[170px] 600px:mt-[300px] md:mt-10 mx-auto 300px:w-[301px] 400px:w-[351px] 600px:w-full">
          <div className="flex items-center justify-between gap-[40px] 300px:w-[301px] mx-auto 400px:w-[351px] 600px:w-[537px] md:w-full">
            <div>
              <h1 className="md:text-[24px] 300px:text-[22px] lg:text-[22px] text-[#2B2B2D]">
                {name}
              </h1>
              <p className="md:text-[12px] lg:text-[14px] text-[#7A7A7A]">
                {description}
              </p>
            </div>
            <Button
              className="bg-blue-500 hidden md:block hover:bg-blue-600 p-[10px] text-white rounded-[8px]"
              variant="default"
            >
              <Heart />
            </Button>
          </div>

          <div className="mt-[16px]">
            <div className="flex items-center gap-6">
              <h3 className="md:text-[14px] lg:text-[16px] font-[600]">
                {Language[lang].product.brend} :
              </h3>
              <h4 className="md:text-[14px] lg:text-[16px] font-[400] text-[#777]">
                {brand}
              </h4>
            </div>
            <div className="items-center mt-[16px] gap-[8px] hidden md:flex">
              <h2 className="text-[#0074DF] md:text-[20px] lg:text-[24px] font-[600]">
                {price} {Language[lang].product.USZ1}
              </h2>
              <h2 className="text-[#7A7A7A] md:text-[14px] lg:text-[16px] line-through font-[400]">
                {stock} {Language[lang].product.USZ}
              </h2>
            </div>
            <div className="flex mt-[16px] items-center gap-[8px] flex-wrap">
              <h1 className="md:text-[14px] lg:text-[16px] font-[500] text-[#2B2B2D]">
                {Language[lang].product.Razmer}{" "}
              </h1>
              <div className="flex items-center gap-[8px] flex-wrap">
                {sizes.map((item) => (
                  <Button
                    key={item}
                    className={
                      "px-[11px] 400px:text-[11px] py-[5px] bg-blue-500 hover:bg-blue-600 md:text-[12px] lg:text-[14px]"
                    }
                    variant={"default"}
                  >
                    {item}
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-[8px] flex-wrap">
                {weight?.map((item) => (
                  <Button
                    key={item}
                    className={
                      "px-[11px] py-[5px] 400px:text-[11px] bg-white text-black hover:bg-slate-200 border md:text-[12px] lg:text-[14px]"
                    }
                    variant={"default"}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-[54px] relative hidden md:flex gap-[20px] items-center flex-wrap justify-center md:justify-start">
              <Button className="border block border-[#0074DF] bg-transparent hover:bg-slate-200 text-[#0074DF] w-full 600px:w-[305px]">
                {Language[lang].product.Sms}
              </Button>
              <Button className="bg-[#0074DF] hover:bg-blue-700 text-white w-full 600px:w-[305px] mt-[8px] md:mt-0">
                {Language[lang].product.Tel}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0 md:mt-[130px] 300px:mt-[30px] relative z-[20] 1330px:mt-[300px] lg:mt-[178px] xl:mt-[268px] rounded-[8px] xl:w-[963px] lg:w-[780px] md:w-[600px] 600px:w-[537px] 400px:w-[380px] bg-white p-[24px] 300px:w-[301px]">
        <div>
          <p className="text-[#0074DF] text-[17px] font-[600]">Izoh</p>

          <div className="w-full bg-slate-200 h-[2px] mt-[23px]">
            <div className="w-[10%] bg-blue-500 h-[2px]"></div>
          </div>

          <div className="text-[14px] text-[#7A7A7A] mt-[16.5px]">{info}</div>
        </div>
      </div>

      <div className="mt-[24px] relative z-20  bg-white rounded-[8px] p-[10px] xl:w-[963px] lg:w-[780px] 800px:w-[600px] 300px:w-[301px] 600px:w-[537px] 400px:w-[380px]">
        <p className="text-[#0074DF] text-[17px] font-[600] text-center 600px:text-left">
          {Language[lang].product.Murojat}
        </p>
        <div className="600px:flex items-center justify-between block">
          <div className="flex items-center gap-[8px] mt-[16px] justify-center 600px:justify-start">
            <img
              src="/public/images/product/user.png"
              className="w-[74px]"
              alt="user avatar"
            />
            <div>
              <h3 className="text-[17px] font-[500]">
                {Language[lang].product.Ism}
              </h3>
              <h4 className="mt-[8px] text-[#7A7A7A] text-[17px]">
                {Language[lang].product.Online} 09:54
              </h4>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-[5px] mt-5 justify-center 600px:justify-end">
              <img
                src="/public/images/product/phone.png"
                width={24}
                height={24}
                alt=""
              />
              <p className="text-[17px] text-[#7A7A7A]">+(000) 000 00 00</p>
            </div>
            <Button
              className="bg-white border-[1px] block mx-auto mt-[20px] 600px:mt-[8px] w-[154px] text-[#0074DF] hover:bg-slate-200 border-[#0074DF]"
              variant="default"
            >
              {Language[lang].product.Sms}
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-[116px] mb-20 relative z-20">
        <h3 className="text-[16px] font-[700]">
          {Language[lang].product.maxsulot}
        </h3>
        <div className="mt-[16px]">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full z-20 300px:max-w-[299px] 600px:max-w-[537px] 400px:max-w-[390px]  md:ml-0 flex items-center justify-between md:max-w-[796px] lg:max-w-[956px] xl:max-w-[1026px] 1330px:max-w-[1268px]"
          >
            <CarouselContent>
              {products.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="1330px:basis-1/4  md:basis-1/3 md:w-full 600px:basis-1/3 400px:basis-1/2 300px:basis-1/1 ml-0"
                >
                  <CardContent className="flex items-center justify-center p-0 ">
                    <div className="w-full flex justify-center cursor-pointer">
                      <ProductItem {...item} productitem={false} />
                    </div>
                  </CardContent>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="md:hidden text-center absolute z-[10] bottom-[-400px] left-[50%] w-full translate-x-[-50%] pb-[100px]">
        <div className="flex gap-[10px] justify-center">
          <h1 className="text-[#0074DF] text-[24px] 400px:text-[38px] font-[600]">
            {price} 000 {Language[lang].product.USZ1}
          </h1>
          <h1 className="text-[#7A7A7A] text-[16px] 400px:text-[23px]">
            {stock} 000 {Language[lang].product.USZ}
          </h1>
        </div>
        <Button className="bg-[#0074DF] hover:bg-blue-700 text-white w-full mt-[16px] md:mt-0">
          {Language[lang].product.Tel}
        </Button>
      </div>
      <NavigationBottom />
    </div>
  );
}

export default SingleProduct;
