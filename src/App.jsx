import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#161617] max-w-[2560px] flex flex-col ">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
