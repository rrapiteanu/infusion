import Head from "next/head";
import * as React from "react";
import styled from "styled-components";
import MiniDrawer from "./ui/NavBar/MiniDrawer";

type Props = {
  title?: string;
};

const Container = styled("div")`
  /* background-color:  */
`;

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Infusion"
}) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MiniDrawer>{children}</MiniDrawer>
  </Container>
);

export default Layout;
