import { makeStyles } from "@mui/styles";
import theme from "../../../themes/theme.d";

export const useStyles = makeStyles(() => ({
  root: {
    "& .MuiPaper-root": {
      padding: theme.spacing(3),
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    },
    "&.MuiBackdrop-root": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
  dialogTitle: {
    "&.MuiTypography-root": {
      padding: 0,
    },
  },
  dialogContent: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dialogActions: {
    "&.MuiDialogActions-root": {
      padding: 0,
    },
  },
}));
