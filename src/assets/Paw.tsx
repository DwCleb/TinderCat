import Svg, {Path} from "react-native-svg";
import React from "react";

interface IconProps {
  color?: string
}

const Paw = ({ color = '#BFBFC0' }: IconProps) => (
  <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <Path
      d="M9.74619 9.84207C12.676 10.8015 16.0134 14.5232 13.1328 16.8403C11.6673 18.0199 10.5357 16.9925 9.11828 16.4127C7.3822 15.704 6.39937 16.8813 4.68086 16.688C3.53636 16.5591 2.49963 16.121 2.0252 15.0491C0.658123 11.9554 5.89564 9.64643 8.39081 9.61129C8.8137 9.60543 9.2741 9.68744 9.74619 9.84207Z"
      fill={color}/>
    <Path
      d="M14.6698 11.2642C15.4804 11.4504 16.3918 11.3204 17.0302 10.7874C17.6686 10.2544 17.9557 9.2856 17.5843 8.54173C16.9494 7.27189 15.4839 7.72524 14.7131 8.53471C14.3499 8.91543 14.036 9.37814 13.9809 9.90177C13.9247 10.4254 14.6698 11.2642 14.6698 11.2642Z"
      fill={color}/>
    <Path
      d="M14.808 4.54478C14.9462 3.85363 15.0142 3.11563 14.685 2.46547C14.3558 1.81532 13.5147 1.29989 12.7205 1.47092C12.0281 1.61969 11.6088 2.20658 11.3206 2.76536C11.0312 3.32414 10.8005 3.90518 10.6294 4.50027C10.4443 5.14691 10.3366 5.85329 10.654 6.46947C12.0106 9.10522 14.5444 5.86734 14.808 4.54478Z"
      fill={color}/>
    <Path
      d="M8.64621 6.13325C9.51074 5.05317 9.82468 3.67204 9.48379 2.43968C9.30339 1.7825 8.90978 1.13938 8.22683 0.820743C5.32634 -0.527588 4.76287 5.2289 6.40407 6.32889C7.12216 6.81035 8.64621 6.13325 8.64621 6.13325Z"
      fill={color}/>
    <Path
      d="M3.49887 7.68308C4.20759 6.70492 3.85265 4.758 3.13104 3.87004C2.82061 3.48698 2.3743 3.16247 1.88112 3.18356C1.18997 3.21402 0.713188 3.89347 0.476557 4.54362C-0.0154496 5.89664 0.200083 8.0802 2.02988 8.25709C2.73274 8.32504 3.206 8.08606 3.49887 7.68308Z"
      fill={color}/>
  </Svg>
);

export default Paw;
