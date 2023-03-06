import React, { useEffect, useRef } from "react";
import { Box, HTMLChakraProps, Text } from "@chakra-ui/react";
import { COLORS } from "@/constants/colors";
import { TRANSITIONS } from "@/constants/style";
import gsap from "gsap";

interface Props extends HTMLChakraProps<"div"> {}

const ScrollWidget: React.FC<Props> = ({ ...otherProps }) => {
  const NAVIGATION_MENU = [
    { text: "Design Types" },
    { text: "My experience" },
    { text: "Contact me" },
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
      allRefs(".scrollWidget"),
      {
        duration: 0.6,
        // opacity: 1,
        stagger: 0.4,
        scale: 1,
      },
      "+=3s"
    );
  });

  return (
    <Box
      ref={trigger}
      transform="translateY(-50%)"
      position="fixed"
      zIndex="1000"
      top="50%"
      left="5"
      {...otherProps}
    >
      {NAVIGATION_MENU.map((object, index) => {
        return (
          <Box
            transform="scale(0)"
            className="scrollWidget"
            data-group
            // opacity="0"
            position="relative"
            key={index}
            mt={index !== 0 ? "2" : "0"}
          >
            <Box
              backgroundColor={COLORS.primary.dark_green}
              transform="rotateZ(-45deg)"
              width="12px"
              height="12px"
              transformOrigin="center"
              transition={TRANSITIONS.default}
              _hover={{
                height: "20px",
                width: "20px",
                transfom: "rotateZ(-100deg)",
              }}
              borderWidth="1px"
              borderColor={COLORS.primary.light}
            />
            <Box
              transition={TRANSITIONS.default}
              position="absolute"
              left="150%"
              borderWidth={1}
              borderColor={COLORS.primary.dark_green}
              top="50%"
              p="1"
              py="x"
              backgroundColor={COLORS.primary.dark}
              transformOrigin="center left"
              transform={`translateY(-50%) scale(0)`}
              _groupHover={{ transform: `translateY(-50%) scale(1)` }}
            >
              <Text
                color={COLORS.white}
                textTransform="uppercase"
                fontFamily="Montserrat-Medium"
                fontSize="12px"
                whiteSpace="nowrap"
              >
                {object.text}
              </Text>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ScrollWidget;
