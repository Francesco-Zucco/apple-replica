import { useEffect } from "react";
import { useState } from "react";

const Accesories = () => {
  const [button, setButton] = useState(true);

  const navBarButtonAnimation = () => {
    if (button == true) {
      openButton();
      setButton((prev) => !prev);
    } else {
      closeButton();
      setButton((prev) => !prev);
    }
  };

  const openButton = () => {
    // if (button == true) {
    document
      .querySelector("#globalnav-anim-menutrigger-bread-bottom-open")
      .beginElement();
    document
      .querySelector("#globalnav-anim-menutrigger-bread-top-open")
      .beginElement();
    // }
  };

  const closeButton = () => {
    // if (button == false) {
    document
      .querySelector("#globalnav-anim-menutrigger-bread-bottom-close")
      .beginElement();
    document
      .querySelector("#globalnav-anim-menutrigger-bread-top-close")
      .beginElement();
    // }
  };

  useEffect(() => {
    // window.addEventListener("button", navBarButtonAnimation);
  }, [button]);

  return (
    <div className="bg-white">
      <button
        onClick={() => navBarButtonAnimation()}
        id="globalnav-menutrigger-button"
        aria-controls="globalnav-list"
        aria-label="Menu"
        data-topnav-menu-label-open="Menu"
        data-topnav-menu-label-close="Close"
        data-topnav-flyout-trigger-compact="menu"
        className="globalnav-menutrigger-button"
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
  );
};

export default Accesories;
