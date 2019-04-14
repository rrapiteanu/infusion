import Document, { Head, Main, NextScript } from "next/document";
import PropTypes from "prop-types";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import flush from "styled-jsx/server";

class MyDocument extends Document<any> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    let pageContext;
    const page = renderPage(Component => {
      const WrappedComponent = props => {
        pageContext = props.pageContext;
        return <Component {...props} />;
      };

      WrappedComponent.propTypes = {
        pageContext: PropTypes.object.isRequired
      };

      sheet.collectStyles(WrappedComponent);

      return WrappedComponent;
    });

    const styleTags = sheet.getStyleElement();

    let css;
    // It might be undefined, e.g. after an error.
    if (pageContext) {
      css = pageContext.sheetsRegistry.toString();
    }

    return {
      ...page,
      styleTags,
      pageContext,
      styles: (
        <React.Fragment>
          <style
            id="jss-server-side"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: css }}
          />
          {flush() || null}
        </React.Fragment>
      )
    };
  }

  render() {
    const { pageContext } = this.props;
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta name="Description" content="Infusion" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta
            name="theme-color"
            content={
              pageContext ? pageContext.theme.palette.primary.main : null
            }
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
export default MyDocument;
