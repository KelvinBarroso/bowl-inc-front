import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { TextFieldWrapper } from "../Fields/TextFieldWrapper.tsx";
import { UserInfo } from "../../interface";

const INITIAL_VALUES: UserInfo = {
  name: "",
  email: "",
  comment: "",
};
const validationSchema: yup.SchemaOf<UserInfo> = yup.object({
  id: yup.number(),
  name: yup
    .string()
    .typeError("Conteúdo inválido.")
    .required("Campo obrigatório.")
    .max(40),
  email: yup.string().email("E-mail inválido.").required("Campo obrigatório."),
  comment: yup.string().max(250),
});

interface UserFormProps {
  handleSubmit: (userData: UserInfo) => void;
  hasComment: boolean;
}
export const UserForm = ({
  handleSubmit,
  hasComment,
}: UserFormProps): JSX.Element => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        width: 600,
        flexDirection: "column",
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4">
          {hasComment ? "Comment," : "Subscribe,"}
        </Typography>
        <Typography variant="body1">
          {hasComment ? "and join our community." : "and discover the future."}
        </Typography>
      </Box>
      <Formik
        initialValues={INITIAL_VALUES}
        enableReinitialize
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid, dirty }) => (
          <Form noValidate>
            <Stack sx={{ alignItems: "center" }} spacing={2} direction="column">
              <Field
                component={TextFieldWrapper}
                name="name"
                label="Nome"
                variant="outlined"
                placeholder="Mariana Flores Braga Maria"
              />
              <Field
                component={TextFieldWrapper}
                name="email"
                label="Email"
                variant="outlined"
                placeholder="mariana@mariana.com.br"
              />
              {hasComment && (
                <Field
                  component={TextFieldWrapper}
                  name="comment"
                  label="Comment"
                  variant="outlined"
                  placeholder="Bowls are the future because..."
                  InputProps={{
                    multiline: true,
                  }}
                />
              )}
              <Button
                disableElevation
                type="submit"
                sx={{
                  width: "9rem",
                  alignItems: "center",
                }}
                variant="contained"
                disabled={!(isValid && dirty)}
              >
                {hasComment ? "Comment" : "Subscribe"}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
