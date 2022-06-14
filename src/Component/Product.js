import { IoLogoWhatsapp, IoMdSend } from "react-icons/io";

const Product = ({product}) => {
    console.log(product);
    
    return (
      <div className="shadow-md p-2 m-2 rounded-xl">
        <div className="flex items-center space-x-8 ">
          <img
            className="h-[100px] w-[100px] border border-black"
            src={`https://gramoday-images-public.s3.ap-south-1.amazonaws.com/commodity/${product.picUrl}`}
            alt=""
          />
          <div className="w-full">
            <h1 className="text-[20px] font-semibold">
              {product.cmdtyStdName} {product?.posts[0]?.marketType}
            </h1>
            <p>
              {product?.posts[0]?.marketStdName},
              {product?.posts[0]?.loclevel3Name},
              {product?.posts[0]?.loclevel2ShortName}
            </p>
            <div className="flex justify-between">
              <p>{product?.posts[0]?.updatedAt.split("T")[0]}</p>
              <p>
                <i>
                  Updated at
                  {product?.posts[0]?.updatedAt.split("T")[1].split(".")[0]}
                </i>
              </p>
            </div>
            <p className="my-2">
              $ {product?.posts[0]?.priceDetails[0]?.maxPrice} -
              {product?.posts[0]?.priceDetails[0]?.minPrice} /
              {product?.posts[0]?.rawPriceConvFctr}
              {product?.posts[0]?.rawReportPriceUnit}
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-evenly mt-2">
          <button className="btn btn-xs rounded-full bg-[#01A39D] hover:bg-[#017c78] border-0 ">
            <span className="mr-2">
              <IoLogoWhatsapp />
            </span>{" "}
            Share
          </button>
          <button className="btn btn-xs rounded-full bg-[#D2AA1B] hover:bg-[#017c78] border-0 ">
            <span className="p-1 bg-white text-[#D2AA1B] rounded-full mr-2">
              <IoMdSend />
            </span>{" "}
            Interested
          </button>
        </div>
      </div>
    );
};

export default Product;