import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Airpods from "./pages/Airpods.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Vision from "./pages/Vision.jsx";
import Tvhome from "./pages/Tvhome.jsx";
import Watch from "./pages/Watch.jsx";
import Ipad from "./pages/Ipad.jsx";
import Accesories from "./pages/Accesories.jsx";
import Support from "./pages/Support.jsx";
import Store from "./pages/Store.jsx";
import Mac from "./pages/Mac.jsx";
import Iphone from "./pages/Iphone.jsx";
import Entertainment from "./pages/Entertainment.jsx";
import Cart from "./components/Cart.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import IphoneDetail from "./components/items_details_comp/IphoneDetail.jsx";
import IpadsDetail from "./components/items_details_comp/IpadsDetails.jsx";
import WatchesDetails from "./components/items_details_comp/WatchesDetails.jsx";
import MacDetails from "./components/items_details_comp/MacDetails.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/airpods" element={<Airpods />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/tv-home" element={<Tvhome />} />
      <Route path="/watches" element={<Watch />} />
      <Route path="/ipads" element={<Ipad />} />
      <Route path="/accesories" element={<Accesories />} />
      <Route path="/support" element={<Support />} />
      <Route path="/store" element={<Store />} />
      <Route path="/mac" element={<Mac />} />
      <Route path="/iphones" element={<Iphone />} />
      <Route path="/entertainment" element={<Entertainment />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/store/:param" element={<IphoneDetail />} /> */}
      <Route path="/watches/:param" element={<WatchesDetails />} />
      <Route path="/ipads/:param" element={<IpadsDetail />} />
      <Route path="/iphones/:param" element={<IphoneDetail />} />
      <Route path="/mac/:param" element={<MacDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
