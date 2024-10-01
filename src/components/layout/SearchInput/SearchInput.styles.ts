import { makeStyles } from "@mui/styles";
import theme from "../../../themes/theme.d";

export const useStyles = makeStyles(() => ({
  searchInputRoot: {
    "& .MuiOutlinedInput-input::placeholder": {
      fontFamily: "Inter",
      fontSize: 14,
    },
    "&.MuiInputBase-root": {
      // width: '32%',
      height: "4rem",
      borderRadius: "0.8rem",
      border: "none",
      // thêm border box shadow
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",

      "& .MuiIconButton-root:focus": {
        outline: "none",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.neutral.black,
    },
  },
}));
