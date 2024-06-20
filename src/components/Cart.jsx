import { useDispatch, useSelector } from "react-redux";
// import { useFetchProducts } from "./useFetchProducts";
// import CartItem from "./CartItem";
import {
  clearCart,
  removeItem,
  changeQuantity,
  add,
  subtract,
} from "../store/cart";
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
    console.log(carts);
  }, [carts]);

  const deleteFromCart = (item) => {
    dispatch(removeItem(item));
    // console.log(item);
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  const incrementQuantity = (prod) => {
    dispatch(
      add({
        productId: prod.id,
      })
    );
  };

  const decrementQuantity = (prod) => {
    dispatch(
      subtract({
        productId: prod.id,
      })
    );
  };

  return (
    <div className="flex flex-col items-center bg-white w-full">
      {totalPrice ? (
        <div className="flex flex-col w-[1024px] justify-center gap-5 h-[300px] items-center border-b-[1px] border-b-[#d2d2d7]">
          <h1 className="text-[35px] text-center leading-[40px]">
            <b>Your bag total is ${totalPrice}.00.</b>
          </h1>
          <h1 className="text-[17px] ">Free delivery and free returns.</h1>
          <button className="text-[13px] text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] flex justify-center items-center bg-[#0071e3] border w-[290px] h-[36px] mt-6 rounded-[7px]">
            Check Out
          </button>
        </div>
      ) : (
        <div className="flex flex-col w-full justify-center gap-5 h-[300px] items-center border-b-[1px] border-b-[#d2d2d7]">
          <div className="text-[35px] w-auto leading-[40px] text-center flex flex-col items-center">
            <h1>
              <b>Your bag is empty.</b>
            </h1>
            <h1 className="text-[17px] ">
              You can continue shopping by pressing the button bellow.
            </h1>
            <div className="flex gap-3">
              {/* <button className="text-[17px] text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] flex justify-center items-center bg-[#0071e3] border w-[360px] h-[56px] mt-6 rounded-[13px]">
                Sign In
              </button> */}
              <Link to={"/store"}>
                <button className="text-[17px] text-[#0071e3] hover:text-white bg-white border-[#0071e3] hover:bg-[#0071e3] flex justify-center items-center  border w-[260px] h-[56px] mt-6 rounded-[13px]">
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
            <div
              className={
                item.quantity >= 1 ? "w-full flex justify-center" : "hidden"
              }
              key={key}
            >
              <div className="w-[1024px]">
                <div className="flex flex-col w-full h-auto  ">
                  <div className="border-b-[1px] pt-2 pb-5 flex items-center justify-between border-gray-300 w-full pl- pr-5">
                    <div className="flex w-auto h-auto">
                      <Link to={"/store/" + item.prod.param}>
                        <img
                          className="h-auto w-[150px] object-cover"
                          src={item.prod.productImage}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="flex justify-between w-full pl-4 pb-[35px]">
                      <div>
                        <h2 className=" lg:text-[24px] md:text-[21px] sm:text-[18px] ">
                          <b>{item.prod.productName}</b>
                          <p className="lg:text-[17px] md:text-[15px] sm:text-[14px]">
                            Quantity: <b>{item.quantity}</b>
                          </p>
                          {/* <p>${item.prod.description}</p> */}
                          <button
                            // clear cart button
                            onClick={() => clearCartItems()}
                          >
                            O
                          </button>

                          <div>
                            <button
                              onClick={() => incrementQuantity(item.prod)}
                            >
                              +
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => decrementQuantity(item.prod)}
                            >
                              -
                            </button>
                          </div>
                        </h2>
                      </div>
                      <div className="flex flex-col">
                        <p className="lg:text-[24px] md:text-[21px] sm:text-[18px] text-end">
                          <b>${item.quantity * item.prod.price}.00</b>
                        </p>
                        <button
                          className="lg:text-[19px] md:text-[18px] sm:text-[17px] text-[#0066cc] text-end"
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
          <div className="w-[1024px] m-10">
            <div className="flex justify-between mt-[60px] pb-4   border-b-[1px] border-b-[#d2d2d7] ">
              <div className="flex flex-col gap-2 mr-[20px]">
                <p className="pl-2">Subtotal</p>
                <p className="pl-2">Shipping</p>
              </div>
              <div className="place-items-end flex flex-col gap-2">
                <p className="text-end pr-2">${totalPrice}.00</p>
                <p className="text-end pr-2">FREE</p>
              </div>
            </div>
            <div className="flex justify-between mt-[20px]  ">
              <div>
                <p className=" text-[24px]">
                  <b className="pl-2">Total</b>
                </p>
              </div>
              <div className="place-items-end flex flex-col gap-3">
                <div className="text-end ">
                  <p className="text-[24px] pr-2">
                    <b>${totalPrice}.00</b>
                  </p>
                  <p className="text-[#06c] pr-2">
                    {" "}
                    Get 3% Daily Cash with Apple Card
                  </p>
                </div>
                <button className="text-[17px] text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] flex justify-center items-center bg-[#0071e3] border w-[330px] h-[56px] mt-6 rounded-[13px]">
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
