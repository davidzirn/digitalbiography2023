import React from "react";
import { Box, HTMLChakraProps, theme } from "@chakra-ui/react";
import { NextPage } from "next";
import { Text } from "@chakra-ui/react";
import { COLORS } from "@/constants/colors";
import { TRANSITIONS } from "@/constants/style";
const DesignSystemPage: NextPage = () => {
  return (
    <>
      <Box
        p={{ base: "2", desktop: "8" }}
        minH="100vh"

        // bgGradient={`linear(to-tl,${COLORS.primary.darkBlue},${COLORS.primary.gunMetal})`}
      >
        <Box py="2" borderBottomWidth={1} mb="4">
          <Text variant="h2">Font families</Text>
        </Box>
        <Text variant="h1" as="h1">
          This is Heading 1
        </Text>
        <Text variant="h2" as="h2">
          This is Heading 2
        </Text>
        <Text variant="h3" as="h3">
          This is Heading 3
        </Text>
        <Text variant="h4" as="h4">
          This is Heading 4
        </Text>
        <Text variant="h5" as="h5">
          This is Heading 5
        </Text>
        <Text variant="h6" as="h6">
          This is Heading 6
        </Text>
        <Text variant="paragraph">Paragraph</Text>
        <Box py="2" mt="4" borderBottomWidth={1} mb="4">
          <Text variant="h2">Spacing</Text>
        </Box>
        <Box display="flex" flexWrap="wrap" gap="2">
          {Object.keys(theme.space)
            .slice(0, 15)
            .map((object, index) => {
              return (
                <Box
                  key={index}
                  backgroundColor="pink"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  overflow="hidden"
                  fontSize={10}
                  width={object}
                  height={object}
                >
                  {object}
                </Box>
              );
            })}
        </Box>
        <Box py="2" mt="4" borderBottomWidth={1} mb="4">
          <Text variant="h2">Colors</Text>
        </Box>
        <Box display="flex" flexWrap="wrap" gap="2">
          <Box
            width="100px"
            height="100px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          />
          <Box
            width="100px"
            height="100px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          />
          <Box
            width="100px"
            height="100px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          />
          <Box
            width="100px"
            height="100px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          />
          <Box
            width="100px"
            height="100px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderWidth={1}
          />
        </Box>
      </Box>
    </>
  );
};

export default DesignSystemPage;
