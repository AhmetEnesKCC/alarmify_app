import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 98.953 98.954"
      {...props}>
      <G data-name="Union 1" fill="#fff">
        <Path d="M86.953 98.453c-3.072 0-5.96-1.196-8.132-3.368L49.83 66.094l-.354-.354-.353.354-28.991 28.991A11.425 11.425 0 0112 98.453c-3.072 0-5.96-1.196-8.132-3.368A11.425 11.425 0 01.5 86.953c0-3.072 1.196-5.96 3.368-8.132L32.86 49.83l.354-.354-.354-.353L3.87 20.13A11.424 11.424 0 01.498 12c0-3.072 1.197-5.96 3.37-8.132A11.425 11.425 0 0111.998.5c3.072 0 5.96 1.196 8.133 3.368l28.99 28.991.354.354.354-.354L78.82 3.868A11.425 11.425 0 0186.953.5c3.072 0 5.96 1.196 8.132 3.368A11.424 11.424 0 0198.453 12c0 3.071-1.196 5.96-3.368 8.131L66.093 49.123l-.353.353.353.354 28.991 28.99a11.425 11.425 0 013.369 8.133c0 3.072-1.196 5.96-3.369 8.132a11.425 11.425 0 01-8.131 3.368z" />
        <Path d="M86.953 97.953c2.938 0 5.7-1.144 7.778-3.222a10.928 10.928 0 003.222-7.778c0-2.939-1.144-5.701-3.222-7.779L65.74 50.184l-.707-.708.707-.707 28.992-28.991A10.928 10.928 0 0097.953 12c0-2.939-1.144-5.701-3.221-7.779A10.928 10.928 0 0086.953 1c-2.938 0-5.7 1.144-7.778 3.221L50.183 33.213l-.707.707-.707-.707L19.778 4.22A10.929 10.929 0 0012 1C9.062 1 6.3 2.144 4.222 4.22A10.928 10.928 0 001 12c0 2.938 1.144 5.7 3.222 7.778l28.99 28.991.708.707-.707.707L4.222 79.174A10.928 10.928 0 001 86.953c0 2.938 1.144 5.7 3.222 7.778A10.928 10.928 0 0012 97.953c2.938 0 5.7-1.144 7.778-3.222L48.769 65.74l.707-.707.707.707 28.992 28.991a10.928 10.928 0 007.778 3.222m0 1a11.962 11.962 0 01-8.486-3.514l-28.99-28.992L20.484 95.44A11.963 11.963 0 0112 98.953a11.962 11.962 0 01-8.485-3.514c-4.687-4.687-4.687-12.285 0-16.972l28.99-28.99-28.99-28.992c-4.687-4.687-4.687-12.284 0-16.97A11.962 11.962 0 0112 0c3.07 0 6.142 1.171 8.485 3.514l28.991 28.992L78.467 3.514A11.963 11.963 0 0186.953 0c3.071 0 6.143 1.171 8.486 3.514 4.686 4.687 4.686 12.284 0 16.97L66.447 49.477l28.99 28.991c4.687 4.687 4.687 12.285 0 16.972a11.963 11.963 0 01-8.484 3.514z" />
      </G>
    </Svg>
  );
}

export default SvgComponent;