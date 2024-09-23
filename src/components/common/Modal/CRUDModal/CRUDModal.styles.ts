import { makeStyles } from "@mui/styles";
import theme from "../../../../themes/theme.d";

export const useStyles = makeStyles(() => ({
  root: {
    padding: "3.2rem",
  },
  boxWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "2.4rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: theme.palette.neutral.main,
    boxShadow: "24px",
  },
}));
