import { COLORS } from "@/constants/colors";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    min: "320px",
    mobileS: "370px",
    mobileM: "400px",
    tablet: "700px",
    desktop: "1050px",
    desktopM: "1200px",
  },
  space: {
    x: "4px",
    0.5: "8px",
    1: "10px",
    2: "18px",
    3: "22px",
    4: "28px",
    5: "35px",
    6: "44px",
    7: "55px",
    8: "69px",
    9: "86px",
    10: "107px",
    11: "134px",
    12: "168px",
  },
  components: {
    Text: {
      variants: {
        paragraph: {
          fontFamily: "Montserrat-Medium",
          fontSize: "16px",
          lineHeight: "26px",
        },
        gloock: {
          fontFamily: "Gloock",
        },
        h1: {
          fontFamily: "Montserrat-Bold",
          fontSize: "50px",
          lineHeight: "80px",
        },
        h2: {
          fontFamily: "Montserrat-Bold",
          fontSize: "35px",
          lineHeight: "45px",
        },
        h3: {
          fontFamily: "Montserrat-Bold",
          fontSize: "30px",
          lineHeight: "40px",
        },
        h4: {
          fontFamily: "Montserrat-Bold",
          fontSize: "25px",
          lineHeight: "35px",
        },
        h5: {
          fontFamily: "Montserrat-Bold",
          fontSize: "18px",
          lineHeight: "28px",
        },
        h6: {
          fontFamily: "Montserrat-Bold",
          fontSize: "14px",
          lineHeight: "24px",
        },
      },
    },
  },
});
