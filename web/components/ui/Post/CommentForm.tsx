import React from "react";
import styled from "styled-components";

type Props = {
  inputValue: string;
  onInputChange: any;
  sendComment: Function;
};

const placeholder = "https://www.w3schools.com/w3css/img_avatar3.png";

const FormContainer = styled.div`
  padding: 10px 10px 10px 0px;
  background-color: rgb(246, 247, 248);
  margin-top: 2px;
  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const CommentForm = ({ inputValue, onInputChange, sendComment }: Props) => (
  <FormContainer>
    <table style={{ width: "100%" }}>
      <tbody>
        <tr>
          <td style={{ width: 70, verticalAlign: "top", textAlign: "center" }}>
            <img
              src={placeholder}
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              className="rounded-circle"
              alt="Profile"
            />
          </td>
          <td style={{ verticalAlign: "top" }}>
            <input
              type="text"
              className="comment_area"
              style={{
                width: "100%",
                background: "transparent",
                outline: "none",
                border: "none",
                marginTop: 7
              }}
              placeholder="Write a comment..."
              value={inputValue}
              onChange={onInputChange}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  sendComment();
                }
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </FormContainer>
);

export default CommentForm;
