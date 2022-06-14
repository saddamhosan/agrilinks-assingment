
const Product = ({product}) => {
    console.log(product);
    
    return (
      <div className="shadow-md p-2 m-2 rounded-xl">
        <div className="flex items-center space-x-8 ">
          <img
            className="h-[100px] w-[100px]"
            src={`https://gramoday-images-public.s3.ap-south-1.amazonaws.com/commodity/${product.picUrl}`}
            alt=""
          />
          <div className="w-full">
            <h1>
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
                Updated at
                {product?.posts[0]?.updatedAt.split("T")[1].split(".")[0]}
              </p>
            </div>
            <p>
              $ {product?.posts[0]?.priceDetails[0]?.maxPrice} -
              {product?.posts[0]?.priceDetails[0]?.minPrice} /
              {product?.posts[0]?.rawPriceConvFctr}
              {product?.posts[0]?.rawReportPriceUnit}
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-evenly">
          <button>Share</button>
          <button>Interested</button>
        </div>
      </div>
    );
};

export default Product;