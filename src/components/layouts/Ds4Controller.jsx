import React, { useEffect, useRef, useState } from "react";

const Ds4Controller = ({ state, handleLogoClick }) => {
  // const [hasAnimationEnded, setHasAnimationEnded] = useState(false);
  // const svgRef = useRef();

  // useEffect(() => {
  //   const pathsArr = svgRef.current.getElementsByTagName("path");

  //   for (let i = 0; i < pathsArr.length; i++) {
  //     const path = pathsArr[i];
  //     const length = path.getTotalLength();

  //     // TODO: There's probably a better way to do this
  //     if (
  //       !path.classList.contains("fade-in-path") &&
  //       !path.classList.contains("no-draw")
  //     ) {
  //       path.style.strokeDasharray = length;
  //       path.style.strokeDashoffset = length;

  //       path.addEventListener("animationend", () => {
  //         path.style.strokeDasharray = 0;
  //         path.style.strokeDashoffset = 0;
  //         path.classList.remove("draw");

  //         if (!hasAnimationEnded) {
  //           setHasAnimationEnded(true);
  //         }
  //       });
  //     }

  //     path.classList.add("draw");
  //   }
  // }, []);

  // // TODO: This should be configurable somewhere maybe
  // const joystickOffsetCoefficient = 4;

  // const { controllerColors } = state;

  // const pressedKey = (key) => state.keys[key].pressed && hasAnimationEnded;

  // const buttonFadeInAnimationEnd = (e) =>
  //   e.currentTarget.classList.add("no-transition");

  return <h1>DS4 CONTROLLER YO</h1>;
};

export default Ds4Controller;
