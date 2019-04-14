import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import FormDialog from "../components/modals/FormDialog";
import InfusionForm from "../components/ui/InfusionForm/InfusionFrom";
import Post from "../components/ui/Post/Post";

const PostsContainer = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
`;

const IndexPage: React.FunctionComponent = props => {
  const post = {
    author: { name: "Robert", displayName: "notenigma" },
    body: "Postare continut",
    createdAt: Date.now()
  };
  console.log(props);
  return (
    <Layout>
      <h1>Landing Page</h1>
      <FormDialog />
      <PostsContainer>
        <InfusionForm />
        <Post {...post} />
      </PostsContainer>
    </Layout>
  );
};

export default IndexPage;
