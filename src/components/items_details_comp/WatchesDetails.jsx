import { useParams } from "react-router-dom";
import { useFetchWatches } from "../useFetchProducts";

const WatchesDetails = () => {
  const { watchesData } = useFetchWatches();
  const { param } = useParams();

  const findMyProd = () => {
    // console.log("A");
    const result = watchesData.find((p) => p.param === param);
    return (
      <div className="w-full grid">
        <h2>{result.productName}</h2>
        <p>{result.description}</p>
        <p>{result.price}</p>
      </div>
    );
  };

  return <div className="bg-white"> {watchesData && findMyProd()}</div>;
};

export default WatchesDetails;
