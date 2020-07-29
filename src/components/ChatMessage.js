import React from "react";
import "./ChatMessage.css";
import { users } from "../data";

const ChatMessage = (props) => {
  if (props.messageType === "sent") {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
};

const SentMessage = (props) => {
  return (
    <div className="fullBody-sent">
      <div className="chat-message-sent">
        <div className="avaNbody-sent">
          <p className="messagebody-sent">{props.message.body}</p>
        </div>
      </div>
    </div>
  );
};

const ReceivedMessage = (props) => {
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

// testr
