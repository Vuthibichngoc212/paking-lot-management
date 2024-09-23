import { Navigate, useOutlet } from "react-router-dom";

import { Box, Stack } from "@mui/material";
import styles from "./layouts.module.css";
import SideBar from "../SidebarLayout/SidebarLayout";
import Header from "../Header/Header";
// import { useAppSelector } from "../../../redux/store";
// import { userSelector } from "../../../redux/features/users";

function ProtectedLayout() {
  const outlet = useOutlet();
  // const user = useAppSelector(userSelector);

  // if (!user || user.length === 0) {
  //   return <Navigate to="/" />;
  // }

  return (
    <Box className={styles.container}>
      <SideBar />
      <Stack
        sx={{
          width: "100%",
        }}
      >
        <Header />
        <Stack
          sx={{
            margin: "4rem 0 0 0",
            padding: "0 2.4rem",
          }}
        >
          <Box sx={{ mb: "6.5rem" }}> {outlet}</Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ProtectedLayout;
