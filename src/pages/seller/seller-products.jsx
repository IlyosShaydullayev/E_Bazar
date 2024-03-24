import Navbar from "@/components/Header/navbar";
import PageHistory from "@/components/shared/page-history";
import ProductItem from "@/components/product/product-item";
import { products } from "@/lib/data";
import Footer from "@/components/footer/footer";
import { Language } from "@/Localization/product";
import { useContext } from "react";
import { Context } from '@/components/Context/Context';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { CardContent } from "@/components/ui/card";

function SellerProducts() {
  const {lang} = useContext(Context)
  return (
    <div>
      <Navbar />
      <div className="md:w-[760px] lg:w-[956px] 1200px:w-[956px] xl:w-[1000px] 1330px:w-[1298px] mx-auto">
        <div className="px-2">
          <PageHistory />
        </div>
        <div className="pt-4 grid 1330px:grid-cols-4 600px:grid-cols-3 400px:grid-cols-2 300px:grid-cols-1 gap-4 place-items-center">
          {products.map((item) => (
            <ProductItem key={item.id} {...item} seller={true} />
          ))}
        </div>
      </div>
      <div className="mt-[360px] mb-20 relative z-20">
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
      <div className="w-full absolute -bottom-[57rem] left-0 right-0">
        <Footer />
      </div>
    </div>
  );
}

export default SellerProducts;
