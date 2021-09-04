import React from "react";
import { DS4_LAYOUT, XBOX_LAYOUT } from "../util/constants";
import Ds4Controller from "./layouts/Ds4Controller";
import XboxController from "./layouts/XboxController";

const ControllerDisplay = ({ state, toggleSettingsMenuState }) => {
  const handleLogoClick = () => {
    toggleSettingsMenuState();
  };

  let currentControllerLayout;
  switch (state.controllerLayout) {
    case XBOX_LAYOUT:
      currentControllerLayout = (
        <XboxController state={state} handleLogoClick={handleLogoClick} />
      );
      break;
    case DS4_LAYOUT:
      currentControllerLayout = (
        <Ds4Controller state={state} handleLogoClick={handleLogoClick} />
      );
      break;
    default:
      console.error("You screwed up");
      break;
  }

  return <>{currentControllerLayout}</>;
};

export default ControllerDisplay;
