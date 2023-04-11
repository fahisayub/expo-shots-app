import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ScreenShotViewer = () => {
  const { image } = useSelector((state) => state.screenShotReducer);

  return (
    <Box borderRadius={"10px"} boxShadow={'md'} m='10px'>
      <embed src={image} type="image/jpg" height="100%" width={"100%"} />
    </Box>
  );
};

export default ScreenShotViewer;
