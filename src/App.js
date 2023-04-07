import './App.css';
import { Container } from '@chakra-ui/react';
import MainRoues from './routes/MainRoues';
import Navbar from './components/Navbar';

function App() {
  return (
    <Container maxW={'full'} p='0px'>
      <Navbar />
      <MainRoues />
    </Container>
  );
}

export default App;
