import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={35}
      viewBox="0 0 27.202 25.413">
      <G transform="translate(-1444.378 -237.006)">
        <Circle
          data-name="Ellipse 1"
          cx={9.339}
          cy={9.339}
          r={9.339}
          transform="translate(1448.459 243.242)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
        />
        <Path
          data-name="Rectangle 1"
          d="M1468.205 240.38h0a3.771 3.771 0 01.001 5.333l-.55.551h0l-5.334-5.334h0l.55-.55a3.771 3.771 0 015.333 0z"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
        />
        <Path
          data-name="Rectangle 2"
          d="M1453.636 240.93l-5.334 5.334h0l-.55-.55a3.771 3.771 0 010-5.335h0a3.771 3.771 0 015.334 0l.55.551h0z"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
        />
        <G data-name="Group 1">
          <Path
            data-name="Line 1"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeMiterlimit={10}
            d="M1457.798 252.58l2.665-1.538"
          />
        </G>
        <G data-name="Group 2">
          <Path
            data-name="Line 2"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeMiterlimit={10}
            d="M1457.798 252.581l3.995 3.995"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
