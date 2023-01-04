import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const fadeUp = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, 20%, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

function FadeUp({ children }) {
  return <Reveal keyframes={fadeUp} duration='500' triggerOnce='true' delay = '50'>{children}</Reveal>;
}

export default FadeUp;