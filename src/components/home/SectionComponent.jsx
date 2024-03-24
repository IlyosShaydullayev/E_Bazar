import Category from "../Category/Category";
import Product from "@/pages/product";

const SectionComponent = () => {
    return (
        <div className="md:pl-10 px-3">
            <Category/>
            <Product/>
        </div>
    ) 
}

export default SectionComponent;
