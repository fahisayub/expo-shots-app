import logo from './logo.svg';
import './App.css';
import { Container } from '@chakra-ui/react';
import MainRoues from './routes/MainRoues';

function App() {
  return (
    <Container maxW={'full'}>
      <MainRoues/>
    </Container>
  );
}

export default App;
