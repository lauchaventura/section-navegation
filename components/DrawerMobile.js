import React, {useState} from "react";
import {
  Drawer,
  Center,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Text,
  Button,
  Input,
  Box,
  Image,
  Flex,
  Stack,
  Heading,
  Grid,
} from "@chakra-ui/react";
import {
  ArrowUpDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

const Componente1 = () => (
  <>
    <Grid border='0px' bg='white' mt={4} gap={3} ml={5}>
      <Flex>
        <Image w='20px' pb={1} src='./images/icon-todo.svg' />
        <Text ml={3}>Todo List</Text>
      </Flex>

      <Flex>
        <Image w='20px' pb={1} src='./images/icon-calendar.svg' />
        <Text ml={3}>Calendar</Text>
      </Flex>

      <Flex>
        <Image w='20px' pb={1} src='./images/icon-reminders.svg' />
        <Text ml={3}>Reminders</Text>
      </Flex>

      <Flex>
        <Image w='20px' pb={1} src='./images/icon-planning.svg' />
        <Text ml={3}>Planning</Text>
      </Flex>
    </Grid>
  </>
);
const Componente2 = () => (
  <>
    <Grid border='0px' bg='white' gap={4} ml={5}>
      <Flex mt={4}>
        <Text
          cursor='pointer'
          _hover={{
            color: "almostBlack",
          }}
          ml={3}
        >
          History
        </Text>
      </Flex>

      <Flex>
        <Text
          cursor='pointer'
          _hover={{
            color: "almostBlack",
          }}
          ml={3}
        >
          Our Team
        </Text>
      </Flex>

      <Flex>
        <Text
          cursor='pointer'
          _hover={{
            color: "almostBlack",
          }}
          ml={3}
        >
          Blog
        </Text>
      </Flex>
    </Grid>
  </>
);
const DrawerMobile = () => {
  const [pulsado, setPulsado] = useState(false);
  const [pulsado2, setPulsado2] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <Box ref={btnRef} onClick={onOpen}>
        <Image cursor='pointer' src='./images/icon-menu.svg' />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        color='mediumGray'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt={16} color='mediumGray' display='inline-block'>
            <Text
              cursor='pointer'
              _hover={{
                color: "almostBlack",
              }}
              onClick={() => setPulsado(!pulsado)}
            >
              Features
            </Text>
            {pulsado ? <Componente1 /> : ""}
            <Text
              pt={5}
              cursor='pointer'
              _hover={{
                color: "almostBlack",
              }}
              onClick={() => setPulsado2(!pulsado2)}
            >
              Company
            </Text>
            {pulsado2 ? <Componente2 /> : ""}
            <Text
              cursor='pointer'
              _hover={{
                color: "almostBlack",
              }}
              pt={5}
            >
              Carrers
            </Text>
            <Text
              cursor='pointer'
              _hover={{
                color: "almostBlack",
              }}
              pt={5}
            >
              About
            </Text>
            <Center display='block' align='center'>
              <Text
                pt={6}
                cursor='pointer'
                _hover={{
                  color: "almostBlack",
                }}
              >
                Login
              </Text>
              <Box pt={4}>
                <Button
                  w='100%'
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
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerMobile;
