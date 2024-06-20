import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

import { useFetchProducts } from "../components/useFetchProducts";
import { Link } from "react-router-dom";

const Store = () => {
  const { products } = useFetchProducts();

  const dispatch = useDispatch();
  const handleAddToCart = (prod) => {
    dispatch(
      addToCart({
        productId: prod.id,
        quantity: 1,
        prod: prod,
      })
    );
  };

  // console.log(products);

  return (
    <div className="bg-[#f5f5f7] w-full flex flex-col gap-3 pl-10 pr-10 pt-10 pb-10">
      {/* <h1 className="text-[25px]">All models, take your pick.</h1> */}
      <div className="flex gap-6 ">
        {products &&
          products.map((prod, i) => (
            <div
              className="min-h-[200px] min-w-[250px] shadow-lg rounded-3xl  bg-white  "
              key={i}
            >
              <div className="m-6 flex flex-col gap-[77px] ">
                <h2 className="text-[28px] tracking-tighter">
                  <b>{prod.productName}</b>
                </h2>
                <div className="h-auto w-full flex justify-center pb">
                  <Link to={prod.param}>
                    <img
                      className="h-auto w-[231px] "
                      src={prod.productImage}
                    />
                  </Link>
                </div>
                <div className="flex justify-between gap-5 pt-2">
                  <p className="pt-2 text-[12px]">{prod.description}</p>

                  <button
                    onClick={() => handleAddToCart(prod)}
                    className="h-[34px] pl-[14px] pr-[14px] pt-[5px] pb-[5px] hover:bg-[#0077ED] bg-[#0071e3] rounded-[980px] text-[#fafafc]"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Store;

// items-center
