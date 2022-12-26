// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/tajawal";

const theme = extendTheme({
  body: {
    // make rtl is the default direction
    direction: "rtl",
  },
  fonts: {
    body: "Tajawal",
    heading: "Tajawal",
  },
  colors: {
    lightBlue: "#0096C7",
    whiteBlue: "#CAF0F8",
    darkBlue: "#03045E",
  },
});

export default theme;
