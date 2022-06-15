import { useContext } from "react";
import { DetailContext } from './../App';
import Product from "./Product";



const Business = () => {
  const details=useContext(DetailContext)

  const { business } = details;
  return (
    <div className="h-[60vh] overflow-y-scroll">
      <h1 className="text-[#01A39D] font-bold text-xl mt-2">
        {business?.userOption}
      </h1>
      <p className="py-4">
        Market Name
        <span className="font-bold ml-4">{business?.marketStdName}</span>
      </p>
      <p className="py-4">
        Firm Name
        <span className="font-bold ml-9">{business?.firmName}</span>
      </p>
      <p className="py-4">
        Shop Number
        <span className="font-bold ml-4">{business?.mandiShopnum}</span>
      </p>
      <p className="bg-slate-100 font-bold p-2">Products</p>
      {details?.products?.map((product, index) => (
        <Product product={product}  key={index}/>
      ))}
    </div>
  );
};

export default Business;