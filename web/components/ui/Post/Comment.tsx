import { format } from "date-fns";
import React from "react";
import { Author } from "../../../interfaces/User";


type Props = {
  author: Author;
  body?: string;
  createdAt: number;
};

const placeholder = "https://www.w3schools.com/w3css/img_avatar3.png";

const Comment = ({ author, body, createdAt }: Props) => (
  <div
    style={{
      marginTop: 5,
      backgroundColor: "#F6F7F8",
      padding: "10px 10px 10px 0px"
    }}
  >
    <table style={{ width: "100%" }}>
      <tbody>
        <tr>
          <td style={{ width: 70, verticalAlign: "top", textAlign: "center" }}>
            <img
              src={author.avatar === "" ? placeholder : author.avatar}
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              alt="Profile"
              className="rounded-circle"
            />
          </td>
          <td style={{ verticalAlign: "top" }}>
            <div>
              <div style={{ color: "#000" }}>
                <strong>{author.name}</strong>
              </div>
              <span>{format(createdAt, "DD/MM/YYYY")}</span>
            </div>
            <div>{body}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Comment;
