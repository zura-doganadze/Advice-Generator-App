import { useEffect, useState } from "react";

import pauseIcon from "../src/assets/img/icon 1.png";
import batonsIcon from "../src/assets/img/batons icon.png";

function App() {
  const [state, setState] = useState("");
  async function fetchAdvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");

      if (!response.ok) {
        throw new Error("There was error while fetchig data");
      }

      const data = await response.json();

      // console.log(data.slip.id, data.slip.advice);
      setState(data);

      // console.log(state.slip.id);
    } catch (Error) {
      console.log(Error);
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="bg-card-baclground flex flex-col md:max-w-xl max-w-sm w-full rounded-xl relative md:mx-0 mx-64">
        <div className="flex items-center flex-col my-14 mx-10">
          <h1 className="mb-8 text-lg tracking-wider font-bold uppercase text-h1-color 		">
            advice {state !== "" && state.slip.id}
          </h1>
          <p className="text-white text-3xl font-extrabold mb-8 text-center">
            "{state !== "" && state.slip.advice}"
          </p>
          <div className="flex gap-4 items-center">
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
          <button onClick={() => fetchAdvice()}>
            <img src={batonsIcon} alt="img" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
