import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [collapse, setCollapse] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const [button, setButton] = useState(true);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  // const links = ["Store"];
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  //to change the website appearance from desktop to mobile
  const handleResize = () => {
    if (window.innerWidth > 834) {
      setCollapse(false);
      setShowNavBar(false);
    } else {
      setCollapse(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  // Burger animation classes for opening and closing
  const openButton = () => {
    document
      .querySelector("#globalnav-anim-menutrigger-bread-bottom-open")
      .beginElement();
    document
      .querySelector("#globalnav-anim-menutrigger-bread-top-open")
      .beginElement();
  };

  const closeButton = () => {
    document
      .querySelector("#globalnav-anim-menutrigger-bread-bottom-close")
      .beginElement();
    document
      .querySelector("#globalnav-anim-menutrigger-bread-top-close")
      .beginElement();
  };

  // Burger function to switch state for classes to work
  const navBarButtonAnimation = () => {
    if (button == true) {
      openButton();
      setButton(false);
    } else {
      closeButton();
      setButton(true);
    }
  };

  return (
    <nav className="bg-[#161617cc] flex justify-center sticky top-0 z-[8999] backdrop-blur-[20px] w-full saturate-[180%]">
      {/* Navbar when on DESKTOP  */}
      {collapse ? (
        ""
      ) : (
        <div className="flex justify-between h-[44px] w-full max-w-[1024px]  font-sf-pro-regular ml-[-8px] mr-[-8px] pl-[8px] pr-[8px]">
          <Link to={"/"} className="flex items-center ps-[8px] pe-[8px]">
            <svg
              fill="#cecece"
              className="hover:fill-[#F9F9F9] "
              height="44"
              viewBox="0 0 14 44"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
            </svg>
          </Link>
          <Link
            to={"/store"}
            className=" text-[#cecece]  hover:text-[#F9F9F9] focus:text-[#F9F9F9] flex items-center text-xs pl-[8px] pr-[8px] tracking-[-.01em] "
          >
            Store
          </Link>
          <Link
            to={"/mac"}
            className="text-[#cecece] hover:text-[#F9F9F9] focus:text-[#F9F9F9] flex items-center text-xs pl-[8px] pr-[8px] tracking-[-.01em] "
          >
            Mac
          </Link>
          <Link
            to={"/ipads"}
            className="text-[#cecece] hover:text-[#F9F9F9] focus:text-[#F9F9F9] flex items-center text-xs pl-[8px] pr-[8px] tracking-[-.01em] "
          >
            iPad
          </Link>
          <Link
            to={"/iphones"}
            className="text-[#cecece] hover:text-[#F9F9F9] focus:text-[#F9F9F9] flex items-center text-xs pl-[8px] pr-[8px] tracking-[-.01em] "
          >
            iPhone
          </Link>
          <Link
            to={"/watches"}
            className="text-[#cecece] hover:text-[#F9F9F9] focus:text-[#F9F9F9] flex items-center text-xs pl-[8px] pr-[8px] tracking-[-.01em] "
          >
            Watch
          </Link>
          <Link
            to={"/vision"}
            className="text-[#cecece] hover:text-[#F9F9F9] focus:text-[#F9F9F9] flex items-center text-xs pl-[8px] pr-[8px] tracking-[-.01em] "
          >
            Vision
          </Link>
          <Link
            to={"/airpods"}
            className="text-[#cecece] hover:text-[#F9F9F9] focus:text-[#F9F9F9] flex items-center text-xs pl-[8px] pr-[8px] tracking-[-.01em] "
          >
            AirPods
          </Link>
          <Link
            to={"/tv-home"}
            className="text-[#cecece] w-[16,939px] hover:text-[#F9F9F9] focus:text-[#F9F9F9] flex items-center text-xs pl-[8px] pr-[8px] tracking-[-.01em] text-nowrap"
          >
            TV & Home
          </Link>
          <Link
            to={"/entertainment"}
            className="text-[#cecece] hover:text-[#F9F9F9] focus:text-[#F9F9F9] flex items-center text-xs pl-[8px] pr-[8px] tracking-[-.01em] "
          >
            Entertainment
          </Link>
          <Link
            to={"/accesories"}
            className="text-[#cecece] hover:text-[#F9F9F9] focus:text-[#F9F9F9] flex items-center text-xs pl-[8px] pr-[8px] tracking-[-.01em] "
          >
            Accesories
          </Link>
          <Link
            to={"/support"}
            className="text-[#cecece] hover:text-[#F9F9F9] focus:text-[#F9F9F9] flex items-center text-xs pl-[8px] pr-[8px] tracking-[-.01em] "
          >
            Support
          </Link>
          <Link to={"#"} className="flex items-center ps-[8px] pe-[8px]">
            <svg
              fill="#cecece"
              className="hover:fill-[#F9F9F9]"
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="44px"
              viewBox="0 0 15 44"
            >
              <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
            </svg>
          </Link>
          <Link to={"/cart"} className="flex items-center ps-[8px] pe-[8px]">
            {totalQuantity ? (
              <div className="pr-[1px]">
                <svg
                  fill="#cecece"
                  className="hover:fill-[#F9F9F9] absolute  top-0"
                  height="45"
                  viewBox="0 0 17 48"
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"></path>
                </svg>
                <span
                  className="relative bottom-[-6px] left-[6px] bg-[#FFFFFF] text-[#000000] text-[11px]
            w-[14px] h-[14px] rounded-full flex justify-center items-center z-[9999]"
                >
                  <p className="pt-[1px] pb-[1px] pl-[1px] pr-[1px]">
                    {totalQuantity}
                  </p>
                </span>
              </div>
            ) : (
              <div className="pr-[1">
                <svg
                  fill="#cecece"
                  className="hover:fill-[#F9F9F9] "
                  height="45"
                  viewBox="0 0 17 48"
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"></path>
                </svg>
              </div>
            )}
          </Link>
        </div>
      )}
      {/* Navbar when on mobile */}
      {collapse ? (
        <div className="flex justify-between h-[48px] w-full max-w-[1024px]  font-sf-pro-regular ml-[-8px] mr-[-8px] pl-[8px] pr-[8px]">
          {/* SVG APPLE RESPONSIVE */}
          <Link to={"/"} className="flex items-center ps-[8px] pe-[8px]">
            <svg
              fill="#cecece"
              className="hover:fill-[#F9F9F9] "
              height="50"
              viewBox="0 0 14 44"
              width="19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
            </svg>
          </Link>
          {/* SVG search bar */}
          <div className="flex justify-between gap-2">
            <Link to={"/"} className="flex items-center ps-[8px] pe-[8px]">
              <svg
                fill="#cecece"
                className="hover:fill-[#F9F9F9]"
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="48px"
                viewBox="0 0 15 44"
              >
                <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
              </svg>
            </Link>
            {/* SVG cart */}
            <Link to={"/cart"} className="flex items-center ps-[8px] pe-[8px]">
              {totalQuantity ? (
                <div className="pr-[3px]">
                  <svg
                    fill="#cecece"
                    className="hover:fill-[#F9F9F9] absolute  top-0"
                    height="48"
                    viewBox="0 0 17 48"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"></path>
                  </svg>
                  <span
                    className="relative bottom-[-6px] left-[8px] bg-[#FFFFFF] text-[#000000] text-[11px]
            w-[14px] h-[14px] rounded-full flex justify-center items-center z-[9400]"
                  >
                    <p className="pt-[1px] pb-[1px] pl-[1px] pr-[1px]">
                      {totalQuantity}
                    </p>
                  </span>
                </div>
              ) : (
                <div className="pr-[1">
                  <svg
                    fill="#cecece"
                    className="hover:fill-[#F9F9F9] "
                    height="48"
                    viewBox="0 0 17 48"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"></path>
                  </svg>
                </div>
              )}
            </Link>
            <div className="flex items-center ps-[8px] pe-[8px] z-[9500]">
              {/*SVG Burger button */}
              <button
                className="hover:fill-[#F9F9F9] text-[#cecece] z-[40]"
                onClick={() => (
                  setShowNavBar((prev) => !prev), navBarButtonAnimation()
                )}
              >
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <polyline
                    id="globalnav-menutrigger-bread-bottom"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="2 12, 16 12"
                    className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
                  >
                    <animate
                      id="globalnav-anim-menutrigger-bread-bottom-open"
                      attributeName="points"
                      keyTimes="0;0.5;1"
                      dur="0.24s"
                      begin="indefinite"
                      fill="freeze"
                      calcMode="spline"
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                      values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                    ></animate>
                    <animate
                      id="globalnav-anim-menutrigger-bread-bottom-close"
                      attributeName="points"
                      keyTimes="0;0.5;1"
                      dur="0.24s"
                      begin="indefinite"
                      fill="freeze"
                      calcMode="spline"
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                      values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
                    ></animate>
                  </polyline>
                  <polyline
                    id="globalnav-menutrigger-bread-top"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="2 5, 16 5"
                    className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
                  >
                    <animate
                      id="globalnav-anim-menutrigger-bread-top-open"
                      attributeName="points"
                      keyTimes="0;0.5;1"
                      dur="0.24s"
                      begin="indefinite"
                      fill="freeze"
                      calcMode="spline"
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                      values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                    ></animate>
                    <animate
                      id="globalnav-anim-menutrigger-bread-top-close"
                      attributeName="points"
                      keyTimes="0;0.5;1"
                      dur="0.24s"
                      begin="indefinite"
                      fill="freeze"
                      calcMode="spline"
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                      values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
                    ></animate>
                  </polyline>
                </svg>
              </button>
            </div>
          </div>
          {showNavBar ? (
            // dropdown menu links
            <div className="w-full h-[100vh] flex justify-around absolute left-0 right-0 bg-[#161617] z-[9499] ">
              <div className="w-full h-full  bg-[#161617]  p-12 ">
                {/* {links.map((link, i) => (
                  <Link
                    onClick={() => {
                      setShowNavBar(false);
                      navBarButtonAnimation();
                    }}
                    key={i}
                    className="text-[#E8E8ED] block mb-1 text-[28px] "
                    to={`/${link}`}
                  >
                    {link}
                  </Link>
                ))} */}
                <Link
                  onClick={() => {
                    setShowNavBar(false);
                    navBarButtonAnimation();
                  }}
                  className="text-[#E8E8ED] block mb-1 text-[28px] "
                  to="/store"
                >
                  Store
                </Link>
                <Link
                  onClick={() => {
                    setShowNavBar(false);
                    navBarButtonAnimation();
                  }}
                  className="text-[#E8E8ED] block mb-1 text-[28px]"
                  to="/mac"
                >
                  Mac
                </Link>
                <Link
                  onClick={() => {
                    setShowNavBar(false);
                    navBarButtonAnimation();
                  }}
                  className="text-[#E8E8ED] block mb-1 text-[28px]"
                  to="/ipads"
                >
                  iPad
                </Link>
                <Link
                  onClick={() => {
                    setShowNavBar(false);
                    navBarButtonAnimation();
                  }}
                  className="text-[#E8E8ED] block mb-1 text-[28px]"
                  to="/iphones"
                >
                  iPhone
                </Link>
                <Link
                  onClick={() => {
                    setShowNavBar(false);
                    navBarButtonAnimation();
                  }}
                  className="text-[#E8E8ED] block mb-1 text-[28px]"
                  to="/watches"
                >
                  Watch
                </Link>
                <Link
                  onClick={() => {
                    setShowNavBar(false);
                    navBarButtonAnimation();
                  }}
                  className="text-[#E8E8ED] block mb-1 text-[28px]"
                  to="/vision"
                >
                  Vision
                </Link>
                <Link
                  onClick={() => {
                    setShowNavBar(false);
                    navBarButtonAnimation();
                  }}
                  className="text-[#E8E8ED] block mb-1 text-[28px]"
                  to="/airpods"
                >
                  AirPods
                </Link>
                <Link
                  onClick={() => {
                    setShowNavBar(false);
                    navBarButtonAnimation();
                  }}
                  className="text-[#E8E8ED] block mb-1 text-[28px]"
                  to="/tv-home"
                >
                  TV & Home
                </Link>
                <Link
                  onClick={() => {
                    setShowNavBar(false);
                    navBarButtonAnimation();
                  }}
                  className="text-[#E8E8ED] block mb-1 text-[28px]"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
                <Link
                  onClick={() => {
                    setShowNavBar(false);
                    navBarButtonAnimation();
                  }}
                  className="text-[#E8E8ED] block mb-1 text-[28px]"
                  to="/accesories"
                >
                  Accesories
                </Link>
                <Link
                  onClick={() => {
                    setShowNavBar(false);
                    navBarButtonAnimation();
                  }}
                  className="text-[#E8E8ED] block mb-1 text-[28px]"
                  to="/support"
                >
                  Support
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default NavBar;

// conditional rendering
