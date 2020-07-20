import React from "react";

import "./ChatMessage.css";
import { users } from "../data";

const ChatMessage = (props) => {
  return (
    <div className="fullBody">
      <div className="chat-message">
        <div className="userName">{props.message.user.username}</div>
        <div className="avaNbody">
          <img className="avatarpics" src={props.message.user.avatar} alt="" />
          <div className="messagebody">{props.message.body}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
