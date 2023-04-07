import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import UrlInput from "../components/UrlInput";

const HomePage = () => {
  return (
    <Container maxW={"full"}>
      <Heading
        textAlign="center"
        my="50px"
        bgGradient="linear(to-r, teal.500, green.500)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        fontFamily={"sans-serif"}
      >
        ExpoShot
      </Heading>
      <UrlInput />
    </Container>
  );
};

export default HomePage;
