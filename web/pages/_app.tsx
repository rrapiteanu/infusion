import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import { ApolloProvider } from "react-apollo";
import JssProvider from "react-jss/lib/JssProvider";
import getPageContext from "../lib/getPageContext";
import withApollo from "../lib/withApollo";

class MyApp extends App<any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    const pageContext = getPageContext();
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Head>
            <title>My page</title>
            <link rel="manifest" href="/static/manifest.json" />
          </Head>
          <JssProvider
            registry={pageContext.sheetsRegistry}
            generateClassName={pageContext.generateClassName}
          >
            <MuiThemeProvider
              theme={pageContext.theme}
              sheetsManager={pageContext.sheetsManager}
            >
              <CssBaseline />
              <Component pageContext={pageContext} {...pageProps} />
            </MuiThemeProvider>
          </JssProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
