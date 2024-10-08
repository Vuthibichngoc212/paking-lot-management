/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box, Card, Grid, Link, Typography } from "@mui/material";
import { registerSchema } from "../../helpers/validation-schema.helpers";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { Form, Formik } from "formik";
import logo from "../../../../assets/images/logo.png";
import { LoadingButton } from "@mui/lab";
import FormikTextField from "../../../../components/common/FormElements/FormikTextField/FormikTextField";
import HeaderTitle from "../../../../components/layout/HeaderTitle/HeaderTitle";
import { useRegisterUserMutation } from "../../../../redux/api/api.caller";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IUser } from "../../../../interfaces/users";

interface RegisterProps {
  onToggleForm: (formName: string) => void;
}

const Register: React.FC<RegisterProps> = ({ onToggleForm }) => {
  const methods = useForm({
    resolver: yupResolver(registerSchema),
  });

  const [addUserRegister] = useRegisterUserMutation();

  const handleSubmit = async (
    values: IUser,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    try {
      await addUserRegister({
        role: "user",
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      }).unwrap();
      toast.success("Đăng ký thành công!", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      setTimeout(() => {
        onToggleForm("login");
      }, 2100);
    } catch {
      toast.error("Đăng ký không thành công kiểm tra lại", {
        theme: "colored",
        autoClose: 2000,
        position: "bottom-right",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <ToastContainer />
      <Box>
        <Grid container>
          <Card
            sx={{
              width: "49.4rem",
              padding: "6.4rem 4rem",
              borderRadius: "1.6rem",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 15px 5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: "3.6rem",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ height: "60px", width: "320px" }}
              />
            </Box>
            <Box>
              <HeaderTitle
                title="Đăng ký"
                variant="heading1_bold"
                customStyles={{
                  marginBottom: "2.8rem",
                  textAlign: "center",
                  mb: "3.2rem",
                }}
              />
              <Formik
                initialValues={{
                  role: "user",
                  fullName: "",
                  email: "",
                  password: "",
                  retypePassword: "",
                }}
                validationSchema={registerSchema}
                // onSubmit={(values: RegisterRequestBody) => {
                //   console.log(values);
                // }}
                onSubmit={(values, { setSubmitting }) =>
                  handleSubmit(values, setSubmitting)
                }
              >
                {({ values, setFieldValue, handleBlur }) => (
                  <Form>
                    <FormikTextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      id="fullName"
                      topLabel="Họ tên"
                      name="fullName"
                      placeholder="Nhập họ tên"
                      onBlur={(e: any) => {
                        handleBlur(e);
                        setFieldValue("fullName", values.fullName.trim(), true);
                      }}
                      sx={{ marginBottom: "2.4rem" }}
                    />
                    <FormikTextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      id="email"
                      topLabel="Email"
                      name="email"
                      placeholder="Nhập email"
                      onBlur={(e: any) => {
                        handleBlur(e);
                        setFieldValue("email", values.email.trim(), true);
                      }}
                      sx={{ marginBottom: "2.4rem" }}
                    />
                    <FormikTextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      name="password"
                      topLabel="Mật khẩu"
                      placeholder="Nhập mật khẩu"
                      id="password"
                      type={"password"}
                      sx={{
                        marginBottom: "1.6rem",
                      }}
                    />
                    <FormikTextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      name="retypePassword"
                      topLabel="Nhập lại mật khẩu"
                      placeholder="Nhập lại mật khẩu"
                      id="retypePassword"
                      type={"password"}
                      sx={{
                        marginBottom: "1.6rem",
                      }}
                    />
                    <LoadingButton
                      fullWidth
                      variant="contained"
                      type="submit"
                      sx={{
                        background: "#1b3b6f",
                        "&:hover": {
                          background: "#1b3b6f",
                        },
                      }}
                    >
                      Đăng ký
                    </LoadingButton>
                    <Typography
                      component="h1"
                      variant="h6"
                      align="center"
                      sx={{ margin: "15px 0" }}
                    >
                      Bạn đã có tài khoản?{" "}
                      <Link
                        href="#"
                        onClick={() => onToggleForm("login")}
                        sx={{
                          color: "red",
                          textDecoration: "none",
                          "&:hover": {
                            color: "red",
                          },
                        }}
                      >
                        Đăng nhập
                      </Link>
                    </Typography>
                  </Form>
                )}
              </Formik>
            </Box>
          </Card>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default Register;
