import DeleteProductModal from "../shared/delete-product-modal";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";

function ProductItem({
  name,
  images,
  price,
  category,
  level,
  seller,
  stock,
  left_for_sel,
  productitem
}) {
  return (
    <div className={`300px:w-[270px] z-20 relative 400px:w-[186px] xl:w-[300px] md:w-[249px] lg:w-[305px] p-[8px] bg-white rounded-md ${productitem ? 'lg:h-[400px] 600px:h-[300px] 300px:h-[300px] md:h-[420px] 400px:h-[300px]' : 'lg:h-[460px] 600px:h-[360px] 300px:h-[340px] md:h-[480px] 400px:h-[360px]'}`}>
      <div className="relative">
        {!seller || productitem && (
          <div
            className={`absolute top-[-23px] right-[18px] md:right-[35px] w-[54px] h-[54px] rounded-full  ${
              !level.percentage ? "pt-1" : ""
            }`}
            style={{ background: level?.color }}
          >
            <h1 className="text-center text-[14px] font-[600] text-white break-words leading-[16px] p-1">
              {level?.percentage}
              {level.percentage ? "%" : ""} {level?.title}
            </h1>
          </div>
        )}
        <img
          src={images[0]?.url}
          alt="product item img"
          className="rounded-[8px] 300px:w-[270px] h-[180px] md:w-[289px] md:h-[278px] object-cover"
        />
        <div className="absolute bottom-[-18px] right-[6px] md:right-[19px] w-[24px] md:w-[35px] h-[24px] md:h-[35px] rounded-full bg-[#F4F4F5] cursor-pointer">
          <img
            src="/public/images/heart.svg"
            alt="heart logo"
            className="translate-x-[30%] translate-y-[30%] md:translate-x-[40%] md:translate-y-[40%] w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
          />
        </div>
      </div>
      <div className="md:px-[24px]">
        <p className="pt-[8px] font-[400] text-[#777] text-[10px] md:text-[13px]">
          {category}
        </p>
        <h3 className="pt-[8.5px] text-[14px] md:text-[17px] font-[500]">
          {name}
        </h3>
      </div>
      {seller && (
        <>
          <h2 className="text-[#0074DF] md:px-[24px] mt-4 text-[13px] md:text-[16px] font-[700]">
            {left_for_sel} ta qoldi
          </h2>
        </>
      )}
      <div className={`pt-[10px] md:py-[10px] flex gap-[8px] items-center ${!seller ? "justify-end" : "justify-between"}`}>
        {seller && (
          <div className="flex md:px-[24px] gap-[8px] text-start">
            <Button variant="secondary" className="rounded-full p-3">
              <Pencil className="w-4 h-4 text-blue-500" />
            </Button>
            <DeleteProductModal />
          </div>
        )}
        {stock > 0 ? (
          <div className="flex justify-end md:pr-[24px]">
            <h2 className="text-[#0074DF] text-[13px] md:text-[16px] font-[700]">
              ${stock}
            </h2>
            <h2 className="text-[#7A7A7A] text-[10px] md:text-[13px] line-through font-[400]">
              ${price}
            </h2>
          </div>
        ) : (
          <h2 className="text-[#0074DF]  md:pr-[24px] text-[13px] md:text-[16px] font-[700]">
            ${price}
          </h2>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
