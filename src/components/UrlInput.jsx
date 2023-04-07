import {
  Box,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UrlFilter from "./UrlFilter";
import ScreenShotButton from "./ScreenShotButton";
import { getScreenShotApi } from "../store/screenShotReducer/screenShot.actions";
import { useNavigate } from "react-router-dom";

const UrlInput = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    let { name, value, checked } = e.target;
    let payload = {
      ...form,
      [name]: (value && value) || (checked && checked),
    };
    console.log(payload);
    setForm(payload);
  };

  const onSubmitHandler = () => {
    console.log(form);
    form.url &&
      dispatch(getScreenShotApi(form)).then(() => {
        navigate("/screenshot");
      });
  };
  return (
    <Box m="auto" mt="100px" textAlign={"center"}>
      <InputGroup w="50%" m="auto" zIndex={1}>
        <FormControl isRequired>
          <Input
            placeholder="Enter Website URL, eg: http://example.com"
            name="url"
            type="text"
            size={"lg"}
            textAlign="center"
            variant={"filled"}
            isRequired
            onChange={onChangeHandler}
          />
        </FormControl>
        <InputRightElement m="5px">
          <UrlFilter onChangeHandler={onChangeHandler} />
        </InputRightElement>
      </InputGroup>
      <ScreenShotButton onSubmitHandler={onSubmitHandler} url={form.url} />
    </Box>
  );
};

export default UrlInput;
