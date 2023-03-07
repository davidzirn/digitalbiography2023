import React, { useState, useEffect, useRef } from "react";
import { Box, HTMLChakraProps, Image } from "@chakra-ui/react";
import { COLORS } from "@/constants/colors";
import { TRANSITIONS } from "@/constants/style";
import gsap from "gsap";

interface Props extends HTMLChakraProps<"div"> {}

const SocialsWidget: React.FC<Props> = ({ ...otherProps }) => {
  const [extended, setExtended] = useState(true);
  const extendHandler = () => {
    setExtended(!extended);
  };

  const SOCIALS = [
    {
      text: "Facebook",
      icon: "/assets/icons/facebook.svg",
      href: "https://facebook.com",
    },
    {
      text: "Instagram",
      icon: "/assets/icons/instagram.svg",
      href: "https://instagram.com",
    },
    {
      text: "Linkedin",
      icon: "/assets/icons/linkedin.svg",
      href: "https://linkedin.com",
    },
  ];

  const trigger = useRef<HTMLDivElement>(null);
  const allRefs = gsap.utils.selector(trigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    tl.to(
      trigger.current,
      {
        duration: 0.4,
        // opacity: 1,

        opacity: 1,
        x: 0,
      },
      "+=3s"
    );
  }, []);
  return (
    <Box
      ref={trigger}
      opacity="0"
      transform="translateX(250%)"
      display="flex"
      flexDirection="column"
      position="fixed"
      bottom={{ base: "2", desktop: "5" }}
      right={{ base: "2", desktop: "5" }}
      className="bubbles"
      zIndex="10000"
      {...otherProps}
    >
      <Box
        height={extended ? "250px" : "50px"}
        overflow="hidden"
        transition={TRANSITIONS.default}
        position="relative"
        borderRadius="50px"
      >
        {SOCIALS.map((object, index) => {
          return (
            <Box
              cursor="pointer"
              mb="2"
              minHeight="50px"
              minWidth="50px"
              borderRadius="50px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor={COLORS.primary.light}
              key={index}
              _hover={{ backgroundColor: COLORS.white }}
              transition={TRANSITIONS.default}
            >
              <Image alt={object.text} src={object.icon} />
            </Box>
          );
        })}
        <Box
          minHeight="50px"
          minWidth="50px"
          borderRadius="50px"
          display="flex"
        />

        <Box position="absolute" bottom="0" left="0">
          <Box
            data-group
            _hover={{ backgroundColor: COLORS.white }}
            onClick={extendHandler}
            minHeight="50px"
            minWidth="50px"
            borderRadius="50px"
            display="flex"
            position="relative"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            transition={TRANSITIONS.default}
            backgroundColor={COLORS.primary.dark_green}
          >
            <Box
              width="20px"
              position="absolute"
              borderRadius="10px"
              height="3px"
              transition={TRANSITIONS.default}
              transform={!extended ? "rotateZ(180deg)" : "rotateZ(0deg)"}
              backgroundColor={COLORS.primary.light}
              _groupHover={{ backgroundColor: COLORS.primary.dark }}
            />
            <Box
              transition={TRANSITIONS.default}
              width="20px"
              borderRadius="10px"
              position="absolute"
              height="3px"
              transform={!extended ? "rotateZ(270deg)" : "rotateZ(0deg)"}
              backgroundColor={COLORS.primary.light}
              _groupHover={{ backgroundColor: COLORS.primary.dark }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialsWidget;
