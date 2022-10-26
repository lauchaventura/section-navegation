import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    almostWhite: "hsl(0, 0%, 98%)",
    mediumGray: " hsl(0, 0%, 41%)",
    almostBlack: "hsl(0, 0%, 8%)",
  },

  fonts: {
    heading: `'Epilogue', sans-serif`,
    body: `'Epilogue', sans-serif`,
  },
});
