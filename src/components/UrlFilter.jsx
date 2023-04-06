import {
  Checkbox,
  CheckboxGroup,
  Flex,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaFilter } from "react-icons/fa";
const UrlFilter = () => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FaFilter />}
        variant="solid"
        colorScheme="green"
      />
      <MenuList>
          {/* FULL PAGE SCREENSHOT*/}
        <MenuGroup title="Screenshot size" type="checkbox">
          <CheckboxGroup colorScheme="green">
            <Stack spacing={"5"} p="10px">
              <Checkbox>Capture full page</Checkbox>
            </Stack>
          </CheckboxGroup>

          {/* SCREENSHOT SIZE*/}
          <MenuItem value="w/h">
            <Flex gap={"10px"}>
              <Text>Width</Text>
              <Input size={"sm"} placeholder="width" />
              <Text>Height</Text>
              <Input size={"sm"} placeholder="heigth" />
            </Flex>
          </MenuItem>
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
          {/* DELAY*/}
          {/* CSS INJUCTION*/}
          {/* USER AGENT*/}
          {/* HIDE POPUP*/}
          {/* ACCEPT GDPR BANNER*/}
          {/* EXPORT FORMAT*/}
          {/* SELECTOR*/}
          {/* ACCEPT LANG*/}
          {/* DEVICE*/}
          {/* EMULATE*/}
          {/* DEVICE SCALE FACTOR*/}
          {/* PREFERS COLOR SCHEME*/}
          {/* QUALITY*/}
          {/* CROP*/}

      </MenuList>
    </Menu>
  );
};

export default UrlFilter;
