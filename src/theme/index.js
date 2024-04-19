import {
  withDefaultColorScheme,
  withDefaultVariant,
  theme as base,
  extendTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

const brandRing = {
  _focus: {
    ringColor: "brand.500",
    ring: 2,
  },
};

const theme = extendTheme(
  {
    components: {
      Button: {
        variants: {
          primary: (props) => ({
            _active: {
              backgroundColor: mode("brand.700", "brand.400")(props),
            },
            _hover: {
              backgroundColor: mode("brand.600", "brand.300")(props),
            },
            backgroundColor: mode("brand.500", "brand.200")(props),
            color: mode("white", "gray.800")(props),
            rounded: "none",
            ...brandRing,
          }),
        },
      },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "none",
            ...brandRing,
          },
        },
      },
      Select: { ...inputSelectStyles },
      Input: { ...inputSelectStyles },
    },
    colors: {
      brand: {
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#8ac919",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300",
        50: "#f5fee5",
      },
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
  },
  withDefaultColorScheme({
    components: ["Checkbox"],
    colorScheme: "brand",
  }),
  withDefaultVariant({
    components: ["Input", "Select"],
    variant: "filled",
  })
);

export default theme;
