import { Link } from "react-router-dom";
import { addToCart } from "../store/cart";
import { useDispatch } from "react-redux";

const ProductCard = (prop) => {
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
  return (
    <div className="max-h-[500px] max-w-[370px] shadow-lg rounded-3xl  bg-white m-4 ">
      <div className=" p-6 flex flex-col gap-[77px] ">
        <h2 className="text-[25px] tracking-tighter text-nowrap">
          <b>{prop.name}</b>
        </h2>
        <div className="h-auto w-full flex justify-center pb">
          <Link to={prop.param}>
            <img className="h-[200px] w-auto " src={prop.image} />
          </Link>
        </div>
        <div className="flex justify-between gap-5 pt-2">
          <p className="pt-2 text-[11px]">{prop.description}</p>

          <button
            onClick={() => handleAddToCart(prop.prod)}
            className="h-[34px] pl-[14px] pr-[14px] pt-[5px] pb-[5px] hover:bg-[#0077ED] bg-[#0071e3] rounded-[980px] text-[#fafafc]"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
