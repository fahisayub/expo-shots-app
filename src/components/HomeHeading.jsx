import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

const HomeHeading = () => {
    return (
        <div>
            <Heading
        textAlign="center"
        my="40px"
        bgGradient="linear(to-r, teal.500, green.500)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        fontFamily={"sans-serif"}
      >EXPOShot</Heading>
      <Text fontWeight={'bold'} color={'gray'} textAlign={'center'}>We help to take you the screenshot of any website in seconds</Text>
        </div>
    );
};

export default HomeHeading;