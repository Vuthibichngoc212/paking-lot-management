import * as Yup from "yup";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email không được để trống")
    .matches(EMAIL_REGEX, "Email không hợp lệ"),
  password: Yup.string().required("Mật khẩu không được để trống"),
  // .min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
});

export const registerSchema = Yup.object().shape({
  fullName: Yup.string().trim().required("Họ tên không được để trống"),
  email: Yup.string()
    .required("Email không được để trống")
    .matches(EMAIL_REGEX, "Email không hợp lệ"),
  password: Yup.string().required("Mật khẩu không được để trống"),
  retypePassword: Yup.string().required("Mật khẩu không được để trống"),
});

export const usersSchema = Yup.object().shape({
  fullName: Yup.string().trim().required("Họ tên không được để trống"),
  licensePlate: Yup.string()
    .trim()
    .required("Nhập biển số xe không được để trống"),
  parkingSlot: Yup.string()
    .trim()
    .required("Khu vực đỗ xe không được để trống"),
});
