import React, { useEffect, useRef, useState } from "react";

const Ds4Controller = ({ state, handleLogoClick }) => {
  const [hasAnimationEnded, setHasAnimationEnded] = useState(false);
  const svgRef = useRef();

  useEffect(() => {
    const pathsArr = svgRef.current.getElementsByTagName("path");

    for (let i = 0; i < pathsArr.length; i++) {
      const path = pathsArr[i];
      const length = path.getTotalLength();

      // TODO: There's probably a better way to do this
      if (
        !path.classList.contains("fade-in-path") &&
        !path.classList.contains("no-draw")
      ) {
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        path.addEventListener("animationend", () => {
          path.style.strokeDasharray = 0;
          path.style.strokeDashoffset = 0;
          path.classList.remove("draw");

          if (!hasAnimationEnded) {
            setHasAnimationEnded(true);
          }
        });
      }

      path.classList.add("draw");
    }
  }, []);

  // TODO: This should be configurable somewhere maybe
  const joystickOffsetCoefficient = 4;

  const { controllerColors } = state;

  const pressedKey = (key) => state.keys[key].pressed && hasAnimationEnded;

  const buttonFadeInAnimationEnd = (e) =>
    e.currentTarget.classList.add("no-transition");

  // TODO: This probably needs a rework
  return (
    <svg
      width="600"
      height="420"
      viewBox="0 0 199.2 139.44"
      ref={svgRef}
      style={{
        stroke: controllerColors.stroke,
        strokeWidth: 0.25,
        strokeLinecap: "round",
        fill: "none",
      }}
    >
      <g transform="translate(-7.9936294,-75.565749)">
        <g id="body">
          <path
            d="m 18.432189,213.7159 c -3.889137,-1.59909 -6.314147,-4.38492 -8.090608,-9.29441 -1.5135078,-4.18278 -1.9073179,-6.76762 -2.0640282,-13.54758 -0.1869755,-8.08936 0.3410082,-12.9303 2.9786782,-27.31066 2.103905,-11.47032 7.382493,-29.66626 11.820243,-40.74583 4.281143,-10.68858 5.603362,-13.12222 12.277529,-22.5826 2.449187,-3.471635 3.011278,-4.152745 4.594594,-5.095755 2.382693,-1.419113 5.438429,-2.160706 10.374673,-2.007286 6.236089,0.193819 8.035893,0.398246 11.004586,1.377184 1.59299,0.525294 2.73968,0.795081 3.934824,1.039216 0.952818,0.194636 1.979989,0.200732 3.528985,0.01959 1.236927,-0.144651 3.290755,-0.263905 4.564062,-0.26501 1.969296,-0.0017 2.394696,0.07758 2.847956,0.530844 0.514287,0.514288 0.557665,0.516592 1.245127,0.06615 0.66921,-0.438487 2.471314,-0.46767 29.80446,-0.482653 27.1322,-0.01487 29.15298,0.01505 29.99459,0.44413 0.86829,0.442681 0.92171,0.440782 1.41269,-0.0502 0.4266,-0.426596 0.88993,-0.509946 2.82538,-0.508268 1.27331,0.0011 3.32714,0.120359 4.56407,0.26501 1.54899,0.181145 3.04493,0.394293 3.99774,0.199655 1.19515,-0.244135 2.66885,-1.060827 5.12294,-1.681814 3.01311,-0.762442 4.80167,-0.850826 10.23678,-0.941292 4.93795,-0.08219 7.16538,0.411191 9.13381,1.65182 1.61574,1.018342 2.07752,1.398606 4.52671,4.870239 6.67417,9.46038 8.41606,12.46246 12.69721,23.15104 4.43775,11.07957 9.71633,29.27551 11.82024,40.74583 2.63767,14.38036 3.16565,19.2213 2.97868,27.31066 -0.15889,6.87394 -0.58011,9.56951 -2.14745,13.74224 -1.68338,4.48166 -3.94162,7.2026 -7.30208,8.79821 -1.52709,0.7251 -2.03782,0.82662 -4.55808,0.906 -3.21928,0.10139 -4.11793,-0.11616 -8.00963,-1.93902 -5.07294,-2.37615 -10.88273,-6.76598 -17.33021,-13.09456 -5.4517,-5.35118 -14.32036,-13.6747 -16.16028,-15.16696 -2.23105,-1.80947 -6.31954,-3.29912 -10.69493,-3.8967 -0.87312,-0.11925 -3.37343,-0.46687 -5.55625,-0.77249 -3.85389,-0.53959 -7.60942,-0.77785 -20.96822,-1.33028 -8.72716,-0.36089 -26.802734,0.3505 -33.800524,1.33028 -2.182813,0.30562 -4.683125,0.65324 -5.55625,0.77249 -4.375388,0.59758 -8.463872,2.08723 -10.694924,3.8967 -1.839923,1.49226 -10.708581,9.81578 -16.160283,15.16696 -7.816644,7.6725 -14.620261,12.43155 -20.823444,14.56576 -2.252232,0.77488 -6.313741,0.70858 -8.369366,-0.13664 z"
            id="bodyPath"
            style={{ fill: controllerColors.body, stroke: "none" }}
          />
          <path
            id="touchpad"
            d="m 76.7395,96.169839 c 0,0 0.288412,-0.725387 2.261611,-0.652307 1.973202,0.07308 57.442069,0.146164 57.442069,0.146164 0,0 0.36541,-0.21925 1.75396,0.657733 M 76.7395,96.169839 76.222735,123.6617 c 0,0 0.05168,3.514 3.720703,3.56567 3.669027,0.0517 54.453462,0.22678 54.453462,0.22678 0,0 4.01948,0.21925 4.09256,-3.80024 0.0731,-4.01948 -0.29232,-27.332481 -0.29232,-27.332481"
            style={{
              fill: controllerColors.body,
              stroke: controllerColors.stroke,
            }}
          />
        </g>
        <g id="buttons">
          <g id="triangle">
            <path
              id="triangleButton"
              d="m 173.37256,107.52005 a 6.4233413,6.4233413 0 0 1 -6.42334,6.42334 6.4233413,6.4233413 0 0 1 -6.42334,-6.42334 6.4233413,6.4233413 0 0 1 6.42334,-6.42334 6.4233413,6.4233413 0 0 1 6.42334,6.42334 z"
            />
            <path
              id="triangleIcon"
              d="m 166.926,102.67483 4.14507,7.17948 -8.29014,0 z"
            />
          </g>
          <g id="circle">
            <path
              id="circleButton"
              d="m 174.13288,121.07422 a -6.4233413,6.4233413 0 0 0 6.42334,6.42334 -6.4233413,6.4233413 0 0 0 6.42334,-6.42334 -6.4233413,6.4233413 0 0 0 -6.42334,-6.42334 -6.4233413,6.4233413 0 0 0 -6.42334,6.42334 z"
            />
            <path
              id="circleIcon"
              transform="scale(-1,1)"
              d="m -176.60916,121.03757 a 3.9837828,3.9837828 0 0 1 -3.98378,3.98378 3.9837828,3.9837828 0 0 1 -3.98378,-3.98378 3.9837828,3.9837828 0 0 1 3.98378,-3.98379 3.9837828,3.9837828 0 0 1 3.98378,3.98379 z"
            />
          </g>
          <g id="square">
            <path
              id="squareButton"
              d="m 159.77956,121.07422 a 6.4233413,6.4233413 0 0 1 -6.42334,6.42334 6.4233413,6.4233413 0 0 1 -6.42334,-6.42334 6.4233413,6.4233413 0 0 1 6.42334,-6.42334 6.4233413,6.4233413 0 0 1 6.42334,6.42334 z"
            />
            <path
              id="squareIcon"
              d="m 156.86292,124.50753 -6.86311,0 0,-6.86311 6.86311,0 z"
            />
          </g>
          <g id="cross">
            <path
              id="crossButton"
              d="m 173.37256,134.62022 a 6.4233413,6.4233413 0 0 1 -6.42334,6.42334 6.4233413,6.4233413 0 0 1 -6.42334,-6.42334 6.4233413,6.4233413 0 0 1 6.42334,-6.42334 6.4233413,6.4233413 0 0 1 6.42334,6.42334 z"
            />
            <path
              id="crossIcon"
              d="m 170.32118,131.24237 -6.73881,6.73881 m 0,-6.73881 6.73881,6.73881"
            />
          </g>
        </g>
        <g id="topButtons">
          <g transform="translate(0, -2.5)">
            <path
              d="M 53.113152,79.243439 C 47.073264,79.241939 40.715563,91.343154 47.508175,91.33331 L 58.321244,91.31764 C 64.843123,91.30814 59.15304,79.244911 53.113152,79.243441 Z"
              id="lt"
            />
            <path
              d="m 162.68761,79.243439 c 6.03989,-0.0015 12.39759,12.099715 5.60498,12.089871 l -10.81307,-0.01567 c -6.52188,-0.0095 -0.8318,-12.072729 5.20809,-12.074199 z"
              id="rt"
            />
          </g>
          <path
            d="m 151.71721,94.661367 c 0,0 2.21055,-1.146064 6.78053,-1.746926 2.7484,-0.361362 5.09833,-0.320656 7.3541,-0.353111 2.69533,-0.03878 6.3784,0.0828 8.59373,1.588467 0,0 -1.44952,-2.472024 -3.43484,-2.777097 -6.40234,-0.983812 -11.56754,-0.665199 -14.90862,-0.219247 -3.97988,0.531215 -4.3849,3.507914 -4.3849,3.507914 z"
            id="rb"
          />
          <path
            d="m 63.494479,94.66106 c 0,0 -2.21055,-1.146064 -6.78053,-1.746926 -2.7484,-0.361362 -5.09833,-0.320656 -7.3541,-0.353111 -2.69533,-0.03878 -6.3784,0.0828 -8.59373,1.588467 0,0 1.44952,-2.472024 3.43484,-2.777097 6.40234,-0.983812 11.56754,-0.665199 14.90862,-0.219247 3.97988,0.531215 4.3849,3.507914 4.3849,3.507914 z"
            id="lb"
          />
        </g>
        <g id="centerButtons">
          <path
            id="ds4Button"
            d="m 112.36963,150.12055 a 4.6508789,4.6508789 0 0 1 -4.65088,4.65088 4.6508789,4.6508789 0 0 1 -4.65088,-4.65088 4.6508789,4.6508789 0 0 1 4.65088,-4.65088 4.6508789,4.6508789 0 0 1 4.65088,4.65088 z"
          />
          <path
            id="share"
            d="M 260.79102 371.17578 A 11.621475 9.218343 0 0 0 249.16992 380.39453 A 11.621475 9.218343 0 0 0 249.21875 381.24609 L 249.21875 400.3457 A 11.621475 9.218343 0 0 0 249.16992 401.18164 A 11.621475 9.218343 0 0 0 260.79102 410.40039 A 11.621475 9.218343 0 0 0 272.41211 401.18164 A 11.621475 9.218343 0 0 0 272.36328 400.3457 L 272.36328 381.23047 A 11.621475 9.218343 0 0 0 272.41211 380.39453 A 11.621475 9.218343 0 0 0 260.79102 371.17578 z "
            transform="scale(0.26458333)"
            style={{
              fill: pressedKey(8) ? controllerColors.pressed : "",
              strokeWidth: 1, // TODO: Honestly not sure what happened to the SVG to make this necessary
            }}
          />
          <path
            id="menu"
            d="m 146.00075,98.206924 a 3.0748486,2.4390199 0 0 0 -3.07475,2.439126 3.0748486,2.4390199 0 0 0 0.0129,0.22531 v 5.05344 a 3.0748486,2.4390199 0 0 0 -0.0129,0.22117 3.0748486,2.4390199 0 0 0 3.07475,2.43913 3.0748486,2.4390199 0 0 0 3.07475,-2.43913 3.0748486,2.4390199 0 0 0 -0.0129,-0.22117 v -5.05757 a 3.0748486,2.4390199 0 0 0 0.0129,-0.22118 3.0748486,2.4390199 0 0 0 -3.07475,-2.439126 z"
            style={{
              fill: pressedKey(9) ? controllerColors.pressed : "",
            }}
          />
        </g>
        <g id="dpad">
          <path
            d="m 42.344289,105.59825 -0.0072,8.49975 5.472716,5.37844 5.478446,-5.39484 v -8.48335 z"
            id="up"
            style={{
              fill: pressedKey(12) ? controllerColors.dpad.pressed : "",
            }}
          />
          <path
            d="m 42.344289,136.47688 -0.0072,-8.49975 5.472716,-5.37844 5.478446,5.39484 v 8.48335 z"
            id="down"
            style={{
              fill: pressedKey(13) ? controllerColors.dpad.pressed : "",
            }}
          />
          <path
            d="m 32.274,115.56709 8.49975,-0.007 5.37844,5.47272 -5.39484,5.47845 H 32.274 Z"
            id="left"
            style={{
              fill: pressedKey(14) ? controllerColors.dpad.pressed : "",
            }}
          />
          <path
            d="m 63.352883,115.56709 -8.49975,-0.007 -5.37844,5.47272 5.39484,5.47845 h 8.48335 z"
            id="right"
            style={{
              fill: pressedKey(15) ? controllerColors.dpad.pressed : "",
            }}
          />
        </g>
        <g id="joysticks">
          <g id="leftJoystick">
            <path
              id="leftJoystickOuter"
              d="m 93.086996,146.42622 a 16.75884,16.75884 0 0 1 -16.75884,16.75884 16.75884,16.75884 0 0 1 -16.758841,-16.75884 16.75884,16.75884 0 0 1 16.758841,-16.75884 16.75884,16.75884 0 0 1 16.75884,16.75884 z"
            />
            <path
              id="leftJoystickInner"
              d="m 86.461695,146.42622 a 10.133539,10.133539 0 0 1 -10.133539,10.13354 10.133539,10.133539 0 0 1 -10.13354,-10.13354 10.133539,10.133539 0 0 1 10.13354,-10.13354 10.133539,10.133539 0 0 1 10.133539,10.13354 z"
              style={{
                transform: hasAnimationEnded
                  ? `translate(${
                      joystickOffsetCoefficient * state.axes.LX_AXIS
                    }px, ${joystickOffsetCoefficient * state.axes.LY_AXIS}px)`
                  : "",
                fill: pressedKey(10)
                  ? controllerColors.joysticks.pressed
                  : controllerColors.joysticks.body,
              }}
            />
          </g>
          <g id="rightJoystick" transform="translate(62.618685,-3.8e-4)">
            <path
              id="rightJoystickOuter"
              d="m 93.086996,146.42622 a 16.75884,16.75884 0 0 1 -16.75884,16.75884 16.75884,16.75884 0 0 1 -16.758841,-16.75884 16.75884,16.75884 0 0 1 16.758841,-16.75884 16.75884,16.75884 0 0 1 16.75884,16.75884 z"
            />
            <path
              id="rightJoystickInner"
              d="m 86.461695,146.42622 a 10.133539,10.133539 0 0 1 -10.133539,10.13354 10.133539,10.133539 0 0 1 -10.13354,-10.13354 10.133539,10.133539 0 0 1 10.13354,-10.13354 10.133539,10.133539 0 0 1 10.133539,10.13354 z"
              style={{
                transform: hasAnimationEnded
                  ? `translate(${
                      joystickOffsetCoefficient * state.axes.RX_AXIS
                    }px, ${joystickOffsetCoefficient * state.axes.RY_AXIS}px)`
                  : "",
                fill: pressedKey(11)
                  ? controllerColors.joysticks.pressed
                  : controllerColors.joysticks.body,
              }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Ds4Controller;
