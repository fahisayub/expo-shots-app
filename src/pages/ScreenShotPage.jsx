import { ArrowBackIcon, DownloadIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, IconButton, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ScreenShotPage = () => {
  const { image } = useSelector((state) => state.screenShotReducer);

  return (
    <Container maxW={"full"} p="0px">
      <Flex p="10px" justifyContent={"space-between"}>
        {" "}
        <IconButton icon={<ArrowBackIcon />} as={Link} to="/" />
        <Button colorScheme="green">
          <DownloadIcon />
          Download
        </Button>
      </Flex>
      <Image
        src={image}
        borderRadius={"10px"}
        boxShadow={"base"}
        alt="screenshot"
      />
    </Container>
  );
};

export default ScreenShotPage;
