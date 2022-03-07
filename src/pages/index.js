import Head from "next/head";
import { useRef, useEffect } from "react";
import Image from "next/image";
import RandomImage from "../images/randomImage.jpg";
import { Text, Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import { gsap, Power2 } from "gsap";
// import CSSRulePlugin from "gsap/CSSRulePlugin";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";
// if (process.client) {
//   gsap.registerPlugin(CSSRulePlugin);
// }

export default function Home() {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = useRef(null);
  // let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  useEffect(() => {
    gsap.to(container, 0, { css: { visibility: "visible" } });
    // console.log(imageReveal);
    gsap.to(imageReveal, 1.8, {
      css: { width: "0%" },
      ease: Power2.easeInOut,
    });
    gsap.from(image, 1.4, {
      scale: 1.8,
      ease: Power2.easeInOut,
      delay: -1.8,
    });
  });
  return (
    <div className={styles.container}>
      <section className="main">
        {/* <Text top="400px" fontSize="20px" fontWeight="700" letterSpacing="10px">
          GSAP IMAGE REVEAL
        </Text> */}
        <Box
          maxWidth="1440px"
          position="relative"
          margin="auto"
          height="100vh"
          display="flex"
          alignItems="center"
          visibility="hidden"
          className="container"
          ref={(el) => (container = el)}
        >
          <Box className="img-container">
            <img ref={(el) => (image = el)} src={RandomImage} alt="people" />
            <Box
              ref={(el) => (imageReveal = el)}
              position="absolute"
              width="100%"
              height="100%"
              background="#fff"
              top="0"
              right="0"
            ></Box>
          </Box>
        </Box>
        <Text fontSize="20px" fontWeight="700" letterSpacing="10px">
          GSAP IMAGE REVEAL
        </Text>
      </section>
    </div>
  );
}
