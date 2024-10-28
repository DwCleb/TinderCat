import Svg, {Path} from "react-native-svg";
import React from "react";

const Cross = () => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Path d="M24 8L8 24" stroke="#E16359" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M8 8L24 24" stroke="#E16359" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>

);

export default Cross;
