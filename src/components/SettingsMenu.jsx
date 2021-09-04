import React from "react";
import { presets } from "../presets/presets";
import { CONTROLLER_LAYOUTS } from "../util/constants";

const SettingsMenu = ({ state, actions }) => {
  const { showSettingsMenu: show } = state;
  const {
    setBackgroundColor,
    toggleSettingsMenuState,
    setControllerColorPreset,
    setControllerLayout,
  } = actions;

  const handleColorSelect = (e) => {
    setBackgroundColor(e.currentTarget.value);
  };

  const handleCloseSettings = () => {
    toggleSettingsMenuState();
  };

  const handlePresetChange = (e) => {
    const preset = e.currentTarget.value.toLowerCase();
    setControllerColorPreset(preset);
  };

  const handleControllerLayoutChange = (e) => {
    const layoutKey = reverseControllerLayoutObj[e.currentTarget.value];
    setControllerLayout(layoutKey);
  };

  // TODO: There's gotta be a better way...
  // use dataset?
  const reverseControllerLayoutObj = {};

  for (const [key, displayName] of Object.entries(CONTROLLER_LAYOUTS)) {
    reverseControllerLayoutObj[displayName] = key;
  }

  const controllerLayoutDisplayNames = Object.keys(reverseControllerLayoutObj);

  const presetNames = Object.keys(presets);

  return (
    <div
      className="settings-menu-cover"
      style={{ display: show ? "flex" : "none" }}
    >
      <section className="settings-menu">
        <div className="close-icon-container" onClick={handleCloseSettings}>
          <svg
            width="25px"
            height="25px"
            viewBox="61.138598 79.281455 86.365669 86.365662"
            id="svg907"
          >
            <g id="layer1">
              <path
                id="path1476"
                d="M 147.41072,79.374999 61.232142,165.55357 m 0,-86.178571 86.178578,86.178571"
              />
            </g>
          </svg>
        </div>
        <h1>Settings</h1>
        <div className="controller-layout-selector">
          <label>
            <h2>Controller Layout</h2>
          </label>
          <select
            onChange={handleControllerLayoutChange}
            defaultValue={CONTROLLER_LAYOUTS[state.controllerLayout]}
          >
            {controllerLayoutDisplayNames.map((layout, i) => (
              <option key={i}>{layout}</option>
            ))}
          </select>
        </div>
        <div className="background-selector">
          <label>
            <h2>Background</h2>
          </label>
          <input
            type="color"
            onChange={handleColorSelect}
            defaultValue={state.backgroundColor}
          />
        </div>
        <div className="theme-selector">
          <label>
            <h2>Theme</h2>
          </label>
          <select
            onChange={handlePresetChange}
            defaultValue={state.controllerColors.displayName}
          >
            {presetNames.map((preset, i) => (
              <option key={i}>
                {`${preset.substr(0, 1).toUpperCase()}${preset.substr(1)}`}
              </option>
            ))}
          </select>
        </div>
      </section>
    </div>
  );
};

export default SettingsMenu;
