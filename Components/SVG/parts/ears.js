import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function Ears(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={193.859}
      height={71.841}
      viewBox="0 0 193.859 71.841"
      {...props}>
      <G fill="none" stroke="#839aff" strokeMiterlimit={10} strokeWidth={8}>
        <Path
          data-name="Rectangle 1"
          d="M169.328 24.537h0a26.7 26.7 0 010 37.76l-3.896 3.895h0l-37.76-37.76h0l3.896-3.895a26.7 26.7 0 0137.76 0z"
        />
        <Path
          data-name="Rectangle 2"
          d="M66.185 28.429L28.43 66.184h0l-3.895-3.896a26.7 26.7 0 010-37.76h0a26.7 26.7 0 0137.755.006l3.895 3.895h0z"
        />
      </G>
    </Svg>
  );
}

export default Ears;
