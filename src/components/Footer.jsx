import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      className="footer"
      bg="white"
      borderTop="2px solid black"
      padding="1rem"
      display="flex"
      justifyContent="center"
      position="absolute"
      bottom="0"
      left="0"
      right="0"
    >
      <p className="studentName">Juan Frederick</p>-
      <p className="studentId">FE4288827</p>
    </Box>
  );
};

export default Footer;
