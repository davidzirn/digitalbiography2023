import React, { useRef, useEffect, HtmlHTMLAttributes } from "react";
import { Box, HTMLChakraProps, Text } from "@chakra-ui/react";
import { COLORS } from "@/constants/colors";
import { TRANSITIONS } from "@/constants/style";

interface Props extends HTMLChakraProps<"header"> {}

const Header: React.FC<Props> = ({ ...otherProps }) => {
  const NAVIGATION_MENU = [
    { text: "Design Types" },
    { text: "My experience" },
    { text: "Contact me" },
  ];

  return (
    <Box
      className="headerAnim"
      backdropFilter="blur(4px)"
      backgroundColor={`${COLORS.primary.dark}50`}
      position="fixed"
      width="100%"
      transform="translateY(-100%)"
      zIndex="10000"
      as="header"
    >
      <Box
        px="2"
        py="2"
        justifyContent="space-between"
        maxW="1300px"
        mx="auto"
        display="flex"
      >
        <Box flex="1">
          <Box
            width="40px"
            height="40px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={COLORS.primary.light}
          >
            <Text fontSize="14px" fontFamily="Montserrat-Black">
              DT
            </Text>
          </Box>
        </Box>
        <Box as="nav" gap="1" display="flex" alignItems="center">
          {NAVIGATION_MENU.map((object, index) => {
            return (
              <Box
              key={index}
                className="navAnim"
                data-group
                position="relative"
                cursor="pointer"
              >
                <Box px="2" py="1">
                  <Text
                    fontFamily="Montserrat-Medium"
                    color={COLORS.primary.light}
                    textTransform="uppercase"
                    fontSize="13px"
                  >
                    {object.text}
                  </Text>
                </Box>
                <Box
                  width="0"
                  overflow="hidden"
                  position="absolute"
                  top="0"
                  transition={TRANSITIONS.default}
                  backgroundColor={COLORS.white}
                  _groupHover={{ width: "100%" }}
                >
                  <Text
                    mx="2"
                    my="1"
                    whiteSpace="nowrap"
                    fontFamily="Montserrat-Black"
                    color={COLORS.black}
                    textTransform="uppercase"
                    fontSize="13px"
                  >
                    {object.text}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
