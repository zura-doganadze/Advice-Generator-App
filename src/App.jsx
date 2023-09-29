import { useState } from "react";
import reactLogo from "./assets/img/react.svg";

import pauseIcon from "../src/assets/img/icon 1.png";
import batonsIcon from "../src/assets/img/batons icon.png";

function App() {
  return (
    <div className="flex bg-blue-950 w-full h-full justify-center items-center">
      <div className="bg-card-baclground flex flex-col max-w-xl w-full rounded-xl relative">
        <div className="flex items-center flex-col my-10 mx-10">
          <h1 className="mb-8 text-lg tracking-wider font-bold uppercase text-h1-color 		">
            advice
          </h1>
          <p className="text-white text-3xl font-extrabold mb-8 text-center">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Assumenda"
          </p>
          <div className="flex gap-4 items-center">
            <div className="w-48 h-1 bg-line-background"></div>
            <img src={pauseIcon} alt="icon" />
            <div className="w-48 h-1 bg-line-background"></div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute left-2/4 w-16 h-16 rounded-full bg-btn-background">
          <button>
            <img src={batonsIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
