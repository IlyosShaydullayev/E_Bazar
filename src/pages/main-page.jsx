import Navbar from "@/components/Header/navbar";
import Hero from "@/components/home/hero";
import SectionComponent from "@/components/home/SectionComponent";
import NavigationBottom from "@/components/Header/navigationBottom";
import Footer from "@/components/footer/footer";
import Baner from "@/components/Header/baner";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { products } from "@/lib/data";
import { CardContent } from "@/components/ui/card";
import ProductItem from "@/components/product/product-item";
import { useContext } from "react";
import { Context } from "@/components/Context/Context";
import { Language } from "@/Localization/product";

function Main() {
  const { lang, filterOpen } = useContext(Context)
  let screenWidth = screen.width
  return (
    <div>
      <Navbar />
        <>
          <Hero />
          <SectionComponent />
          <Baner days={326} hours={3} minutes={6} seconds={52} />
          <div className="mt-[116px] mb-20 relative z-20">
            <h3 className="text-[16px] font-[700] w-full z-20 300px:max-w-[299px] 600px:max-w-[537px] mx-auto 400px:max-w-[390px] flex items-center justify-between md:max-w-[720px] lg:max-w-[956px] xl:max-w-[1026px] 1330px:max-w-[1268px]">{Language[lang].product.maxsulot}</h3>
            <div className="mt-[16px]">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full z-20 300px:max-w-[299px] 600px:max-w-[537px] mx-auto 400px:max-w-[390px] flex items-center justify-between md:max-w-[720px] lg:max-w-[956px] xl:max-w-[1026px] 1330px:max-w-[1268px]"
              >
                <CarouselContent>
                  {products.map((item) => (
                    <CarouselItem
                    key={item.id}
                    className="1330px:basis-1/4  md:basis-1/3 md:w-full 600px:basis-1/3 400px:basis-1/2 300px:basis-1/1 ml-0"
                    >
                      <CardContent className="flex items-center justify-center p-0 ">
                        <div className="w-full flex justify-center cursor-pointer">
                          <ProductItem {...item} seller={false} productitem={true} />
                        </div>
                      </CardContent>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </>
      <NavigationBottom />
      <Footer />
    </div>
  );
}

export default Main;
