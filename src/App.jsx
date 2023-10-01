import { useState } from "react";
import reactLogo from "./assets/img/react.svg";

import pauseIcon from "../src/assets/img/icon 1.png";
import batonsIcon from "../src/assets/img/batons icon.png";

function App() {
  return (
    <div className="flex bg-blue-950 w-full h-full justify-center items-center">
      <div className="bg-card-baclground flex flex-col md:max-w-xl max-w-sm w-full rounded-xl relative md:mx-0 mx-64">
        <div className="flex items-center flex-col my-14 mx-10">
          <h1 className="mb-8 text-lg tracking-wider font-bold uppercase text-h1-color 		">
            advice
          </h1>
          <p className="text-white text-3xl font-extrabold mb-8 text-center">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Assumenda"
          </p>
          <div  className="flex gap-4 items-center">
            <div className="md:w-48 w-32 h-1 bg-line-background"></div>
            <img src={pauseIcon} alt="icon" />
            <div className="md:w-48 w-32 h-1 bg-line-background"></div>
          </div>
        </div>
        <div
          className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 
                    inset-92 w-16 h-16 rounded-full bg-btn-background cursor-pointer 
                    transition-transform hover:scale-105 hover:shadow-custom-shadow"
        >
          <button>
            <img src={batonsIcon} alt="img" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
