import { makeStyles } from "@mui/styles";
import theme from "../../../../themes/theme.d";

export const useStyles = makeStyles(() => ({
  formSelect: {
    "&.MuiBox-root": {
      width: "100%",
    },

    "&.MuiFormControl-root": {
      width: "7.1 rem",
      borderRadius: "32px",
      height: "2.8rem",
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.palette.secondary.main,
    },
    "&.MuiSelect-select": {
      width: "7.1rem",
      borderRadius: "12px",
      color: theme.palette.neutral.main,
    },
    "& .MuiInputBase-root": {
      width: "8.9rem",
    },

    "& .MuiSelect-select": {
      width: "7.1 rem",
      borderRadius: "12px",
      // backgroundColor: theme.palette.secondary.main,
      color: theme.palette.neutral.black,
      border: "none",

      "&:focus": {
        outline: 0,
        boxShadow: "none",
        borderRadius: "12px",
      },
    },

    // '& .MuiSelect-icon': {
    // 	color: theme.palette.common.white
    // },
    "& .MuiSelect-icon:hover": {
      color: theme.palette.secondary.dark,
    },
    "&:focus": {
      outline: 0,
      boxShadow: "none",
    },
  },
}));
