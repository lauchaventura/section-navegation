import Head from "next/head";

import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import {
  Box,
  Flex,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Button,
  Grid,
  Center,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <Box bg='almostWhite' width='100%' height='100vh' color='mediumGray'>
        <Navbar />
        <Flex
          gridTemplateColumns='repeat(2,1fr)'
          columns={[1, 2]}
          p={{base: "0", lg: "5"}}
          flexDirection={{base: "column-reverse", lg: "column"}}
          display={{base: "flex", lg: "grid"}}
        >
          <Box
            textAlign={{base: "center", lg: "start"}}
            pt={{base: "8", lg: "20"}}
            pl={{base: "2", lg: "16"}}
            pr={{base: "2", lg: "0"}}
          >
            <Heading
              color='almostBlack'
              fontSize={{base: "35px", lg: "89px"}}
              fontWeight={700}
              lineHeight={0.9}
            >
              Make remote work
            </Heading>
            <Text mt={{base: "2", lg: "9"}}>
              Get your in sync, no matter your location. Streamline processes,
              create team rituals, and watch productivity soar.
            </Text>
            <Button
              borderRadius='xl'
              bg='almostBlack'
              color='almostWhite'
              mt={{base: "3", lg: "9"}}
              _hover={{
                bg: "white",
                color: "almostBlack",
                border: "1px",
              }}
            >
              Learn More
            </Button>
            <Center>
              <SimpleGrid
                display={{base: "flex", lg: "grid"}}
                columns={[1, 2, 3, 4]}
                pt={{base: "10", lg: "14"}}
                spacingX={3}
              >
                <Box>
                  <Image src='./images/client-databiz.svg' alt='Dan Abramov' />
                </Box>
                <Box>
                  <Image
                    src='./images/client-audiophile.svg'
                    alt='Dan Abramov'
                  />
                </Box>
                <Box>
                  <Image src='./images/client-meet.svg' alt='Dan Abramov' />
                </Box>
                <Box>
                  <Image src='./images/client-maker.svg' alt='Dan Abramov' />
                </Box>
              </SimpleGrid>
            </Center>
          </Box>
          <Box align='center'>
            <Box maxW='380px'>
              <Image
                align='center'
                src='./images/image-hero-desktop.png'
                alt='Dan Abramov'
                display={{base: "none", lg: "flex"}}
              />
              <Image
                display={{base: "flex", lg: "none"}}
                align='center'
                src='./images/image-hero-mobile.png'
                alt='Dan Abramov'
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
