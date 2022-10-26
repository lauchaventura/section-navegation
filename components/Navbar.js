import React from "react";
import CalendarPic from "../public/images/icon-calendar.svg";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Flex,
  Box,
  Text,
  Button,
  Spacer,
  Image,
  Stack,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";

import {
  ArrowUpDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import DrawerMobile from "./DrawerMobile";
const Navbar = () => {
  return (
    <div>
      <Flex p={6} color='mediumGray'>
        <Box alignItems='center' display='flex'>
          <Image src='./images/logo.svg' />

          <Box display={{base: "none", lg: "flex"}} gap={8} ml={20}>
            <Menu>
              {({isOpen}) => (
                <>
                  <MenuButton
                    _hover={{color: "almostBlack"}}
                    _active={{color: "almostBlack"}}
                  >
                    {isOpen ? (
                      <>
                        <Box display='flex' alignItems='center'>
                          <Text>Features</Text>
                          <ChevronUpIcon />
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box display='flex' alignItems='center'>
                          <Text>Features</Text>
                        </Box>
                      </>
                    )}
                  </MenuButton>
                  <MenuList
                    borderRadius='xl'
                    border='0px'
                    boxShadow='2xl'
                    bg='white'
                  >
                    <MenuItem>
                      <Image pb={1} src='./images/icon-todo.svg' />
                      <Text ml={3}>Todo List</Text>
                    </MenuItem>

                    <MenuItem>
                      <Image pb={1} src='./images/icon-calendar.svg' />
                      <Text ml={3}>Calendar</Text>
                    </MenuItem>
                    <MenuItem>
                      <Image pb={1} src='./images/icon-reminders.svg' />
                      <Text ml={3}>Reminders</Text>
                    </MenuItem>
                    <MenuItem>
                      <Image pb={1} src='./images/icon-planning.svg' />
                      <Text ml={3}>Planning</Text>
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>

            <Menu>
              {({isOpen}) => (
                <>
                  <MenuButton
                    _hover={{color: "almostBlack"}}
                    _active={{color: "almostBlack"}}
                  >
                    {isOpen ? (
                      <>
                        <Box display='flex' alignItems='center'>
                          <Text>Company</Text>
                          <ChevronUpIcon />
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box display='flex' alignItems='center'>
                          <Text>Company</Text>
                          <ChevronDownIcon />
                        </Box>
                      </>
                    )}
                  </MenuButton>
                  <MenuList
                    border='0px'
                    borderRadius='xl'
                    boxShadow='2xl'
                    bg='white'
                  >
                    <MenuItem>History</MenuItem>
                    <MenuItem>Our Team</MenuItem>
                    <MenuItem>Blog</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
            <Text
              cursor='pointer'
              _hover={{
                color: "almostBlack",
              }}
            >
              Careers
            </Text>
            <Text
              cursor='pointer'
              _hover={{
                color: "almostBlack",
              }}
            >
              {" "}
              About
            </Text>
          </Box>
        </Box>
        <Spacer />
        <Box display={{base: "none", lg: "flex"}} alignItems='center' gap={8}>
          <Text
            cursor='pointer'
            _hover={{
              color: "almostBlack",
            }}
          >
            Login
          </Text>
          <Button
            borderRadius='2xl'
            border='2px'
            variant='outline'
            borderColor='mediumGray'
            _hover={{
              color: "almostBlack",
              borderColor: "almostBlack",
            }}
          >
            Register
          </Button>
        </Box>
        <Box display={{base: "flex", lg: "none"}}>
          <DrawerMobile />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
