import { useParams } from "react-router-dom";
import { useFetchIpads } from "../useFetchProducts";

const IpadsDetail = () => {
  const { ipadsData } = useFetchIpads();
  const { param } = useParams();

  const findMyProd = () => {
    // console.log("A");
    const result = ipadsData.find((p) => p.param === param);
    return (
      <div className="w-full grid">
        <h2>{result.productName}</h2>
        <p>{result.description}</p>
        <p>{result.price}</p>
      </div>
    );
  };

  return <div className="bg-white"> {ipadsData && findMyProd()}</div>;
};

export default IpadsDetail;
