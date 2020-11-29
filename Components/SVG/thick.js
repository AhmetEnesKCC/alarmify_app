import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30.467}
      height={25.858}
      viewBox="0 0 30.467 25.858"
      {...props}>
      <Path
        data-name="Union 2"
        d="M29.192.792l-15 24.137zm-28.137 11l13.138 13z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
      />
    </Svg>
  );
}

export default SvgComponent;
