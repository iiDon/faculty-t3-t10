// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/tajawal";

const theme = extendTheme({
  body: {
    direction: "rtl",
  },
  fonts: {
    body: "Tajawal",
    heading: "Tajawal",
  },
});

export default theme;
