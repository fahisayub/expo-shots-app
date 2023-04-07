import { ArrowBackIcon, DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ScreenShotViewer from "../components/ScreenShotViewer";
import { useSelector } from "react-redux";

const ScreenShotPage = () => {
  const { image } = useSelector((state) => state.screenShotReducer);

    // Create a Blob from the binary data
    const blob = new Blob([image], { type: 'image/jpeg' });
  
    // Create an object URL from the Blob
    const url = URL.createObjectURL(blob);
  

  return (
    <Container maxW={"full"} p="0px">
      <Flex p="10px" justifyContent={"space-between"}>
        {" "}
        <IconButton icon={<ArrowBackIcon />} as={Link} to="/" />
        <Button colorScheme="green" as={'a'} href={url} download="screenshot.jpg">
          <DownloadIcon />
          Download
        </Button>
      </Flex>
      <Box px='50px' py='20px'>

      <ScreenShotViewer/>
        </Box>
    </Container>
  );
};

export default ScreenShotPage;
