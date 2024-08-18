import React, { useEffect } from "react";
import BikeRiderSVG from "./BikeRiderSVG";
import MadeLikeGunSVG from "./MadeLikeGunSVG";
import Navigator from "./NavigatorSVG";
import { useState } from "react";
const Loader: React.FC = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    let timer: any;
    if (state < 3) {
      timer = setInterval(() => {
        setState((prev) => (prev < 3 ? prev + 1 : 0));
      }, 500);
    }
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="loader">
      {state === 0 && <BikeRiderSVG height={100} width={100} color={"white"} />}
      {state === 1 && (
        <MadeLikeGunSVG height={100} width={100} color={"white"} />
      )}
      {state === 2 && <Navigator height={100} width={100} color={"white"} />}
    </div>
  );
};

export default Loader;
