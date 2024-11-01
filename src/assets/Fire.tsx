import Svg, {Path, Rect} from "react-native-svg";
import React from "react";

interface IconProps {
  color?: string
}

const Fire = ({ color = '#BFBFC0' }: IconProps) => (
  <Svg width="17" height="16" viewBox="0 0 17 16" fill="none">
    <Rect width="16" height="16" transform="translate(0.5)"/>
    <Path
      d="M6.07834 6.65932C6.05759 6.65932 6.04375 6.65932 6.02991 6.64548C5.55941 6.02275 5.44178 4.95028 5.41411 4.54205C5.40719 4.46248 5.31724 4.42096 5.24805 4.45902C3.79503 5.27202 2.4458 7.20247 2.4458 9.06373C2.4458 12.2708 4.6703 14.9589 8.50004 14.9589C12.0876 14.9589 14.5543 12.1912 14.5543 9.06719C14.5543 4.98142 11.6379 2.27602 9.03973 1.05132C8.97054 1.01673 8.89443 1.07554 8.90135 1.14819C9.24038 3.35195 8.7768 5.74253 6.07488 6.66624L6.07834 6.65932Z"
      fill={color}/>
  </Svg>
);

export default Fire;
