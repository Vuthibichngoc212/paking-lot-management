import { createTheme } from "@mui/material";

const fontFamily = ["Inter", "sans-serif"].join(",");

// Update the Typography's variant prop options
declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading1_bold: React.CSSProperties;
    subbody2_regular: React.CSSProperties;
    heading2_semibold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    heading1_bold: React.CSSProperties;
    body2_regular: React.CSSProperties;
    heading2_semibold: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading1_bold: true;
    body2_regular: true;
    heading2_semibold: true;
  }
}

// Update the Palette's color prop options
declare module "@mui/material/styles" {
  interface PaletteColorOptions {
    coolGray?: string;
    midnightBlue?: string;
  }
}

declare module "@mui/material/styles" {
  interface PaletteColor {
    coolGray?: string;
    midnightBlue?: string;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    base: Palette["primary"];
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    base?: Palette["primary"];
    neutral?: PaletteOptions["primary"];
  }
}

//custom new typo and palette
let theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily,
    allVariants: {
      fontFamily,
    },
    // heading1
    heading1_regular: {
      fontWeight: 400,
      fontSize: 32,
      lineHeight: "4rem",
    },
    heading1_medium: {
      fontWeight: 500,
      fontSize: 32,
      lineHeight: "4rem",
    },
    heading1_semibold: {
      fontWeight: 600,
      fontSize: 32,
      lineHeight: "4rem",
    },
    heading1_bold: {
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "4rem",
    },
    // heading2
    heading2_regular: {
      fontWeight: 400,
      fontSize: 28,
      lineHeight: "3.6rem",
    },
    heading2_medium: {
      fontWeight: 500,
      fontSize: 28,
      lineHeight: "3.6rem",
    },
    heading2_semibold: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "3.6rem",
    },
    heading2_bold: {
      fontWeight: 700,
      fontSize: 28,
      lineHeight: "3.6rem",
    },
    // body2
    body2_regular: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "1.8rem",
    },
    body2_medium: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "1.8rem",
    },
    body2_semibold: {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "1.8rem",
    },
    body2_bold: {
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "1.8rem",
    },
  },
  palette: {
    primary: {
      main: "#213970",
      lightSkyBlue: "#F0F7FE",
      babyBlue: "#DEEBFB",
      lightCornflowerBlue: "#C4DEF9",
      lightBlueSky: "#9BC9F5",
      mediumSkyBlue: "#6CACEE",
      ceruleanBlue: "#498CE8",
      blueSapphire: "#3470DC",
      deepSkyBlue: "#498CE8",
      royalBlue: "#294BA4",
      darkSapphire: "#213970",
      midnightBlue: "#1b3b6f",
      antiqueWhite: "#FEF6EE",
      peachPuff: "#FEE9D6",
      lightApricot: "#FBD0AD",
      peachyOrange: "#F9AF78",
      orangeSalmon: "#F58342",
      orangeTangerine: "#F26522",
      burntOrange: "#E34813",
      rustRed: "#BC3412",
      deepRed: "#962B16",
      mahoganyRed: "#792615",
      deepMaroon: "#411009",
    },
  },
});

theme = createTheme(theme, {
  palette: {
    base: theme.palette.augmentColor({
      color: {
        main: "#FFFFFF",
        black: "#000000",
      },
      name: "base",
    }),
    neutral: theme.palette.augmentColor({
      color: {
        main: "#F7F7F8",
        whisper: "#F7F7F8",
        lightGray: "#EEEEF0",
        lightSilver: "#DADADD",
        lightSlateGray: "#B9BAC0",
        coolGray: "#92939E",
        slateGray: "#757682",
        dimGray: "#5F5F6A",
        darkSlateGray: "#4D4D57",
        charcoalGray: "#42424A",
        darkCharcoalGray: "#3A3A40",
        deepCharcoal: "#141416",
      },
      name: "neutral",
    }),
  },
});

//custom button
const primaryButtonStyle = {
  backgroundColor: theme.palette.primary.orangeTangerine,
  color: theme.palette.neutral.main,
  boxShadow: "none",
  padding: "1.2rem 2.4rem",
  height: "4.2rem",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: theme.palette.primary.orangeTangerine,
    boxShadow: "none",
  },
  "&:focus": {
    outline: "none",
    boxShadow: "none",
  },
};

theme = createTheme(theme, {
  components: {
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        //variants for primary button
        {
          props: { variant: "contained", size: "large" },
          style: {
            fontSize: "1.6rem",
            height: "4.4rem",
            ...primaryButtonStyle,
          },
        },
        {
          props: { variant: "contained", size: "medium" },
          style: {
            fontSize: "1.4rem",
            height: "4rem",
            ...primaryButtonStyle,
          },
        },
        {
          props: { variant: "contained", size: "small" },
          style: {
            fontSize: "1.4rem",
            height: "4rem",
            ...primaryButtonStyle,
          },
        },
      ],
    },
  },
});

export default theme;
