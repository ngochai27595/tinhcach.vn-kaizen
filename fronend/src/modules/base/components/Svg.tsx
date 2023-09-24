// @flow
import * as React from "react";
import "../assets/css/svg.scss";

type Props = {
  children: any;
  width?: number;
  height?: number;
  size?: any;
  className?: any;
};

const Svg = ({ children, width, height, size, className, ...props }: Props) => (
  <svg
    {...props}
    className={`svg-root ${className}`}
    width={width || size || 24}
    height={height || size || 24}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

export default Svg;
