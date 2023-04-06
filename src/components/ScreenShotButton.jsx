import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const ScreenShotButton = ({isLoading,onSubmitHandler}) => {
    return (
        <Box >
        <Button zIndex={-1}
          m="20px"
          p="40px"
          colorScheme="green"
          size={"lg"}
          isDisabled={isLoading ? true : false}
          onClick={onSubmitHandler}
        >
          {isLoading ? "Processing..." : "Get Screenshot"}
        </Button>
      </Box>
    );
};

export default ScreenShotButton;