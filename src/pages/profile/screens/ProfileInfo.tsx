/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  InputLabel,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import HeaderTitle from "../../../components/layout/HeaderTitle/HeaderTitle";
import { useStyles } from "./ProfileInfo.styles";
import EditIcon from "@mui/icons-material/Edit";
import Img from "../../../assets/images/avt.png";
import CustomTextField from "../../../components/common/FormElements/CustomTextField/CustomTextField";
import CRUDModal from "../../../components/common/Modal/CRUDModal/CRUDModal";
import { FormProvider, useForm } from "react-hook-form";
import { CustomSelectField } from "../../../components/common/FormElements/CustomSelectField/CustomSelectField";
import CustomDatePicker from "../../../components/common/FormElements/CustomDatePicker/CustomDatePicker";
import { createUsersSchema } from "../components/helpers/validationSchema.helpers";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const users = [
  {
    name: "Nguyễn Văn A",
    phone: "0901234567",
    code: "MS12345",
    email: "nguyenvana@example.com",
  },
];

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ProfileInfo = () => {
  const classes = useStyles();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const methods = useForm({
    resolver: yupResolver(createUsersSchema),
    mode: "onSubmit",
  });

  const handleSubmitForm = (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("code", data.code);
    formData.append("phone", data.phone);
    formData.append("email", data.email);

    setIsOpenModal(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];

    const imageUrl = URL.createObjectURL(file);

    setPreviewImage(imageUrl);
  };

  return (
    <Container maxWidth="xl">
      <HeaderTitle
        title="Trang cá nhân"
        customStyles={{ marginBottom: "2.4rem" }}
      />
      <Card className={classes.card}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "2.4rem",
          }}
        >
          <Typography variant="title1">Thông tin cơ bản</Typography>
          <Button
            variant="contained"
            size="medium"
            startIcon={<EditIcon />}
            onClick={() => setIsOpenModal(true)}
          >
            Cập nhật
          </Button>
        </Box>
        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "21% 1fr",
              gap: "3.2rem",
              mb: "1.6rem",
            }}
          >
            <Box sx={{ width: "100%", height: "35.1rem" }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  imageRendering: "crisp-edges",
                  aspectRatio: "1/1",
                }}
                src={Img}
                alt="logo"
              />
            </Box>
            <Box>
              <Box>
                <InputLabel
                  sx={{
                    mb: "0.2rem",
                    fontSize: "1.6rem",
                    fontFamily: "Inter-SemiBold",
                    color: "text.primary",
                  }}
                >
                  Tên người dùng
                </InputLabel>
                <TextField
                  defaultValue={users[0]?.name}
                  sx={{ mb: "1.6rem" }}
                  size="small"
                  multiline
                  maxRows={3}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
              <Grid container spacing="2.4rem">
                <Grid
                  item
                  xs={6}
                  sx={{
                    "&.MuiGrid-item": { padding: "0", paddingRight: "24px" },
                  }}
                >
                  <Box>
                    <InputLabel
                      sx={{
                        mb: "0.2rem",
                        fontSize: "1.6rem",
                        fontFamily: "Inter-SemiBold",
                        color: "text.primary",
                      }}
                    >
                      Ngày sinh
                    </InputLabel>
                    <TextField
                      defaultValue="08/06/2003"
                      sx={{ mb: "1.6rem" }}
                      size="small"
                      multiline
                      maxRows={3}
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    "&.MuiGrid-item": { padding: "0", paddingRight: "24px" },
                  }}
                >
                  <Box>
                    <InputLabel
                      sx={{
                        mb: "0.2rem",
                        fontSize: "1.6rem",
                        fontFamily: "Inter-SemiBold",
                        color: "text.primary",
                      }}
                    >
                      Giới tính
                    </InputLabel>
                    <TextField
                      defaultValue="Nam"
                      sx={{ mb: "1.6rem" }}
                      size="small"
                      multiline
                      maxRows={3}
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing="2.4rem">
                <Grid
                  item
                  xs={6}
                  sx={{
                    "&.MuiGrid-item": { padding: "0", paddingRight: "24px" },
                  }}
                >
                  <Box>
                    <InputLabel
                      sx={{
                        mb: "0.2rem",
                        fontSize: "1.6rem",
                        fontFamily: "Inter-SemiBold",
                        color: "text.primary",
                      }}
                    >
                      Số điện thoại
                    </InputLabel>
                    <TextField
                      defaultValue={users[0]?.phone}
                      sx={{ mb: "1.6rem" }}
                      size="small"
                      multiline
                      maxRows={3}
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    "&.MuiGrid-item": { padding: "0", paddingRight: "24px" },
                  }}
                >
                  <Box>
                    <InputLabel
                      sx={{
                        mb: "0.2rem",
                        fontSize: "1.6rem",
                        fontFamily: "Inter-SemiBold",
                        color: "text.primary",
                      }}
                    >
                      Mã số
                    </InputLabel>
                    <TextField
                      defaultValue={users[0]?.code}
                      sx={{ mb: "1.6rem" }}
                      size="small"
                      multiline
                      maxRows={3}
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box>
                <InputLabel
                  sx={{
                    mb: "0.2rem",
                    fontSize: "1.6rem",
                    fontFamily: "Inter-SemiBold",
                    color: "text.primary",
                  }}
                >
                  Email
                </InputLabel>
                <TextField
                  defaultValue={users[0]?.email}
                  sx={{ mb: "1.6rem" }}
                  size="small"
                  multiline
                  maxRows={3}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>

      <CRUDModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        headerTitle="Cập nhật trang cá nhân"
        cancelButtonLabel="Hủy"
        submitButtonLabel="Cập nhật"
        onSubmit={methods.handleSubmit(handleSubmitForm)}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "30.5rem" }}>
            <Box
              sx={{
                position: "relative",
                width: "24.8rem",
                height: "32.2rem",
                border: "1px dashed #D9D9D9",
                backgroundColor: !previewImage ? "#F2F2F2" : "none",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              {previewImage && (
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={previewImage}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              )}
              <Box
                sx={{
                  position: "absolute",
                  top: !previewImage ? "50%" : "87%",
                  left: !previewImage ? "50%" : "90%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "24px",
                  color: "#fff",
                  cursor: "pointer",
                  borderRadius: "50%",
                  padding: "8px",
                }}
              >
                <label htmlFor="file-upload-button">
                  <IconButton
                    component="label"
                    className={classes.basebuttonRoot}
                    sx={{ backgroundColor: "#f2f2f2", zIndex: 1 }}
                  >
                    {!previewImage ? <AddIcon /> : <CameraAltOutlinedIcon />}{" "}
                    <VisuallyHiddenInput
                      type="file"
                      id="file-upload-button"
                      onChange={handleFileChange}
                    />
                  </IconButton>
                </label>
              </Box>
            </Box>
          </Box>
          <Box>
            <FormProvider {...methods}>
              <form>
                <CustomTextField
                  name="name"
                  label="Tên người dùng"
                  control={methods.control}
                  required
                />
                <Grid container spacing="2.4rem">
                  <Grid
                    item
                    xs={6}
                    sx={{
                      "&.MuiGrid-item": {
                        padding: "0",
                        paddingRight: "24px",
                      },
                    }}
                  >
                    <CustomDatePicker
                      control={methods.control}
                      name="dateOfBirth"
                      label="Ngày sinh"
                      variant="outlined"
                      size="small"
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      "&.MuiGrid-item": {
                        padding: "0",
                        paddingRight: "24px",
                      },
                    }}
                  >
                    <CustomSelectField
                      name="sex"
                      label="Giới tính"
                      control={methods.control}
                      options={[
                        { label: "Nam", value: 1 },
                        { label: "Nữ", value: 2 },
                      ]}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing="2.4rem">
                  <Grid
                    item
                    xs={6}
                    sx={{
                      "&.MuiGrid-item": {
                        padding: "0",
                        paddingRight: "24px",
                      },
                    }}
                  >
                    <CustomTextField
                      name="phone"
                      label="Số điện thoại"
                      control={methods.control}
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      "&.MuiGrid-item": {
                        padding: "0",
                        paddingRight: "24px",
                      },
                    }}
                  >
                    <CustomTextField
                      name="code"
                      label="Mã số"
                      control={methods.control}
                      required
                    />
                  </Grid>
                </Grid>

                <CustomTextField
                  name="email"
                  label="Email"
                  control={methods.control}
                  required
                />
              </form>
            </FormProvider>
          </Box>
        </Box>
      </CRUDModal>
    </Container>
  );
};

export default ProfileInfo;
