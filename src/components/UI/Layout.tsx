import React, { ReactNode } from "react";
import { Box, HTMLChakraProps } from "@chakra-ui/react";

interface Props extends HTMLChakraProps<"div"> {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children, ...otherProps }) => {
  return (
    <Box {...otherProps}>
      <Box maxW="1300px" mx="auto">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
