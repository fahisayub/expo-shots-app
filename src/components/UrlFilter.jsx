import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormLabel,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { FaFilter } from "react-icons/fa";
const UrlFilter = ({ onChangeHandler }) => {
  return (
    <Menu closeOnSelect={false} placement="bottom-end">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FaFilter />}
        variant="solid"
        colorScheme="green"
      />
      <MenuList height={"50vh"} overflowY={"scroll"} p="20px">
        {/* FULL PAGE SCREENSHOT*/}
        <MenuGroup
          title="Screenshot 
        Size"
          type="checkbox"
        >
          <CheckboxGroup colorScheme="green">
            <Stack spacing={"5"} p="10px">
              <Checkbox name="capture_full_page" onChange={onChangeHandler}>
                Capture full page
              </Checkbox>
              {/* HIDE POPUP*/}
              <Checkbox name="hide_popup" onChange={onChangeHandler}>
                Hide Popup
              </Checkbox>
              {/* ACCEPT GDPR BANNER*/}
              <Checkbox name="accept_gdpr_banner" onChange={onChangeHandler}>
                Accept gdpr banner
              </Checkbox>
            </Stack>
          </CheckboxGroup>

          {/* SCREENSHOT SIZE*/}
          <Flex gap={"10px"}>
            <Box>
              <FormLabel>Width</FormLabel>
              <Input
                size={"sm"}
                placeholder="width"
                name="width"
                onChange={onChangeHandler}
              />
            </Box>
            <Box>
              <FormLabel>Height</FormLabel>
              <Input
                size={"sm"}
                placeholder="heigth"
                name="height"
                onChange={onChangeHandler}
              />
            </Box>
          </Flex>
        </MenuGroup>
        <MenuDivider />
        {/* WAIT UNTIL*/}
        <MenuGroup defaultValue="load" title="Wait Until" type="radio">
          <RadioGroup
            defaultValue="load"
            name="wait_until"
            colorScheme="green"
            p="10px"
          >
            <Stack spacing={5} direction="row">
              <Radio value="load" onChange={onChangeHandler}>
                load
              </Radio>
              <Radio value="domcontentloaded" onChange={onChangeHandler}>
                domcontentloaded
              </Radio>
              <Radio value="networkidle0" onChange={onChangeHandler}>
                networkidle0
              </Radio>
              <Radio value="networkidle2" onChange={onChangeHandler}>
                networkidle2
              </Radio>
            </Stack>
          </RadioGroup>
        </MenuGroup>
        <MenuDivider />
        {/* EXPORT FORMAT*/}
        <MenuGroup title="Export Format" type="radio">
          <RadioGroup
            defaultValue="png"
            name="export_format"
            colorScheme="green"
            p="10px"
          >
            <Stack spacing={5} direction="row">
              <Radio value="png" onChange={onChangeHandler}>
                PNG
              </Radio>
              <Radio value="jpeg" onChange={onChangeHandler}>
                JPEG
              </Radio>
              <Radio value="webp" onChange={onChangeHandler}>
                WEBP
              </Radio>
            </Stack>
          </RadioGroup>
        </MenuGroup>
        <MenuDivider />
        {/* DEVICE*/}
        <MenuGroup title="Device" type="radio">
          <RadioGroup
            defaultValue="laptop"
            name="device"
            colorScheme="green"
            p="10px"
          >
            <Stack spacing={5} direction="row">
              <Radio value="laptop" onChange={onChangeHandler}>
                Laptop
              </Radio>
              <Radio value="mobile" onChange={onChangeHandler}>
                Mobile
              </Radio>
              <Radio value="tablet" onChange={onChangeHandler}>
                Tablet
              </Radio>
              <Radio value="desktop" onChange={onChangeHandler}>
                Desktop
              </Radio>
            </Stack>
          </RadioGroup>
        </MenuGroup>
        <MenuDivider />
        {/* PREFERS COLOR SCHEME*/}
        <MenuGroup title="Prefers color scheme" type="radio">
          <RadioGroup
            defaultValue="light"
            name="prefers_color_scheme"
            colorScheme="green"
            p="10px"
          >
            <Stack spacing={5} direction="row">
              <Radio value="light" onChange={onChangeHandler}>
                Light
              </Radio>
              <Radio value="dark" onChange={onChangeHandler}>
                Dark
              </Radio>
            </Stack>
          </RadioGroup>
        </MenuGroup>
        <MenuDivider />

        <MenuGroup>
          <Flex gap={"10px"}>
            {/* DELAY*/}
            <Box>
              <FormLabel>Delay</FormLabel>
              <Input
                size={"sm"}
                type="number"
                name="delay"
                onChange={onChangeHandler}
                placeholder="delay"
              />
            </Box>
            {/* DEVICE SCALE FACTOR*/}
            <Box>
              <FormLabel>Device Scale Factor</FormLabel>
              <Input
                size={"sm"}
                type="number"
                placeholder="Device scale factor"
                name="device_scale_factor"
                onChange={onChangeHandler}
              />
            </Box>
            {/* QUALITY*/}
            <Box>
              <FormLabel>Quality</FormLabel>
              <Input
                type="number"
                size="sm"
                placeholder="0 - 100 (multiple of 10)"
                name="quality"
                onChange={onChangeHandler}
              />
            </Box>
          </Flex>
          <Flex gap={"10px"}>
            {/* CROP*/}
            <Box>
              <FormLabel>Crop</FormLabel>
              <Input
                size={"sm"}
                placeholder="Crop"
                name="crop"
                onChange={onChangeHandler}
              />
            </Box>
            {/* USER AGENT*/}
            <Box>
              <FormLabel>User agent</FormLabel>
              <Input
                size={"sm"}
                placeholder="User agent"
                name="user_agent"
                onChange={onChangeHandler}
              />
            </Box>
            {/* SELECTOR*/}
            <Box>
              <FormLabel>Selector</FormLabel>
              <Input
                size={"sm"}
                placeholder="Selector"
                name="selector"
                onChange={onChangeHandler}
              />
            </Box>
          </Flex>

          <Flex gap={"10px"}>
            {/* CSS INJUCTION*/}
            <Box>
              <FormLabel>Css injuction</FormLabel>
              <Input
                size={"sm"}
                placeholder="Css injuction"
                name="css_injuction"
                onChange={onChangeHandler}
              />
            </Box>
            {/* ACCEPT LANG*/}
            <Box>
              <FormLabel>Accept lang</FormLabel>
              <Input
                size={"sm"}
                placeholder="Accept lang"
                name="accept_lang"
                onChange={onChangeHandler}
              />
            </Box>
          </Flex>
        </MenuGroup>
        {/* EMULATE*/}
      </MenuList>
    </Menu>
  );
};

export default UrlFilter;
