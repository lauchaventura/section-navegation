import "../styles/globals.css";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "../styles/theme";

import "@fontsource/epilogue/400.css";
import "@fontsource/epilogue/500.css";
import "@fontsource/epilogue/600.css";
import "@fontsource/epilogue/700.css";
import "@fontsource/epilogue/800.css";
import "@fontsource/epilogue/900.css";

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
