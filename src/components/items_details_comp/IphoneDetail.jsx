import { useParams } from "react-router-dom";
import { useFetchProducts } from "../useFetchProducts";

const IphoneDetail = () => {
  const { products } = useFetchProducts();
  const { param } = useParams();

  const findMyProd = () => {
    // console.log("A");
    const result = products.find((p) => p.param === param);
    return (
      <div className="w-full grid">
        <h2>{result.productName}</h2>
        <p>{result.description}</p>
        <p>{result.price}</p>
      </div>
    );
  };

  return <div className="bg-white"> {products && findMyProd()}</div>;
};

export default IphoneDetail;
