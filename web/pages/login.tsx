import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Field, Formik } from "formik";
import Router from "next/router";
import React from "react";
import { InputField } from "../components/fields/InputField";
import Layout from "../components/Layout";
import { LoginComponent } from "../generated/apolloComponents";
import InfusionButton from "./../components/ui/InfusionButton/InfusionButton";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class LoginPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <h1>Login</h1>
        <div className="example">Hello World!</div>
        <LoginComponent>
          {login => (
            <main className={classes.main}>
              <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Formik
                  validateOnBlur={false}
                  validateOnChange={false}
                  onSubmit={async (data, { setErrors }) => {
                    const response = await login({
                      variables: data
                    });
                    console.log(response);
                    if (response && response.data && !response.data.login) {
                      setErrors({
                        password: "Wrong username or password"
                      });
                      return;
                    }

                    Router.push("/");
                  }}
                  initialValues={{
                    email: "",
                    password: ""
                  }}
                >
                  {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className={classes.form}>
                      <Field
                        name="email"
                        type="email"
                        label="Email Address"
                        component={InputField}
                      />
                      <Field
                        name="password"
                        label="Password"
                        type="password"
                        component={InputField}
                      />
                      <InfusionButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Sign in
                      </InfusionButton>
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                    </form>
                  )}
                </Formik>
              </Paper>
            </main>
          )}
        </LoginComponent>
      </Layout>
    );
  }
}
export default withStyles(styles)(LoginPage);
