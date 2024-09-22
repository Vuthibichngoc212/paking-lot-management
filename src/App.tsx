import CssBaseline from "@mui/material/CssBaseline";
import AppRoute from "./routes/AppRoute";
import "./styles/index.styles.css";

import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./themes/theme.d";

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <AppRoute />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
