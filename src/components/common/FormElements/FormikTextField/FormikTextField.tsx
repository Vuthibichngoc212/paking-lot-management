/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Field, useFormikContext } from "formik";
import { get } from "lodash";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import theme from "../../../../themes/theme.d";

interface FormikTextFieldProps {
  defaultLabel?: string;
  topLabel?: string;
  id?: string;
  name: string;
  variant?: "filled" | "outlined" | "standard";
  disabled?: boolean;
  isShrinkInputLabel?: boolean;
  required?: boolean;
  customComponentStyles?: any;
  type?: string;
  [x: string]: any;
}

const FormikTextField = ({
  defaultLabel,
  topLabel,
  isShrinkInputLabel = false,
  id,
  required = false,
  name,
  variant = "filled",
  disabled,
  customComponentStyles,
  type,
  ...props
}: FormikTextFieldProps) => {
  const { errors, values, touched, handleBlur, handleChange } =
    useFormikContext();
  const [showPassword, setShowPassword] = useState(false);
  const error = get(errors, name) && get(touched, name);
  const errorText = get(errors, name);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <Box>
      {topLabel && (
        <Typography
          variant="body2_regular"
          sx={{
            mb: "0.4rem",
            display: "block",
            color: theme.palette.neutral.coolGray,
          }}
        >
          {topLabel}
          {required && (
            <Typography
              sx={{ color: "red", position: "relative", top: "-2px" }}
              component="span"
            >
              *
            </Typography>
          )}
        </Typography>
      )}
      <Field
        disabled={disabled}
        component={TextField}
        onChange={handleChange}
        onBlur={handleBlur}
        id={id || name}
        name={name}
        variant={variant}
        error={!!error}
        value={get(values, name) || ""}
        autoComplete="off"
        label={defaultLabel}
        helperText={error && errorText}
        InputLabelProps={{ shrink: isShrinkInputLabel }}
        InputProps={{
          sx: {
            height: "4rem",
            borderRadius: "0.8rem",
            fontSize: "1.4rem",
            lineHeight: "1.8rem",
            ...customComponentStyles,
          },
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        FormHelperTextProps={{
          sx: {
            fontSize: "1rem",
            marginLeft: 0,
            marginTop: "0.5rem",
          },
        }}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        {...props}
      />
    </Box>
  );
};

export default FormikTextField;
