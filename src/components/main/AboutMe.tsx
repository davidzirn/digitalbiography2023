import React from "react";
import { Box, HTMLChakraProps, Text } from "@chakra-ui/react";
import { COLORS } from "@/constants/colors";

interface Props extends HTMLChakraProps<"div"> {}

const AboutMe: React.FC<Props> = ({ ...otherProps }) => {
  return (
    <Box
      maxWidth="1300px"
      px="10"
      py="10"
      backgroundColor={COLORS.primary.dark}
      {...otherProps}
    >
      <Box borderBottomWidth="1px" borderColor={COLORS.white}>
        <Text
          textAlign="right"
          variant="gloock"
          color={COLORS.primary.light}
          fontSize="70px"
        >
          About me
        </Text>
      </Box>
      <Box>
        <Text variant="paragraph" fontSize="20px">
          Veniam nostrud do incididunt excepteur duis veniam proident.
          Exercitation cupidatat excepteur voluptate enim commodo aliquip ad.
          Ipsum aliquip pariatur id nulla eiusmod. Proident enim deserunt
          excepteur ea. Velit exercitation aliquip quis est Lorem commodo elit
          est cupidatat excepteur. Nulla cupidatat id in nostrud ullamco.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutMe;
