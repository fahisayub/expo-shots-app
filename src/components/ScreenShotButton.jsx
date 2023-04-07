import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const ScreenShotButton = ({ onSubmitHandler, url }) => {
  const { isLoading } = useSelector((state) => state.screenShotReducer);

  return (
    <Box>
      <Button
        m="20px"
        p="40px"
        colorScheme="green"
        size={"lg"}
        isDisabled={isLoading ? true : !url ? true : false}
        onClick={() => onSubmitHandler()}
      >
        {isLoading ? "Processing..." : "Get Screenshot"}
      </Button>
    </Box>
  );
};

export default ScreenShotButton;
