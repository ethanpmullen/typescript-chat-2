import React, { useState } from "react";
import styled from "@emotion/styled";
import { RootStateOrAny, connect } from "react-redux";
import io from "socket.io-client";

function Input({ socket }: { socket: SocketIOClient.Socket }) {
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (currentMessage) {
      socket.emit("sendMessage", currentMessage, () => setCurrentMessage(""));
    }
  };

  return (
    <FormContainer>
      <InputWrapper
        type="text"
        value={currentMessage}
        onChange={(event: any) => setCurrentMessage(event.target.value)}
        onKeyPress={(event) => {
          return event.key === "Enter" ? sendMessage(event) : null;
        }}
      />
      <SendButton
        onClick={(event: any) => {
          sendMessage(event.target.value);
          setCurrentMessage("");
        }}
      >
        Send
      </SendButton>
    </FormContainer>
  );
}

export default Input;

const FormContainer = styled.form`
  background-color: lightslategray;
  display: flex;

  width: 100%;
  border-radius: 0px 0px 5px 5px;
  margin-bottom: 5 px;
`;

const InputWrapper = styled.input`
  width: 80%;
  font-size: 14px;
  margin: 5px;
  margin-left: 10px;
  box-shadow: none;
`;

const SendButton = styled.button`
  margin: 5px;
  background-color: darkslategrey;
  color: white;
  border: 0;
  background: none;
  box-shadow: none;
  border-radius: 0px;
`;
