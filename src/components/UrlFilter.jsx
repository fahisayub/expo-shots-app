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
const UrlFilter = () => {
  return (
    <Menu closeOnSelect={false} placement="bottom-end">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FaFilter />}
        variant="solid"
        colorScheme="green"
      />
      <MenuList height={"70vh"} overflowY={"scroll"} p='10px'>
        {/* FULL PAGE SCREENSHOT*/}
        <MenuGroup title="Screenshot 
        Size" type="checkbox">
          <CheckboxGroup colorScheme="green">
            <Stack spacing={"5"} p="10px">
              <Checkbox>Capture full page</Checkbox>
            </Stack>
          </CheckboxGroup>

          {/* SCREENSHOT SIZE*/}
            <Flex gap={"10px"}>
              <Box>
                <FormLabel>Width</FormLabel>
                <Input size={"sm"} placeholder="width" />
              </Box>
              <Box>
                <FormLabel>Height</FormLabel>
                <Input size={"sm"} placeholder="heigth" />
              </Box>
            </Flex>
        </MenuGroup>
        <MenuDivider />
        {/* WAIT UNTIL*/}
        <MenuGroup defaultValue="load" title="Wait Until" type="radio">
          <RadioGroup defaultValue="load" colorScheme="green" p="10px">
            <Stack spacing={5} direction="row">
              <Radio value="load">load</Radio>
              <Radio value="domcontentloaded">domcontentloaded</Radio>
              <Radio value="networkidle0">networkidle0</Radio>
              <Radio value="networkidle2">networkidle2</Radio>
            </Stack>
          </RadioGroup>
        </MenuGroup>
        <MenuDivider />
        {/* EXPORT FORMAT*/}
        <MenuGroup title="Export Format" type="radio">
          <RadioGroup defaultValue="png" colorScheme="green" p="10px">
            <Stack spacing={5} direction="row">
              <Radio value="png">PNG</Radio>
              <Radio value="jpeg">JPEG</Radio>
              <Radio value="webp">WEBP</Radio>
            </Stack>
          </RadioGroup>
        </MenuGroup>
        <MenuDivider />
        {/* DEVICE*/}
        <MenuGroup title="Device" type="radio">
          <RadioGroup defaultValue="laptop" colorScheme="green" p="10px">
            <Stack spacing={5} direction="row">
              <Radio value="laptop">Laptop</Radio>
              <Radio value="mobile">Mobile</Radio>
              <Radio value="tablet">Tablet</Radio>
              <Radio value="desktop">Desktop</Radio>
            </Stack>
          </RadioGroup>
        </MenuGroup>
        <MenuDivider />
        {/* PREFERS COLOR SCHEME*/}
        <MenuGroup title="Prefers color scheme" type="radio">
          <RadioGroup defaultValue="light" colorScheme="green" p="10px">
            <Stack spacing={5} direction="row">
              <Radio value="light">Light</Radio>
              <Radio value="dark">Dark</Radio>
            </Stack>
          </RadioGroup>
        </MenuGroup>
        <MenuDivider />

        <MenuGroup>
            <Flex gap={"10px"}>
              {/* DELAY*/}
              <Box>
                <FormLabel>Delay</FormLabel>
                <Input size={"sm"} type="number" placeholder="delay" />
              </Box>
              {/* DEVICE SCALE FACTOR*/}
              <Box>
                <FormLabel>Device Scale Factor</FormLabel>
                <Input
                  size={"sm"}
                  type="number"
                  placeholder="Device scale factor"
                />
              </Box>
            </Flex>
            <Flex gap={"10px"}>
              {/* CROP*/}
              <Box>
                <FormLabel>Crop</FormLabel>
                <Input size={"sm"} placeholder="Crop" />
              </Box>
              {/* USER AGENT*/}
              <Box>
                <FormLabel>User agent</FormLabel>
                <Input size={"sm"} placeholder="User agent" />
              </Box>
            </Flex>
          
            <Flex gap={"10px"}>
              {/* CSS INJUCTION*/}
              <Box>
                <FormLabel>Css injuction</FormLabel>
                <Input size={"sm"} placeholder="Css injuction" />
              </Box>
              {/* QUALITY*/}
              <Box>
                <FormLabel>Quality</FormLabel>
                <Input
                  type='number'
                  size="sm"
                  placeholder="0 - 100 (multiple of 10)"
                />
              </Box>
            </Flex>
            <Flex gap={"10px"}>
              {/* SELECTOR*/}
              <Box>
                <FormLabel>Selector</FormLabel>
                <Input size={"sm"} placeholder="Selector" />
              </Box>
              {/* ACCEPT LANG*/}
              <Box>
                <FormLabel>Accept lang</FormLabel>
                <Input size={"sm"} placeholder="Accept lang" />
              </Box>
            </Flex>
          <CheckboxGroup colorScheme="green">
            <Stack spacing={"5"} p="10px">
              {/* HIDE POPUP*/}
              <Checkbox>Hide Popup</Checkbox>
              {/* ACCEPT GDPR BANNER*/}
              <Checkbox>Accept gdpr banner</Checkbox>
            </Stack>
          </CheckboxGroup>
        </MenuGroup>
        <MenuDivider />
        {/* EMULATE*/}
      </MenuList>
    </Menu>
  );
};

export default UrlFilter;
