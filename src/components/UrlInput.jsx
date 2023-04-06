import { Box,  Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UrlFilter from "./UrlFilter";
import ScreenShotButton from "./ScreenShotButton";
import { getScreenShotApi } from "../store/screenShotReducer/screenShot.actions";
import { useNavigate } from "react-router-dom";

const UrlInput = ({isLoading}) => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const onChangeHandler = (e) => {
    const url = e.target.value;
    setUrl(url);
  };

  const onSubmitHandler = () => {
    console.log({ url });
    dispatch(getScreenShotApi({ url })).then(()=>{
        navigate('/screenshot')
    });
  };
  return (
    <Box m="auto" mt="100px" textAlign={"center"}>
        <InputGroup w='50%' m='auto'>
      <Input
        placeholder="Enter Website URL, eg: http://example.com"
        type="text"
        size={"lg"}
        textAlign="center"
        variant={"filled"}
        isRequired
        onChange={onChangeHandler}
        />
        <InputRightElement m='5px'>
       <UrlFilter/>
        </InputRightElement>
        </InputGroup>
      <ScreenShotButton onSubmitHandler={onSubmitHandler} isLoading={isLoading}/>
    </Box>
  );
};

export default UrlInput;
