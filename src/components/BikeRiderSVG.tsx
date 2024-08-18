import { SVGProps } from "@/types/SVGtypes";
import React from "react";

const BikeRiderSVG: React.FC<SVGProps> = ({ width, height, color }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      enableBackground="new 0 0 64 64"
    >
      <style type="text/css">
        {`
.st0 { fill: ${color} }
.st1 { fill: red; }
`}
      </style>
      <path
        id="rider"
        className="st0"
        d="M54.7,154.3c-4.2,0-8.3-1.5-11.4-4.3l-9.1,0c7,11.3,21.9,14.8,33.2,7.7c3.1-2,5.8-4.6,7.7-7.7  l-9.1,0C62.9,152.7,58.9,154.3,54.7,154.3z M85.1,55.2c1.3,0.4,2.6,0.7,4,0.9c1.3,0,2.3-2.1,2.3-4.5c0-2.1,1.1-3.4,2.1-3.6  c0.8-0.2,4.4,0.8,5.5-0.4c-0.8-5.7-6.1-9.6-11.8-8.8c-5.1,0.7-9,5.2-8.9,10.4c-0.1,1.2,0.3,2.4,0.9,3.4  C79.7,53.4,82.6,54.5,85.1,55.2L85.1,55.2z M97,55.9c0.4,0,0.7-0.3,0.7-0.7c0-0.1,0-0.1,0-0.2c-0.1-0.1-1-1.9-1-2.3  c0.3-0.4,0.5-1,0.5-1.6c0-0.2,0-0.3,0-0.5c-0.9,0-1.8,0-2.7-0.1c-0.1,0-0.3,0-0.5,0c-0.2,0.3-0.2,0.7-0.2,1.1  c-0.1,3.4-1.5,6-3.5,6.7c1.4,0.9,3.4,2.1,4,2.1c0.8,0,1.4-0.4,1.5-1.1c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.3,0.6-0.6,0.7-0.8  c-0.1-0.2-0.2-0.5-0.3-0.6c0.3-0.1,0.5-0.2,0.6-0.4c0-0.2-0.3-0.9-0.3-0.9C96.6,55.9,96.8,55.9,97,55.9L97,55.9z M61.8,95.9  C61.8,96,61.8,96,61.8,95.9c6,4,12.5,6.4,19.2,7.7c0.8,0.2,1.5,0.2,2.3,0.2c1.4-0.1,2.6-0.9,2.9-3.3c0.6-4.4,1.6-11.1,2.1-14.8  c-0.8-0.4-1.6-0.8-2.3-1.3c-0.6-0.4-1.3-0.9-1.8-1.4c-0.9-1-1.7-2-2.3-3.2l-2.6-7.3l1.1-0.6c1.5,3,4.3,8.1,5.5,9.2  c0.9,0.8,1.8,1.4,2.9,1.9c0.8,0.3,1.6,0.6,2.4,0.8c5.5,1.6,18.4,4.6,20.2,4.6c0.4-0.5,0.6-1.1,0.7-1.8c1-0.3,2.6-0.9,3.6-1.3  c-0.3-0.5-0.5-1-0.5-1.6c0-1.3,0.9-2.4,2-2.4c1.1,0,2,1.1,2,2.4s-0.9,2.4-2,2.4c-0.3,0-0.5-0.1-0.8-0.2V88c0,0,1.3,0.1,2.1,0.3  c0.8,0.1,3.8-2.4,3.8-3.2c0-0.2,0-0.6-0.1-1l-0.4-3.3l-1.9-11l0,0c-0.5-1.2-1.2-2.3-2.1-3.2c-0.2-1.6-1-3.3-2-3.6  c-0.1,0-0.1,0-0.2,0c-0.9,0-2.1,1.7-2.8,4c-0.7,2.3-0.7,4.4,0.1,4.9c0.1,0,0.1,0.1,0.2,0.1c0,0,0,0,0,0c0,0,0.1,0,0.1,0l0,0  c0.9,0.3,2.4-0.6,3.5-1.8c0.4,0,0.8,0.1,1.1,0.2l1.4,8.3c-0.9-0.3-1.9-0.3-2.8,0c-1.8,0.7-4,1.7-4,1.7l0,0  c-3.9-1.1-13.8-5.2-17.6-6.7c-2.2-0.9-5.6-7.8-5.5-10.8c0.4-0.9,0.4-1.7-0.3-2.3c-0.5-0.4-6.5-3.4-7.8-4.1l-0.8,1.3  c-0.6,0.3-1.4,0.7-1.9,1c-1.7,0.9-4.1,3.4-5.6,6.7c-1.2,2.7-2,4.9-2.3,5.6c-1.8,3.9-7.8,15.6-9.9,21.1c0,0.1,0,0.1-0.1,0.2  C60.1,93.8,60.2,94.7,61.8,95.9L61.8,95.9z M77.8,111.9L77.8,111.9l-11.9,4.6c-1.1,0.4-1.9,1.4-2.1,2.5c-0.1,0.9,0.2,1.8,0.9,2.3  c1,0.8,7.4,6.4,8.6,7.3c0.7,0.6,1.7,0.8,2.6,0.5l0.6-0.3c0.4-0.2,0.7-0.5,1-0.8c1.8-1.8,3.2-7.3,3.2-12.8c0-1.5-0.4-2.6-1.2-3.1  C79.1,111.7,78.4,111.7,77.8,111.9L77.8,111.9z M85.7,132.8c0-1.8-0.2-3.5-0.6-5.2l-8.4,3.9l8.3,6.9  C85.5,136.5,85.7,134.7,85.7,132.8L85.7,132.8z M30.8,145.6c0,1.2,1,1.9,2.2,1.9l7.9,0h27.4l8.1,0l4.6,0c1.1,0.1,2.1-0.8,2.2-1.9h4  c5.2,5.2,8.1,6.3,9.6,6.3h8.8c1.6,0,3.5-1,8.8-6.3c4.5-0.2,6.9-3.2,8-6.1c0.7-1.9,3.4-12.1,5.1-16.9c0.1-0.4,0.2-0.8,0.3-1.2  l5.1-16.7l0.4-0.2c0.3,0.4,0.4,0.8,0.4,1.3c0,1.3-0.3,2.6-0.7,3.8c-0.4,1.2-0.7,2.5-0.7,3.8c0,1.7,0.6,3.3,1.8,4.6  c0.2,0.2,0.3,0.3,0.5,0.5c-7.1,8-9,19.4-4.8,29.2l1.2,2.7c0,0,1.9-2.2,2.2-2.5c4.1,8.3,12.5,13.5,21.7,13.5  c13.4,0,24.3-11,24.3-24.6c0-6.9-2.9-13.6-8-18.3c0.4-0.2,3.1-1.4,3.1-1.4s-2.5-2.1-2.7-2.2c-7.5-5.8-17.5-7.3-26.3-3.9l-5.9-11.8  l1.7,0c1.9,0,3.1-5.3,3.1-8v-0.1c0-0.6-0.1-1.2-0.2-1.8c1.9-1,3.3-3,3.2-4.6c0,0-3.1,0-5,0c-0.3-0.5-0.8-0.8-1.4-0.9  c-1.2,0-3,0-4.4-1.5l-3.9,1.2l-2.6-4.7l-5,0l-1.3,0.8c0.7,2.6,1.2,7.8-1,9.8c1.1,0.3,2.1,0.7,3.1,1.2c3.3,1.8,5,4.8,5,9.1  c0,3-1.2,5.9-3.4,8l-2.1,6.9c-1.7-1.4-3.8-2.1-6-2.1h-0.5v-1c-0.1-1.6-0.8-3-1.9-4.1c1.4,0,2.9,0,4.6,0c4.3,0,6.8-3.9,6.8-7.7  c0-7-5.5-8.4-12.8-8.4c-3.2,0.1-6.4,0.7-9.4,1.8c3.6,1.5,6.9,4.1,6.9,8.6c0,3.8-1.1,11.6-1.9,17.4c-0.6,3.7-1,6.4-1.3,8.1  c0,0,0,0,0,0.1c5.3,0.6,9.1,3,9.1,7.1c0,4.9-5.1,6.9-11.8,6.9c-7.8,0-16.4-1.8-16.4-6.9c0-2.8,3-4.9,7.1-6h0l0,0l0,0  c0,0-1.4,3.8-1.6,4.4c-0.3,1.3-0.9,3.3-0.8,4c0.1,0.6,1.4,1,2.9,1.1c1.2,0.1,2.5,0.1,3.7,0l0.7-1.1h1c0.6,0.1,1.7,1.2,5.6,1.2  c5.1,0,6.1-1.1,6.1-1.1l-0.2-1.6c-0.2-1-1-1.7-1.9-1.9c-1.8-0.4-2.8-0.6-4.3-2.1c-0.3-0.3-0.5-0.5-0.7-0.8c-0.5-0.6-0.9-1.2-1.2-1.8  c0,0,0,0,0,0c0.3-1.7,0.7-4.7,1.5-9.9c0.5-3.1,1.9-12.9,1.9-17c0-5.8-8.4-7.3-12.1-8.3c-2-0.5-8.5-2.2-8.5-2.2s-1.4,9.6-1.5,10.3  c-0.1,0.7-0.4,2.8-1.7,3.2c0,0,0,0,0.1,0c4.3,0.5,8.7,0.7,13,0.7l0,0.2c0,0,0,0,0,0c-0.2,0.4-0.4,0.8-0.5,1.3l-8.5,0.8  c-8.9-0.6-18.5-2.5-27.5-7.6c-0.3,0.5-0.4,1.1-0.4,1.7c0,0.8,0.3,1.7,0.6,2.4c4.2,1.2,8.2,3.3,11.6,6.1l1.5-0.6  c1.4-0.6,2.9-0.5,4.2,0.3c1,0.7,2.3,2.1,2.3,5.2c0,2.8-0.3,5.5-0.9,8.2c-0.3,1.1-0.6,2.2-1,3.2l10.1-4.8c0.5-1.5,0.5-3.3,0.5-5.3  c0-0.3,0-0.6,0-0.8h6v9.5l-5.1-1.2l-5.4,2.5c0.5,2.1,0.8,4.2,0.8,6.3c0,2.9-0.5,5.7-1.5,8.4h-3.4v-0.1c0-1.2-1-1.9-2.2-1.9h-18  c1.1-3.9-0.5-8.1-4-10.2l2.3-8.4c-0.2-0.6-0.2-1.3-0.1-1.9c0.3-2,1.7-3.7,3.6-4.4l0.1,0l7.6-2.9c-5.2-3.8-11.4-5.9-17.9-5.9  c-7,0-13.7,2.5-19,7c-2.3,0-5.5,0-6.1,0c-1.1,0-1.8,0.3-2,1.3l-0.2,1.1h-2.5c-0.5,0-1.2,1.4-1.2,3.3c0,1.9,0.7,3.3,1.2,3.3h1.5  l-1.8,12.5l5.8,0c-0.1,1-0.2,2-0.2,3c0,0.2,0,0.5,0,0.7c0.8-0.5,1.7-0.7,2.6-0.7h4.3c0,0,0,0,0,0c0-9.7,7.8-17.6,17.3-17.6  c0.8,0,1.6,0.1,2.3,0.2l-2.3,8.5c0,0,0,0,0,0c-4.9,0-8.9,4-8.8,9c0,0.9,0.1,1.7,0.4,2.5H33c-1.2,0-2.2,0.6-2.2,1.9v0.1h-8.1v4.4  L30.8,145.6L30.8,145.6z M145.5,122l2.9,5.9c-2.8,2.1-4.4,5.4-4.4,8.8c0.1,6,5,10.8,11,10.7s10.8-5,10.7-11  c-0.1-6-4.9-10.7-10.9-10.7c-0.7,0-1.5,0.1-2.2,0.2l-3-6c1.7-0.5,3.4-0.8,5.2-0.8c9.6,0,17.3,7.9,17.3,17.6  c0,9.7-7.8,17.6-17.3,17.6c-8,0-14.9-5.5-16.8-13.2C136.3,133.8,139.3,126.2,145.5,122z M154.9,128.8c4.4-0.1,8,3.5,8,7.8  c0.1,4.4-3.5,8-7.8,8s-8-3.5-8-7.8c0,0,0-0.1,0-0.1C147.1,132.4,150.5,128.8,154.9,128.8C154.9,128.8,154.9,128.8,154.9,128.8z   M135.2,110.2c0.5-1.4,0.8-3,0.8-4.5c0-0.8-0.2-1.6-0.6-2.3l0.6-0.3l5,9.9c-1.7,1-3.4,2.3-4.8,3.7c-1-0.8-1.6-2.1-1.6-3.4  C134.6,112.3,134.8,111.2,135.2,110.2z M115.1,125l1-3.4l1.5-4.8h1.7c2.9,0,4.8,2.2,3.8,5.1c-0.3,0.9-0.8,2.6-1.4,4.5L115.1,125z   M109.5,145.5c-1.5,1.4-3,2.7-3.7,2.8H97c-0.7,0-2.3-0.9-4.5-2.8H109.5z M154.9,142.1c3,0,5.4-2.3,5.4-5.3c0-3-2.3-5.4-5.3-5.4  c-3,0-5.4,2.3-5.4,5.3c0,0,0,0,0,0.1C149.6,139.6,152,142,154.9,142.1z M79.2,136.7l-8.7-7.3c1,2.3,1.5,4.7,1.5,7.2c0,0,0,0,0,0  L79.2,136.7L79.2,136.7z M97.9,128.3L97.9,128.3L97.9,128.3L97.9,128.3z"
      ></path>
    </svg>
  );
};

export default BikeRiderSVG;
