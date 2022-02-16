import { TextField } from "@mui/material";
import { FieldProps } from "formik";
import React from "react";

export const TextFieldWrapper = ({
  field,
  form: { errors },
  ...props
}: FieldProps): JSX.Element => {
  return (
    <TextField
      {...field}
      {...props}
      error={!!errors[field.name]}
      helperText={errors[field.name]}
    />
  );
};
