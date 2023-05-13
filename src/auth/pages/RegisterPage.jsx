import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "The email has to have an @"],
  password: [(value) => value.length >= 6, "The password needs two let"],
  displayName: [(value) => value.length >= 1, "The name is mandatory"],
};

export const RegisterPage = () => {

  const dispatch = useDispatch()

  const [formSubitted, setFormSubmitted] = useState(false);

  const {
    email,
    password,
    onInputChange,
    displayName,
    formState,
    isFormValid,
    displayNameValid,
    passwordValid,
    emailValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };



  return (
    <AuthLayout title="Create account">
      <h4>{isFormValid ? 'Valid' : 'Not valid'}</h4>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!displayNameValid && formSubitted}
              helperText={emailValid}

            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!displayNameValid && formSubitted}
              helperText={passwordValid}

            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

          {/* <Grid 
                item 
                xs={ 12 }
                display={ !!errorMessage ? '': 'none' }
              >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid> */}

            <Grid item xs={12} >
              <Button variant="contained" fullWidth type="submit">
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Already have an account?</Typography>
            <Link component={RouterLink} to="/auth/pages/login" color="inherit">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
