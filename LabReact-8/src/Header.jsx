import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      position="relative"
      backgroundImage="url('https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-hamburg-green-minimalist-banner-image_184684.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      height="200px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="md"
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="black"
      >
        <Heading fontFamily="godofwar" as="h1" fontSize="75px">
          SaborGrill Burger House
        </Heading>
      </Box>
    </Box>
  );
}
