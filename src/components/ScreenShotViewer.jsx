

import { Image } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const ScreenShotViewer=()=> {
    const { image } = useSelector((state) => state.screenShotReducer);
    const base64Image = btoa(
        new Uint8Array(image)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
  return (
    <Image
      src={`data:image/jpeg;base64,${base64Image}`}
      borderRadius={"10px"}
      boxShadow={"base"}
      alt="screenshot"
      onError={(error) =>
        console.error('Error occurred while rendering the image:', error)
      }
    />
  );
}

export default ScreenShotViewer;
