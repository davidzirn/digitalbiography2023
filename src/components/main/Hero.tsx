import React, { useRef, useEffect } from "react";
import { Box, Heading, HTMLChakraProps, Image, Text } from "@chakra-ui/react";
import { COLORS } from "@/constants/colors";
import gsap from "gsap";

interface Props extends HTMLChakraProps<"div"> {}

const Hero: React.FC<Props> = ({ ...otherProps }) => {
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
      allRefs(".mynameis"),
      {
        duration: 1,
        opacity: 1,
        x: 0,
      },
      "+=0.3s"
    );
    tl.to(
      allRefs(".headline"),
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
      },
      "-=0.4s"
    );
    tl.to(
      allRefs(".iam"),
      {
        duration: 0.5,
        opacity: 1,
        x: 0,
      },
      "-=0.2s"
    );
    tl.to(
      allRefs(".fe"),
      {
        duration: 0.4,
        opacity: 1,
        y: 0,
        stagger: 0.2,
      },
      "-=0.1s"
    );

    tl.to(
      allRefs(".image"),
      {
        duration: 1,
        x: 0,
      },
      "-=1s"
    );
    tl.to(allRefs(".circle"), {
      duration: 1,
      scale: 1,
    });
  });

  return (
    <Box
      ref={trigger}
      width="100%"
      height="100vh"
      backgroundColor={COLORS.primary.dark}
      bgGradient={`linear(to-t, ${COLORS.primary.dark} 0%, #2C2C2C)`}
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px="10"
      color={COLORS.primary.light}
    >
      <Box
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        display="flex"
        maxWidth="900px"
        position="relative"
      >
        <Box position="relative" zIndex="1" flex="1">
          <Box width="fit-content" position="relative">
            <Box overflow="hidden">
              <Text
                className="mynameis"
                as="p"
                opacity={0}
                transform="translateX(-100%)"
                fontFamily="Montserrat-Light"
                color={COLORS.white}
                variant="paragraph"
              >
                <Text as="span" fontSize="30px" fontFamily="Montserrat-Black">
                  Design
                </Text>
                , this is
              </Text>
              <Text
                opacity={0}
                className="headline"
                fontSize="150px"
                as="h1"
                transform="translateY(100%)"
                lineHeight="150px"
                color={COLORS.primary.light}
                variant="gloock"
              >
                Types
              </Text>
            </Box>
            <Box
              right="0"
              bottom="0"
              overflow="hidden"
              position="absolute"
              transform="rotateZ(90deg) translateY(-200%) translateX(-50%)"
            >
              <Text
                transform="translateX(-100%)"
                className="iam"
                color={COLORS.white}
                fontSize="20px"
              >
                <Text fontSize="20px" fontFamily="Montserrat-Black" as="span">
                  &
                </Text>{" "}
                I am{" "}
              </Text>
            </Box>
          </Box>
          <Box
            justifyContent="flex-end"
            // display="flex"
            alignItems="center"
            gap="2"
            marginTop="5"
          >
            <Text
              as="h3"
              className="fe"
              opacity={0}
              transform="translateY(-100%)"
              variant="h3"
              fontFamily="Montserrat-Light"
            >
              <Text
                color={COLORS.white}
                fontFamily="Montserrat-Black"
                as="span"
              >
                Lorem
              </Text>{" "}
              Ipsum
            </Text>

            <Text
              as="h3"
              className="fe"
              transform="translateY(-100%)"
              opacity={0}
              variant="h3"
              fontFamily="Montserrat-Light"
            >
              Loremus{" "}
              <Text
                color={COLORS.white}
                fontFamily="Montserrat-Black"
                as="span"
              >
                Ipsemus
              </Text>
            </Text>

            <Text
              as="h3"
              className="fe"
              opacity={0}
              transform="translateY(-100%)"
              variant="h3"
              fontFamily="Montserrat-Light"
            >
              <Text
                color={COLORS.white}
                fontFamily="Montserrat-Black"
                as="span"
              >
                Design
              </Text>{" "}
              enthusiasist
            </Text>
          </Box>
        </Box>
        <Box
          ml="10"
          position="absolute"
          right="0"
          zIndex="0"
          borderBottomRadius="500px"
          flex="1"
          maxWidth="70%"
          overflow="hidden"
        >
          <Box
            transform="translateX(100%)"
            className="image"
            position="relative"
          >
            <Image
              alt="happy-man"
              zIndex={1}
              position="relative"
              src="/assets/images/happy-man.png"
            />
            <Box
              className="circle"
              width="80%"
              style={{ aspectRatio: "1" }}
              position="absolute"
              borderRadius="600px"
              top="50%"
              left="50%"
              transform="translate(-50%,-50%) scale(0)"
              zIndex={0}
              backgroundColor={COLORS.primary.dark_green}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
