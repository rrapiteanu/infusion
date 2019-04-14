import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import MoreHorizontalIcon from "@material-ui/icons/MoreHoriz";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";
import CheckinIcon from "@material-ui/icons/PersonPinCircleOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import React from "react";
import styled from "styled-components";
import InfusionButton from "./../InfusionButton/InfusionButton";

const placeholder = "https://www.w3schools.com/w3css/img_avatar3.png";

const FormContainer = styled.div`
  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-bottom: 50px;
  background-color: white;
  width: 570px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #e8e8e8;
`;

const ProfilePicture = styled.div`
  margin-right: 30px;
`;

const ActionBar = styled.div`
  padding: 0px 30px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const Buttons = styled.div`
  color: #c1c1c1;
  font-size: 20px;
  span {
    cursor: pointer;
    margin-right: 20px;
  }
`;

const InfusionForm = ({ updateText, sendPost, value }) => (
  <FormContainer>
    <div>
      <InputArea>
        <ProfilePicture>
          <img
            src={placeholder}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            className="rounded-circle"
            alt="Profile"
          />
        </ProfilePicture>
        <div className="input">
          <input
            type="text"
            style={{
              width: "100%",
              background: "transparent",
              outline: "none",
              border: "none",
              marginTop: 7
            }}
            placeholder="What's on your mind...?"
            value={value}
            onChange={updateText}
          />
        </div>
      </InputArea>

      <ActionBar>
        <Buttons>
          <span className="icon-image">
            <ImageOutlinedIcon />
          </span>
          <span className="icon-youtube">
            <VideocamOutlinedIcon />
          </span>
          <span className="icon-music">
            <MusicNoteOutlinedIcon />
          </span>
          <span className="icon-map-pin">
            <CheckinIcon />
          </span>
          <span className="icon-more-horizontal">
            <MoreHorizontalIcon />
          </span>
        </Buttons>
        <InfusionButton color="green" type="intense" onClick={sendPost}>
          Post
        </InfusionButton>
      </ActionBar>
    </div>
  </FormContainer>
);

export default InfusionForm;
