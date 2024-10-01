import * as Yup from "yup";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const createUsersSchema = Yup.object().shape({
  name: Yup.string().required("Tên người dùng không được để trống"),
  phone: Yup.string()
    .required("Số điện thoại không được để trống")
    .matches(/^[0-9]+$/, "Số điện thoại chỉ chứa ký tự số")
    .min(10, "Số điện thoại phải có ít nhất 10 ký tự")
    .max(15, "Số điện thoại không được vượt quá 15 ký tự"),
  code: Yup.string().required("Mã số không được để trống"),
  email: Yup.string()
    .required("Email không được để trống")
    .matches(EMAIL_REGEX, "Email không hợp lệ"),
  image: Yup.string().required("Required"),
});
