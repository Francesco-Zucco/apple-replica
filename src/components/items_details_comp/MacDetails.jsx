import { useFetchMac } from "../useFetchProducts";
import { useParams } from "react-router-dom";

const MacDetails = () => {
  const { macData } = useFetchMac();
  const { param } = useParams();

  const findMyProd = () => {
    // console.log("A");
    const result = macData.find((p) => p.param === param);
    return (
      <div className="w-full grid">
        <h2>{result.productName}</h2>
        <p>{result.description}</p>
        <p>{result.price}</p>
      </div>
    );
  };

  return <div className="bg-white"> {macData && findMyProd()}</div>;
};

export default MacDetails;
