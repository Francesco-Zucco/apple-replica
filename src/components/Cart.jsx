import { useSelector } from "react-redux";
// import { useFetchProducts } from "./useFetchProducts";
// import CartItem from "./CartItem";

const Cart = () => {
  const carts = useSelector((store) => store.cart.items);
  //   const { products } = useFetchProducts();

  console.log(carts);
  return (
    <div className="bg-white flex flex-col">
      {carts.map((item, key) => {
        return (
          <div key={key}>
            {item.prod.productName} <span>H</span>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
