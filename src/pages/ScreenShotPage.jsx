import { ArrowBackIcon, DownloadIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ScreenShotPage = () => {



  return (
    <Container maxW={"full"} p="0px">
      <Flex p="10px" justifyContent={'space-between'}>
        {" "}
        <IconButton icon={<ArrowBackIcon />} as={Link} to='/' />
        <Button colorScheme="green" >
          <DownloadIcon />
          Download
        </Button>
      </Flex>
    </Container>
  );
};

export default ScreenShotPage;
