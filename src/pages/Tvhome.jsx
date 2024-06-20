import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useFetchProducts } from "../components/useFetchProducts";
import ProductCard from "./ProductCard";

const Tvhome = () => {
  const { products } = useFetchProducts();
  console.log(products);

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };
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
    <div className="bg-[#f5f5f7] flex items-center w-full z-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 172 172"
        style=" fill:#26e07f;"
      >
        <g
          fill="none"
          // fill-rule="nonzero"
          stroke="none"
          // stroke-width="1"
          // stroke-linecap="butt"
          // stroke-linejoin="miter"
          // stroke-miterlimit="10"
          // stroke-dasharray=""
          // stroke-dashoffset="0"
          // font-family="none"
          // font-weight="none"
          // font-size="none"
          // text-anchor="none"
          // style="mix-blend-mode: normal"
        >
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <g fill="#1fb141">
            <path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path>
          </g>
        </g>
      </svg>

      {/* {products && (
        <div className=" w-full flex justify-center pt-8 pb-8"> */}
      {/* <Carousel
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
            itemClass=""
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
                  min: 1532,
                },
                items: 4,
                partialVisibilityGutter: 140,
              },
              // desktop: {
              //   breakpoint: {
              //     max: 3000,
              //     min: 1024,
              //   },
              //   items: 3.9,
              //   partialVisibilityGutter: 140,
              // },
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
                  min: 464,
                },
                items: 1.5,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=" flex w-[2000px]  justify-between "
            slidesToSlide={1}
            swipeable
          >
            {product}
          </Carousel>
        </div>
      // )} */}
    </div>
  );
};

export default Tvhome;
