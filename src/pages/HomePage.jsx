import { Container } from '@chakra-ui/react';
import React from 'react';
import UrlInput from '../components/UrlInput';

const HomePage = () => {
    return (
        <Container maxW={'full'}>
            <UrlInput/>

        </Container>
    );
};

export default HomePage;