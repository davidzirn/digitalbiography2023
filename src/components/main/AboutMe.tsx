import React from "react";
import { Box, HTMLChakraProps, Text } from "@chakra-ui/react";
import { COLORS } from "@/constants/colors";
import { Parallax } from "react-scroll-parallax";

interface Props extends HTMLChakraProps<"div"> {}

const AboutMe: React.FC<Props> = ({ ...otherProps }) => {
  const TIMELINE_DATA = [
    {
      date: "January 2000",
      heading: "Lorem ipsum",
      text: "Ut officia minim ullamco nostrud est mollit est. Non minim incididunt enim anim occaecat cillum proident culpa amet dolore veniam. Amet ad incididunt ex sunt.",
    },
    {
      date: "June 2021",
      heading: "Magna aliqua enim velit voluptate ",
      text: "Ad mollit ad consectetur id sit aliqua. Incididunt elit aliqua minim consequat sunt sint amet mollit consectetur officia et labore mollit. Excepteur quis nostrud esse tempor. Ipsum sunt mollit culpa velit minim officia .",
    },
    {
      date: "November 2021",
      heading: "Anim laborum eu ",
      text: "Officia aliquip aliqua Lorem esse est duis esse. Enim magna consequat amet fugiat consectetur anim pariatur. Do nostrud aliqua est excepteur reprehenderit ipsum. Mollit minim incididunt.",
    },
    {
      date: "March 2023",
      heading: "Voluptate id",
      text: "Occaecat irure nisi ex laborum pariatur. Magna occaecat qui culpa aliquip. Veniam consectetur non magna fugiat occaecat. Anim sunt incididunt veniam eu velit nostrud. Nulla velit eu ex nulla pariatur fugiat. Dolor sint cupidatat dolor exercitation mollit.",
    },
  ];

  return (
    <Box
      maxWidth="1300px"
      px={{ base: "2", desktop: "10" }}
      mb="1000px"
      mx="auto"
      py="10"
      backgroundColor={COLORS.primary.dark}
      {...otherProps}
    >
      <Text
        mb="10"
        textAlign="center"
        fontSize={{ base: "40px", desktop: "70px" }}
        color={COLORS.primary.light}
        variant="gloock"
      >
        Timeline
      </Text>
      <Box
        py="2"
        display={{ base: "flex", desktop: "block" }}
        position="relative"
      >
        <Box
          display={{ base: "none", desktop: "block" }}
          top="50%"
          zIndex={1}
          height="100px"
          left="50%"
          transform="translate(-50%,-50%)"
          width="5px"
          borderRadius="5px"
          position="sticky"
          backgroundColor={COLORS.primary.light}
        />
        <Box
          borderLeftWidth={1}
          ml={{ base: "2", tablet: "10" }}
          minWidth="50px"
          borderColor={COLORS.primary.dark_green}
          position="relative"
          display={{ base: "block", desktop: "none" }}
        >
          <Box
            top="50%"
            zIndex={1}
            height="20px"
            left="0%"
            transform="translate(-51%,-50%)"
            width="20px"
            borderRadius="20px"
            position="sticky"
            backgroundColor={COLORS.primary.light}
          />
        </Box>
        <Box>
          {TIMELINE_DATA.map((object, index) => {
            return (
              <Box
                justifyContent={index & 1 ? "flex-end" : "flex-start"}
                mt={{ base: "-100px", desktop: "-100px" }}
                width="100%"
                display="flex"
                mb={{ base: "8", desktop: "2" }}
              >
                <Box
                  pr={{ base: "0", desktop: index & 1 ? "0" : "4" }}
                  pl={{ base: "0", desktop: index & 1 ? "4" : "0" }}
                  height="100%"
                  py="5"
                  width={{ base: "100%", desktop: "50%" }}
                >
                  <Text
                    variant="paragraph"
                    color={COLORS.white}
                    fontFamily="Montserrat-Black"
                    mb="2"
                    textAlign={{
                      base: "left",
                      desktop: index & 1 ? "left" : "right",
                    }}
                  >
                    {object.date}
                  </Text>
                  <Text
                    textAlign={{
                      base: "left",
                      desktop: index & 1 ? "left" : "right",
                    }}
                    variant="h4"
                    fontFamily="gloock"
                    color={COLORS.primary.middle_green}
                    fontSize="40px"
                    lineHeight="50px"
                  >
                    {object.heading}
                  </Text>
                  <Box
                    mb="2"
                    mt="1"
                    width="100%"
                    height="1px"
                    backgroundColor={COLORS.primary.light}
                  />
                  <Text
                    textAlign={{
                      base: "left",
                      desktop: index & 1 ? "left" : "right",
                    }}
                    color={COLORS.white}
                    variant="paragraph"
                  >
                    {object.text}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box
          display={{ base: "none", desktop: "block" }}
          position="absolute"
          zIndex={0}
          height="100%"
          width="1px"
          top="0"
          borderRadius="5px"
          left="50%"
          backgroundColor={COLORS.primary.dark_green}
          transform="translateX(-50%)"
        />
      </Box>
    </Box>
  );
};

export default AboutMe;
