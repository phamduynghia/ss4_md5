import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import OnwayAndTwowayDataBinding from "./components/OnwayAndTwowayDataBinding";
import DemoUseEffect from "./components/DemoUseEffect";
import DemoUseRef from "./components/DemoUseRef";
import Baitap11 from "./Btvn/baitap11/Baitap11";
import Bai5 from "./Btvn/Bai5";
import Bai7 from "./Btvn/Bai7";
import Bai8 from "./Btvn/Bai8";
import Bai9 from "./Btvn/Bai9";
import Bai10 from "./Btvn/Bai10";
import Bai12 from "./Btvn/baitap12/Bai12";

function App() {
  return (
    <>
      <Bai12 />
      <Baitap11 />
      <Bai5 />
      <Bai7 />
      <Bai8 />
      <Bai9 />
      <Bai10 />
    </>
  );
}

export default App;
