import MoreHorizontalIcon from "@material-ui/icons/MoreHoriz";
import { format } from "date-fns";
import React from "react";
// import "./Post.scss";
import styled from "styled-components";
import { Author } from "../../../interfaces/User";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const placeholder = "https://www.w3schools.com/w3css/img_avatar3.png";

type PostProps = {
  author: Author;
  createdAt: number;
  body?: string;
};

type PostState = {
  comments: Array<any>;
  inputValue: string;
};

const PostContainer = styled.div`
  background: #ffffff;
  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 255, 255);
  padding: 30px;
`;

const PostWrapper = styled.div`
  position: relative;
  width: 570px;
  background: #ffffff;
  margin-bottom: 30px;
  border-radius: 4px;
`;

const PostOptions = styled.div`
  position: absolute;
  top: 10px;
  right: 19px;
  font-size: 23px;
  color: #c1c1c1;
  cursor: pointer;
`;

class Post extends React.Component<PostProps, PostState> {
  readonly state: PostState = {
    comments: [],
    inputValue: ""
  };

  onInputChange = (event: any) => {
    this.setState({ inputValue: event.target.value });
  };

  sendComment = () => {
    if (this.state.inputValue === "") return;

    const comment = {
      author: {
        name: "robert rapiteanu",
        avatar: ""
      },
      body: this.state.inputValue,
      createdAt: Date.now()
    };

    this.setState({
      inputValue: "",
      comments: [comment, ...this.state.comments]
    });
  };

  render() {
    const { author, createdAt, body } = this.props;

    return (
      <PostWrapper>
        <PostOptions>
          <span className="icon-more-horizontal">
            <MoreHorizontalIcon />
          </span>
        </PostOptions>

        <PostContainer>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    width: 70,
                    verticalAlign: "top",
                    textAlign: "center"
                  }}
                >
                  <div>
                    <img
                      src={
                        author.avatar === "" || !author.avatar
                          ? placeholder
                          : author.avatar
                      }
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%"
                      }}
                      alt="Profile"
                      className="rounded-circle"
                    />
                  </div>
                </td>
                <td style={{ verticalAlign: "top" }}>
                  <div style={{ marginLeft: 10 }}>
                    <div style={{ display: "block", marginBottom: 10 }}>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle"
                        }}
                      >
                        <div style={{ fontSize: 16, color: "#000" }}>
                          <strong>{author.displayName}</strong>
                          <div style={{ fontSize: 12, color: "#575757" }}>
                            {/* {author.title}<br/> */}
                            {format(createdAt, "DD/MM/YYYY")}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          float: "right"
                        }}
                      >
                        <div style={{ fontSize: 20, color: "#000" }}>
                          <i className="fa fa-ellipsis-v" />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: 10,
                        marginBottom: 10,
                        color: "#5a5a5a"
                      }}
                    >
                      {body}
                    </div>

                    {this.state.comments.map((comment, index) => (
                      <Comment key={index} {...comment} />
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </PostContainer>

        <CommentForm
          sendComment={this.sendComment}
          onInputChange={this.onInputChange}
          inputValue={this.state.inputValue}
        />
      </PostWrapper>
    );
  }
}

export default Post;
