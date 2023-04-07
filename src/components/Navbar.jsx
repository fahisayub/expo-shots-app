import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex p="10px" bgGradient="linear(to-r, teal.500, green.500)" m="0px">
      <Heading fontFamily={"sans-serif"} size={"md"} color={"white"}>
        EXPOShot
      </Heading>
    </Flex>
  );
};

export default Navbar;
