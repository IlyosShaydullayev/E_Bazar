import ProductItem from "@/components/product/product-item";
import { products } from "@/lib/data";
import Rasmlar from '../../public/images/Category/Rasmlar.png'
import { Button } from "@/components/ui/button";

function Product() {
  return (
    <div className="flex mx-auto my-[26px] md:gap-[2px] md:w-[760px] lg:w-[956px] 1200px:w-[956px] xl:w-[1000px] 1330px:w-[1298px]">
      <div className="relative">
        <img src='https://picsum.photos/634' alt="baner" className="rounded-md z-20 relative hidden md:block object-cover w-[800px] h-[687px]" />
        <div className="items-center absolute hidden md:flex top-[616px] gap-[7px] z-30 left-[50%] translate-x-[-50%]">
          <h3 className="text-[14px] font-[700] text-white whitespace-nowrap">Milliy Mahsulotlar</h3>
          <Button variant='default' className='bg-[#F53E32] text-white rounded py-[11px] px-[16px] text-[14px] font-[700]'>Shop Now</Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center ">
        {products.map((item) => (
          <div key={item.id}>
            <ProductItem
              {...item}
              seller={false}
              productitem={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
