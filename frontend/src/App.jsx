import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainInfos from "./main-infos.jsx";
import NekoVideo from "./assets/855282-hd_1280_720_25fps.webm";

function App() {
  return (
    <>
      <MainInfos />
      <video
        className="relative -z-10 w-auto min-w-full min-h-full max-w-none"
        autoPlay
        loop
        muted
      >
        <source src={NekoVideo} type="video/webm" />
      </video>
    </>
  );
}

export default App;
