import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [responsivePhoto, setResponsivePhoto] = useState();

  const changeBackgroundPhoto = () => {
    if (window.innerWidth > 734) {
      setResponsivePhoto(false);
    } else {
      setResponsivePhoto(true);
    }
  };

  useEffect(() => {
    changeBackgroundPhoto();
    window.addEventListener("resize", changeBackgroundPhoto);
  }, []);

  return (
    <div className="flex flex-col bg-white ">
      {" "}
      {/* <div className="flex justify-center content-center h-[52.50px] ">
        <p className="text-[#333333] flex justify-center text items-center text-[14px] tracking-[-0.022em]">
          Now through June 3, get $200–$650 in credit toward a new iPhone when
          you trade in iPhone 11 or higher.
        </p>
      </div> */}
      <div>
        {/* Iphone 15 Pro responsive MOBILE/DESKTOP */}
        {responsivePhoto ? (
          <div className="relative flex justify-center h-[500px] bg-black">
            <img
              className="z-0 object-cover w-full h-full top-0 left-0 right-0  "
              src="images/home_images/hero_iphone15pro_small.jpg"
              alt=""
            />
            <div className="absolute top-0 w-full  flex justify-center">
              <div className="z-10 flex flex-col items-center pt-10">
                <h2 className="text-white text-[36px] font-medium tracking-[.0002em] ">
                  iPhone 15 Pro
                </h2>

                <p className="text-white   text-[19px] tracking-[.012em] font-extralight mb-7">
                  Titanium. So strong. So light. So Pro.
                </p>
                <div className="  flex gap-4">
                  <button className="text-[14px] text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] bg-[#0071e3] border pr-[15px] pl-[15px] pt-[7px] pb-[7px]  rounded-[980px]">
                    Learn more
                  </button>
                  <Link to={"/store/iphone-15-pro"}>
                    <button className="text-[14px] text-[#0071e3] border border-[#0071e3] hover:bg-[#0071e3] hover:text-[#fafafc] pr-[19px] pl-[19px] rounded-[980px] pt-[7px] pb-[7px] ">
                      Buy
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex justify-center ">
            <img
              className="z-0 object-none h-[580px] top-0 left-0 right-0 "
              src="images/home_images/hero_iphone15pro.jpg"
              alt=""
            />
            <div className="absolute top-0 w-full flex justify-center">
              <div className="z-10 flex flex-col items-center pt-10">
                <h2 className="text-white leading-11 text-[56px] font-medium tracking-tighter ">
                  iPhone 15 Pro
                </h2>

                <p className="text-white leading-7 text-[28px] tracking-tighter font-extralight">
                  Titanium. So strong. So light. So Pro.
                </p>
                <div className="pt-[18px] flex gap-5">
                  <button className="text-[17px] text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] bg-[#0071e3] border pr-[21px] pl-[21px] pt-[3px] pb-[3px] h-11 rounded-[980px]">
                    Learn more
                  </button>
                  <Link to={"/store/iphone-15-pro"}>
                    <button className="text-[17px] text-[#0071e3] border border-[#0071e3] hover:bg-[#0071e3] hover:text-[#fafafc] pl-[25px] pr-[25px] rounded-[980px] pt-[3px] pb-[3px] h-11">
                      Buy
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* iPAD BACKGROUND PHOTO MOBILE/DESKTOP */}
        {responsivePhoto ? (
          <div className="relative flex justify-center h-[550px] pt-3">
            <img
              className="z-0 object-cover w-full h-full top-0 left-0 right-0  "
              src="/images/home_images/hero_ipadpro__bpt7a9d8sh42_small_2x.jpg"
              alt=""
            />
            <div className="absolute top-0 w-full  flex justify-center">
              <div className="z-10 flex flex-col items-center pt-10">
                <h2 className="text-white  text-[36px]  tracking-[.0002em] ">
                  iPad Pro
                </h2>

                <p className="text-white   text-[19px] tracking-[.012em] font-extralight mb-7">
                  Unbelievably thin. Incredibly powerful.
                </p>
                <div className="  flex gap-4">
                  <button className="text-[14px] text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] bg-[#0071e3] border pr-[15px] pl-[15px] pt-[7px] pb-[7px]  rounded-[980px]">
                    Learn more
                  </button>{" "}
                  <Link to={"/store/ipad-pro"}>
                    <button className="text-[14px] text-[#0071e3] border border-[#0071e3] hover:bg-[#0071e3] hover:text-[#fafafc] pr-[19px] pl-[19px] rounded-[980px] pt-[7px] pb-[7px] ">
                      Buy
                    </button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex justify-center pt-3">
            <img
              className="z-0  object-none h-[580px] top-0 left-0 right-0 "
              src="/images/home_images/hero_ipadpro__bpt7a9d8sh42_large.jpg"
              alt=""
            />
            <div className="absolute top-0 w-full flex justify-center">
              <div className="z-10 flex flex-col items-center pt-10">
                <h2 className="text-white leading-11 text-[56px] font-medium tracking-tighter ">
                  iPad Pro
                </h2>

                <p className="text-white leading-7 text-[28px] tracking-tighter font-extralight">
                  Unbelievably thin. Incredibly powerful.
                </p>
                <div className="pt-[18px] flex gap-5">
                  <button className="text-[17px] text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] bg-[#0071e3] border pr-[21px] pl-[21px] pt-[3px] pb-[3px] h-11 rounded-[980px]">
                    Learn more
                  </button>
                  <Link to={"/store/ipad-pro"}>
                    <button className="text-[17px] text-[#0071e3] border border-[#0071e3] hover:bg-[#0071e3] hover:text-[#fafafc] pl-[25px] pr-[25px] rounded-[980px] pt-[3px] pb-[3px] h-11">
                      Buy
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* iPhone 15 BACKGROUND PHOTO MOBILE/DESKTOP */}
        {responsivePhoto ? (
          <div className="relative flex justify-center h-[550px] pt-3">
            <img
              className="z-0 object-none w-full h-full top-0 left-0 right-0  "
              src="images\home_images\hero_iphone15_announce__uuemlcwczn6u_small_2x.jpg"
              alt=""
            />
            <div className="absolute top-0 w-full  flex justify-center">
              <div className="z-10 flex flex-col items-center pt-10">
                <h2 className="text-black  text-[36px]  tracking-[.0002em] ">
                  iPhone 15
                </h2>

                <p className="text-black   text-[19px] tracking-[.012em] font-extralight mb-7">
                  New camera. New design. Newphoria.
                </p>
                <div className="  flex gap-4">
                  <button className="text-[14px] text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] bg-[#0071e3] border pr-[15px] pl-[15px] pt-[7px] pb-[7px]  rounded-[980px]">
                    Learn more
                  </button>
                  <button className="text-[14px] text-[#0071e3] border border-[#0071e3] hover:bg-[#0071e3] hover:text-[#fafafc] pr-[19px] pl-[19px] rounded-[980px] pt-[7px] pb-[7px] ">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex justify-center pt-3">
            <img
              className="z-0 object-none h-[580px] top-0 left-0 right-0"
              src="images\home_images\hero_iphone15_blue.jpg"
              alt=""
            />
            <div className="absolute top-0 w-full flex justify-center">
              <div className="z-10 flex flex-col items-center pt-10">
                <h2 className="leading-11 text-[56px] font-medium tracking-tighter ">
                  iPhone 15
                </h2>

                <p className="leading-7 text-[28px] tracking-tighter font-extralight">
                  New camera. New design. Newphoria.
                </p>
                <div className="pt-[18px] flex gap-5">
                  <button className="text-[17px] text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] bg-[#0071e3] border pr-[21px] pl-[21px] pt-[3px] pb-[3px] h-11 rounded-[980px]">
                    Learn more
                  </button>
                  <button className="text-[17px] text-[#0071e3] border border-[#0071e3] hover:bg-[#0071e3] hover:text-[#fafafc] pl-[25px] pr-[25px] rounded-[980px] pt-[3px] pb-[3px] h-11">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {responsivePhoto ? (
          <div className="grid grid-cols-1  gap-3 pt-3">
            <div className="relative flex justify-center h-[500px]">
              <p className="absolute z-10 text-white text-center bottom-0 pb-[76px]">
                Apple Worldwide Developers Conference. <br /> Join us online
                June 10–14.
              </p>
              <button className="z-10 absolute text-[17px] bottom-0 mb-6 text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] bg-[#0071e3] border pr-[16px] pl-[16px] pt-[3px] pb-[3px] h-9 rounded-[980px]">
                Learn more
              </button>
              <img
                className="z-0 object-cover"
                src="images\home_images\promo_apple_watch_series_9_order__b3u85rm9zf6u_large.jpg"
                alt=""
              />
            </div>
            <div className="relative flex justify-center h-[500px]">
              <h3 className="absolute z-10 text-white text-center bottom-0 pb-[100px] text-[32px] font-semibold">
                College Students
              </h3>
              <p className="absolute z-10 text-white text-center bottom-0 pb-[76px]">
                Mac and iPad. Go further.
              </p>
              <button className="z-10 absolute text-[17px] bottom-0 mb-6 text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] bg-[#0071e3] border pr-[16px] pl-[16px] pt-[3px] pb-[3px] h-9 rounded-[980px]">
                Learn more
              </button>
              <img
                className="object-cover"
                src="images\home_images\promo_college_students.jpg"
                alt=""
              />
            </div>
            <div className="relative flex justify-center h-[500px]">
              <h3 className="absolute z-10  text-center bottom-0 pb-[100px] text-[32px] font-semibold ">
                <svg
                  fill="#000000"
                  height="88"
                  viewBox="0 0 14 44"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                </svg>
                Vision Pro
              </h3>
              <p className="absolute z-10  text-center bottom-0 pb-[76px]">
                Mac and iPad. Go further.
              </p>
              <button className="z-10 absolute text-[17px] bottom-0 mb-6 text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] bg-[#0071e3] border pr-[16px] pl-[16px] pt-[3px] pb-[3px] h-9 rounded-[980px]">
                Learn more
              </button>
              <img
                className="object-cover"
                src="images\home_images\promo_apple_vision_pro.jpg"
                alt=""
              />
            </div>
            <div className="relative flex justify-center h-[500px]">
              <img
                className="object-cover"
                src="images\home_images\promo_iphone_tradein__bugw15ka691e_large.jpg"
                alt=""
              />
            </div>
            <div className="relative flex justify-center h-[500px]">
              <img
                className="object-cover"
                src="images\home_images\promo_wwdc24.jpg"
                alt=""
              />
            </div>
            <div className="relative flex justify-center h-[500px]">
              <img
                className="object-cover"
                src="images\home_images\tile__apple_card_large.jpg"
                alt=""
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 grid-rows-3 gap-3 m-3">
            <div className="relative flex justify-center h-[580px]">
              <p className="absolute z-10 text-white text-center bottom-0 pb-[76px]">
                Apple Worldwide Developers Conference. <br /> Join us online
                June 10–14.
              </p>
              <button className="z-10 absolute text-[17px] bottom-0 mb-6 text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] bg-[#0071e3] border pr-[16px] pl-[16px] pt-[3px] pb-[3px] h-9 rounded-[980px]">
                Learn more
              </button>
              <img
                className="z-0 object-cover"
                src="images\home_images\promo_apple_watch_series_9_order__b3u85rm9zf6u_large.jpg"
                alt=""
              />
            </div>
            <div className="relative flex justify-center">
              <h3 className="absolute z-10 text-white text-center bottom-0 pb-[100px] text-[40px] font-semibold">
                College Students
              </h3>
              <p className="absolute z-10 text-white text-[21px] text-center bottom-0 pb-[76px]">
                Mac and iPad. Go further.
              </p>
              <button className="z-10 absolute text-[17px] bottom-0 mb-6 text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] bg-[#0071e3] border pr-[16px] pl-[16px] pt-[3px] pb-[3px] h-9 rounded-[980px]">
                Learn more
              </button>
              <img
                className="object-cover"
                src="images\home_images\promo_college_students.jpg"
                alt=""
              />
            </div>
            <div className="relative flex justify-center">
              <h3 className="absolute z-10  text-center bottom-0 pb-[100px] text-[32px] font-semibold ">
                <svg
                  fill="#000000"
                  height="88"
                  viewBox="0 0 14 44"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                </svg>
                Vision Pro
              </h3>
              <p className="absolute z-10  text-center bottom-0 pb-[76px]">
                Mac and iPad. Go further.
              </p>
              <button className="z-10 absolute text-[17px] bottom-0 mb-6 text-[#fafafc] border-[#0071e3] hover:bg-[#0077ED] bg-[#0071e3] border pr-[16px] pl-[16px] pt-[3px] pb-[3px] h-9 rounded-[980px]">
                Learn more
              </button>
              <img
                className="object-cover"
                src="images\home_images\promo_apple_vision_pro__f4v4zp0sum2y_large.jpg"
                alt=""
              />
            </div>
            <div className="relative flex justify-center">
              <img
                className="object-cover "
                src="images\home_images\promo_iphone_tradein__bugw15ka691e_large.jpg"
                alt=""
              />
            </div>
            <div className="relative flex justify-center">
              <img
                className="object-cover "
                src="images\home_images\promo_wwdc24.jpg"
                alt=""
              />
            </div>
            <div className="relative flex justify-center">
              <img
                className="object-cover "
                src="images\home_images\tile__apple_card_large.jpg"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
