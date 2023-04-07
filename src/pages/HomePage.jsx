import { Container } from "@chakra-ui/react";
import React from "react";
import UrlInput from "../components/UrlInput";
import HomeHeading from "../components/HomeHeading";

const HomePage = () => {
  return (
    <Container maxW={"full"}>
      <HomeHeading />
      <UrlInput />
    </Container>
  );
};

export default HomePage;
