import React from "react";
import { useSpring, animated } from "react-spring";

import img from "../../assets/people.png";

export default () => {
  const propsRainbow = useSpring({
    from: { top: "30%", opacity: 0 },
    to: [{ top: "48%", opacity: 1, config: { duration: 500 } }],
    delay: 1000,
  });

  const props = useSpring({ x: 100, from: { x: 0 } });

  return (
    <animated.img
      className="people"
      style={propsRainbow}
      strokeDashoffset={props.x}
      src={img}
    />
  );
};
