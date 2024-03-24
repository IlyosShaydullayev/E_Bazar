import Footer from "@/components/footer/footer";
import SingleProduct from "@/components/product/single-product";
import { products } from "@/lib/data";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const findProduct = products?.find((item) => item.id == id);
  return (
    <div className="">
      {findProduct && <SingleProduct {...findProduct} />}
      <div className="mt-64 w-full absolute -bottom-[11rem] left-0 right-0">
        <Footer />
      </div>
    </div>
  );
}

export default Product;
