import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.635}
      height={13.647}
      viewBox="0 0 18.635 13.647"
      {...props}>
      <Path
        data-name="Line 8"
        fill="none"
        stroke="#839aff"
        strokeLinecap="round"
        strokeWidth={4}
        d="M6.811 10.824l9-8"
      />
      <Path
        data-name="Line 9"
        fill="none"
        stroke="#839aff"
        strokeLinecap="round"
        strokeWidth={4}
        d="M2.811 5.824l4 5"
      />
    </Svg>
  );
}

export default SvgComponent;
