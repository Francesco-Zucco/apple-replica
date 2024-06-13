import { useDispatch, useSelector } from "react-redux";
// import { useFetchProducts } from "./useFetchProducts";
// import CartItem from "./CartItem";
import { removeItem } from "../store/cart";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {
  const carts = useSelector((store) => store.cart.items);
  const [totalPrice, setTotalPrice] = useState();
  //   const { products } = useFetchProducts();
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity * item.prod.price));
    setTotalPrice(total);
  }, [carts]);

  const deleteFromCart = (item) => {
    dispatch(removeItem(item));
    // console.log(item);
  };

  return (
    <div className="flex flex-col items-center bg-white w-full">
      {totalPrice ? (
        <div className="flex flex-col w-[1024px] justify-center gap-5 h-[300px] items-center border-b-[1px] border-b-[#d2d2d7]">
          <h1 className="text-[35px] leading-[40px]">
            <b>Your bag total is ${totalPrice}.00.</b>
          </h1>
          <h1 className="text-[17px] ">Free delivery and free returns.</h1>
          <button className="text-[13px] text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] flex justify-center items-center bg-[#0071e3] border w-[290px] h-[36px] mt-6 rounded-[7px]">
            Check Out
          </button>
        </div>
      ) : (
        <div className="flex flex-col w-[1024px] justify-center gap-5 h-[300px] items-center border-b-[1px] border-b-[#d2d2d7]">
          <div className="text-[35px] leading-[40px] text-center flex flex-col items-center">
            <h1>
              <b>Your bag is empty.</b>
            </h1>
            <h1 className="text-[17px] ">
              Sign in to see if you have any saved items. Or continue shopping.
            </h1>
            <div className="flex gap-3">
              <button className="text-[17px] text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] flex justify-center items-center bg-[#0071e3] border w-[360px] h-[56px] mt-6 rounded-[13px]">
                Sign In
              </button>
              <Link to={"/store"}>
                <button className="text-[17px] text-[#0071e3] hover:text-white bg-white border-[#0071e3] hover:bg-[#0071e3] flex justify-center items-center  border w-[360px] h-[56px] mt-6 rounded-[13px]">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {carts &&
        carts.map((item, key) => {
          return (
            <div className="w-full flex justify-center" key={key}>
              <div className="w-[1024px]">
                <div className="flex flex-col w-full h-auto  ">
                  <div className="border-b-[1px] flex items-center justify-between border-gray-300 w-full p-10 ">
                    <div className="flex">
                      <Link to={"/store/" + item.prod.param}>
                        <img
                          className="h-auto w-[200px]"
                          src={item.prod.productImage}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="flex justify-between w-full pb-[35px]">
                      <div>
                        <h2 className="text-[24px] ">
                          <b>{item.prod.productName}</b>

                          <p className="text-[17px]">
                            Quantity: <b>{item.quantity}</b>
                          </p>
                          {/* <p>${item.prod.description}</p> */}
                        </h2>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[24px] text-end">
                          <b>${item.quantity * item.prod.price}.00</b>
                        </p>
                        <button
                          className="text-[19px] text-[#0066cc] text-end"
                          onClick={() => deleteFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {totalPrice ? (
        <div className="w-full flex justify-center">
          <div className="w-[1024px] p-10">
            <div className="flex justify-between mt-[60px] pb-4   border-b-[1px] border-b-[#d2d2d7] ">
              <div className="flex flex-col gap-2 mr-[20px]">
                <p>Subtotal</p>
                <p>Shipping</p>
              </div>
              <div className="place-items-end flex flex-col gap-2">
                <p className="text-end">${totalPrice}.00</p>
                <p className="text-end">FREE</p>
              </div>
            </div>
            <div className="flex justify-between mt-[20px]  ">
              <div>
                <p className=" text-[24px]">
                  <b>Total</b>
                </p>
              </div>
              <div className="place-items-end flex flex-col gap-3">
                <div className="text-end ">
                  <p className="text-[24px]">
                    <b>${totalPrice}.00</b>
                  </p>
                  <p className="text-[#06c]">
                    {" "}
                    Get 3% Daily Cash with Apple Card
                  </p>
                </div>
                <button className="text-[17px] text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] flex justify-center items-center bg-[#0071e3] border w-[360px] h-[56px] mt-6 rounded-[13px]">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
