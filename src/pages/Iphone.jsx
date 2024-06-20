import Carousel from "react-multi-carousel";
import { useFetchProducts } from "../components/useFetchProducts";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const Iphone = () => {
  const [pageWidth, setPageWidth] = useState();
  const { products } = useFetchProducts();
  // console.log(products);

  const handleResize = () => {
    if (window.innerWidth > 834) {
      setPageWidth(false);
    } else {
      setPageWidth(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const product =
    products &&
    products.map((item, i) => (
      <ProductCard
        key={i}
        name={item.productName}
        image={item.productImage}
        param={item.param}
        prod={item}
        description={item.description}
      />
    ));

  return (
    <>
      <div className="bg-[#f5f5f7] flex flex-col items-center w-full">
        {pageWidth ? (
          <div className="w-full flex justify-center">
            <div className="w-[1024px] ml-5">
              <div className="flex flex-col gap-2 justify-between mt-[60px] pb-4    ">
                <div className="flex flex-col gap-2 mr-[20px]">
                  <p className="text-[44px] text-[#1d1d1f] text-nowrap">
                    <b>Shop iPhone</b>
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="place-items-end  flex items-center gap-2">
                    <div className="w-[40px] h-[40px]">
                      {" "}
                      <img
                        className="h-[40px] w-[40px]"
                        src="./images/icons/store-chat-specialist-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <p className=" text-nowrap">
                        <b>Need shopping help?</b>
                      </p>
                      <p className=" text-[#06c] text-nowrap">
                        Ask an iPhone Specialist
                      </p>
                    </div>
                  </div>
                  <div className="place-items-end  flex items-center gap-2">
                    <div className="w-[40px] h-[40px] flex justify-center items-center">
                      <svg
                        width="25"
                        height="35"
                        viewBox="0 0 25 35"
                        aria-hidden="true"
                      >
                        <path d="m0 0h25v35h-25z" fill="none"></path>
                        <path d="m12.4934 4.675a10.5617 10.5617 0 0 1 4.177.8275 10.8868 10.8868 0 0 1 5.7467 5.747 10.4988 10.4988 0 0 1 .8329 4.1777 10.3219 10.3219 0 0 1 -.6421 3.5951 10.8948 10.8948 0 0 1 -1.8669 3.2062 12.8406 12.8406 0 0 1 -2.9537 2.5775c-.984.6179-1.8226 1.1843-2.4931 1.6839a9.5187 9.5187 0 0 0 -1.7742 1.6788 6.8587 6.8587 0 0 0 -1.02 1.8034 6.8213 6.8213 0 0 0 -1.0278-1.8062 9.8247 9.8247 0 0 0 -1.7708-1.6742c-.6644-.4987-1.5014-1.0658-2.485-1.6834a12.5961 12.5961 0 0 1 -2.9617-2.5777 10.99 10.99 0 0 1 -1.8636-3.2083 10.3421 10.3421 0 0 1 -.6411-3.5951 10.5153 10.5153 0 0 1 .8319-4.1772 10.9669 10.9669 0 0 1 2.3209-3.4333 10.85 10.85 0 0 1 3.4278-2.3142 10.52 10.52 0 0 1 4.1628-.8275m0-1a11.4634 11.4634 0 0 0 -4.5561.9081 11.89 11.89 0 0 0 -6.2738 6.2709 11.4566 11.4566 0 0 0 -.9135 4.5732 11.2871 11.2871 0 0 0 .703 3.9416 11.9349 11.9349 0 0 0 2.0323 3.5006 13.5349 13.5349 0 0 0 3.1956 2.7835q1.446.9079 2.42 1.6384a8.7962 8.7962 0 0 1 1.5912 1.5 5.9225 5.9225 0 0 1 .9731 1.81q.25.7236.8285.7238t.8417-.7238a5.9779 5.9779 0 0 1 .967-1.81 8.4991 8.4991 0 0 1 1.59-1.5q.98-.73 2.4268-1.6384a13.7877 13.7877 0 0 0 3.19-2.7835 11.8367 11.8367 0 0 0 2.0373-3.5006 11.263 11.263 0 0 0 .7041-3.9416 11.44 11.44 0 0 0 -.9145-4.5732 11.8867 11.8867 0 0 0 -6.2717-6.2709 11.5044 11.5044 0 0 0 -4.57-.9081zm3.8566 9.71a2.3254 2.3254 0 0 0 -1.078 1.94 2.2152 2.2152 0 0 0 1.353 2.0506 4.7326 4.7326 0 0 1 -.693 1.4443c-.429.6174-.902 1.2458-1.584 1.2458-.693 0-.858-.4079-1.661-.4079-.77 0-1.045.4189-1.672.4189-.638 0-1.078-.5733-1.584-1.29a6.3114 6.3114 0 0 1 -1.056-3.3625 2.7185 2.7185 0 0 1 2.541-3.0208c.682 0 1.232.441 1.65.441.407 0 1.023-.4631 1.782-.4631a2.3483 2.3483 0 0 1 2.002 1.0036zm-3.729-1.1135c-.055 0-.099-.0111-.143-.0111 0-.033-.011-.11-.011-.1874a2.26 2.26 0 0 1 .561-1.3781 2.19 2.19 0 0 1 1.485-.7717 1.0735 1.0735 0 0 1 .011.1984 2.3284 2.3284 0 0 1 -.528 1.4222 1.9664 1.9664 0 0 1 -1.375.7276z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-nowrap ">
                        <b>Visit an Apple store</b>
                      </p>
                      <p className=" text-[#06c] text-nowrap">
                        Find one near you {">"}
                      </p>
                    </div>
                  </div>
                  <div className="place-items-end flex flex-col gap-2">
                    {/* <p className="text-end ">$.00</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-[1490px] ml-10">
              <div className="flex justify-between mt-[60px] pb-4 ">
                <div className="flex flex-col gap-2 mr-[20px]">
                  <p className="text-[48px] text-[#1d1d1f] text-nowrap tracking-tight">
                    <b>Shop iPhone</b>
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="place-items-end  flex items-center gap-2 pr-10">
                    <div className="w-[40px] h-[40px]">
                      {" "}
                      <img
                        className="h-[40px] w-[40px]"
                        src="./images/icons/store-chat-specialist-icon.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className=" text-nowrap">
                        <b>Need shopping help?</b>
                      </p>
                      <p className=" text-[#06c] text-nowrap">
                        Ask an iPhone Specialist
                      </p>
                    </div>
                  </div>
                  <div className="place-items-end  flex items-center gap-2">
                    <div className="w-[40px] h-[40px] flex justify-center items-center">
                      <svg
                        width="25"
                        height="35"
                        viewBox="0 0 25 35"
                        aria-hidden="true"
                      >
                        <path d="m0 0h25v35h-25z" fill="none"></path>
                        <path d="m12.4934 4.675a10.5617 10.5617 0 0 1 4.177.8275 10.8868 10.8868 0 0 1 5.7467 5.747 10.4988 10.4988 0 0 1 .8329 4.1777 10.3219 10.3219 0 0 1 -.6421 3.5951 10.8948 10.8948 0 0 1 -1.8669 3.2062 12.8406 12.8406 0 0 1 -2.9537 2.5775c-.984.6179-1.8226 1.1843-2.4931 1.6839a9.5187 9.5187 0 0 0 -1.7742 1.6788 6.8587 6.8587 0 0 0 -1.02 1.8034 6.8213 6.8213 0 0 0 -1.0278-1.8062 9.8247 9.8247 0 0 0 -1.7708-1.6742c-.6644-.4987-1.5014-1.0658-2.485-1.6834a12.5961 12.5961 0 0 1 -2.9617-2.5777 10.99 10.99 0 0 1 -1.8636-3.2083 10.3421 10.3421 0 0 1 -.6411-3.5951 10.5153 10.5153 0 0 1 .8319-4.1772 10.9669 10.9669 0 0 1 2.3209-3.4333 10.85 10.85 0 0 1 3.4278-2.3142 10.52 10.52 0 0 1 4.1628-.8275m0-1a11.4634 11.4634 0 0 0 -4.5561.9081 11.89 11.89 0 0 0 -6.2738 6.2709 11.4566 11.4566 0 0 0 -.9135 4.5732 11.2871 11.2871 0 0 0 .703 3.9416 11.9349 11.9349 0 0 0 2.0323 3.5006 13.5349 13.5349 0 0 0 3.1956 2.7835q1.446.9079 2.42 1.6384a8.7962 8.7962 0 0 1 1.5912 1.5 5.9225 5.9225 0 0 1 .9731 1.81q.25.7236.8285.7238t.8417-.7238a5.9779 5.9779 0 0 1 .967-1.81 8.4991 8.4991 0 0 1 1.59-1.5q.98-.73 2.4268-1.6384a13.7877 13.7877 0 0 0 3.19-2.7835 11.8367 11.8367 0 0 0 2.0373-3.5006 11.263 11.263 0 0 0 .7041-3.9416 11.44 11.44 0 0 0 -.9145-4.5732 11.8867 11.8867 0 0 0 -6.2717-6.2709 11.5044 11.5044 0 0 0 -4.57-.9081zm3.8566 9.71a2.3254 2.3254 0 0 0 -1.078 1.94 2.2152 2.2152 0 0 0 1.353 2.0506 4.7326 4.7326 0 0 1 -.693 1.4443c-.429.6174-.902 1.2458-1.584 1.2458-.693 0-.858-.4079-1.661-.4079-.77 0-1.045.4189-1.672.4189-.638 0-1.078-.5733-1.584-1.29a6.3114 6.3114 0 0 1 -1.056-3.3625 2.7185 2.7185 0 0 1 2.541-3.0208c.682 0 1.232.441 1.65.441.407 0 1.023-.4631 1.782-.4631a2.3483 2.3483 0 0 1 2.002 1.0036zm-3.729-1.1135c-.055 0-.099-.0111-.143-.0111 0-.033-.011-.11-.011-.1874a2.26 2.26 0 0 1 .561-1.3781 2.19 2.19 0 0 1 1.485-.7717 1.0735 1.0735 0 0 1 .011.1984 2.3284 2.3284 0 0 1 -.528 1.4222 1.9664 1.9664 0 0 1 -1.375.7276z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-nowrap ">
                        <b>Visit an apple store</b>
                      </p>
                      <p className=" text-[#06c] text-nowrap">
                        Find one near you {">"}
                      </p>
                    </div>
                  </div>
                  <div className="place-items-end flex flex-col gap-2">
                    {/* <p className="text-end ">$.00</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {pageWidth ? (
          <div className="w-full flex justify-center">
            <div className="w-[1490px] ml-5">
              <div className="flex justify-between mt-[60px] pb-4    ">
                <div className="flex flex-col gap-2 mr-[20px]">
                  <p className="text-[27px] text-nowrap">
                    <b>All models.</b>
                    <b className="text-[#6e6e73]"> take your pick.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-[1490px] ml-10">
              <div className="flex justify-between mt-[60px] pb-4    ">
                <div className="flex flex-col gap-2 mr-[20px]">
                  <p className="text-[27px] text-nowrap">
                    <b>All models.</b>
                    <b className="text-[#6e6e73]"> take your pick.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {products && (
          <div className=" w-full flex  justify-center  pt-8 pb-8">
            <Carousel
              // partialVisible={true}
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container "
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass="m-0"
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                superLargeDesktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1534,
                  },
                  items: 4,
                  partialVisibilityGutter: 140,
                },
                bigDesktop: {
                  breakpoint: {
                    max: 1534,
                    min: 1279,
                  },
                  items: 3.2,
                  partialVisibilityGutter: 140,
                },
                desktop: {
                  breakpoint: {
                    max: 1279,
                    min: 1024,
                  },
                  items: 2.8,
                  partialVisibilityGutter: 140,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1.2,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 615,
                  },
                  items: 2.1,
                  partialVisibilityGutter: 30,
                },
                smallTablet: {
                  breakpoint: {
                    max: 615,
                    min: 464,
                  },
                  items: 1.5,
                  partialVisibilityGutter: 150,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=" flex m-0 bg-transparent z-[3]  justify-between "
              slidesToSlide={1}
              swipeable
            >
              {product}
            </Carousel>
          </div>
        )}
      </div>
    </>
  );
};

export default Iphone;
