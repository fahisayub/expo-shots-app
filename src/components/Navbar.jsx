import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex p="10px" bg="green.600" m='0px'>
      <Heading fontFamily={'sans-serif'} size={'md'} color={'white'}>ExpoShot</Heading>
    </Flex>
  );
};

export default Navbar;
