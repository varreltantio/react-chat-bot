import React from "react";
import { useSpring, animated } from "react-spring";

import img from "../../assets/font-join.png";

export default ({ handleLogin }) => {
  const propsRainbow = useSpring({
    from: { top: "5%", opacity: 0 },
    to: [{ top: "15%", opacity: 1, config: { duration: 500 } }],
    delay: 2000,
  });

  return (
    <animated.img
      className="font"
      style={propsRainbow}
      src={img}
      onClick={handleLogin}
    />
  );
};
