/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Card, Grid, Link, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import logo from "../../../../assets/images/logo.png";
import LoadingButton from "@mui/lab/LoadingButton";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helpers/validation-schema.helpers";
import HeaderTitle from "../../../../components/layout/HeaderTitle/HeaderTitle";
import FormikTextField from "../../../../components/common/FormElements/FormikTextField/FormikTextField";
import { useLoginMutation } from "../../../../redux/api/api.caller";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IUser } from "../../../../interfaces/users";
import { useNavigate } from "react-router-dom";

interface SignInScreenProps {
  onToggleForm: (formName: string) => void;
}

const SignInScreen: React.FC<SignInScreenProps> = ({ onToggleForm }) => {
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [loginUser] = useLoginMutation();

  const handleSubmit = async (
    values: IUser,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    try {
      const response = await loginUser({
        email: values.email,
        password: values.password,
      }).unwrap();

      if (response) {
        toast.success("Đăng nhập thành công!", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Email hoặc mật khẩu không đúng!", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <ToastContainer />

      <Box sx={{ maxHeight: "99vh" }}>
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
                title="Đăng nhập"
                variant="heading1_bold"
                customStyles={{
                  marginBottom: "2.8rem",
                  textAlign: "center",
                  mb: "3.2rem",
                }}
              />
              <Formik
                initialValues={{ role: "", email: "", password: "" }}
                validationSchema={loginSchema}
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
                    <Typography sx={{ fontSize: "12px", marginBottom: "10px" }}>
                      <Link
                        href="#"
                        sx={{
                          fontSize: "12px",
                          color: "red",
                          textDecoration: "none",
                          "&:hover": {
                            color: "red",
                          },
                        }}
                      >
                        Quên mật khẩu ?
                      </Link>
                    </Typography>
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
                      Đăng nhập
                    </LoadingButton>
                    <Typography
                      component="h1"
                      variant="h6"
                      align="center"
                      sx={{ margin: "15px 0" }}
                    >
                      Bạn chưa có tài khoản?{" "}
                      <Link
                        href="#"
                        onClick={() => onToggleForm("register")}
                        sx={{
                          color: "red",
                          textDecoration: "none",
                          "&:hover": {
                            color: "red",
                          },
                        }}
                      >
                        Đăng ký
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

export default SignInScreen;
