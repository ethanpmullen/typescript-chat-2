import React from "react";
import { useEffect } from "react";

import InfoBar from "./InfoBar";
import Input from "./Input";
import Messages from "./Messages";

import { connect, RootStateOrAny } from "react-redux";
import { doInitializeUser, doSetMessages } from "./ducks/actions";

import io from "socket.io-client";
import styled from "@emotion/styled";
const queryString = require("query-string");

const select = (state: RootStateOrAny) => ({
  name: state.name,
  room: state.room,
  currentMessage: state.currentMessage,
  messages: state.messages,
});

const actions = {
  initializeUser: doInitializeUser,
  setMessages: doSetMessages,
};

let socket: SocketIOClient.Socket;

function Chat({
  messages,
  initializeUser,
  setMessages,
}: {
  messages: { user: string; text: string }[];
  initializeUser: (name: string, room: string) => void;
  setMessages: Function;
}) {
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);

    socket = io(ENDPOINT);

    initializeUser(name, room);

    socket.emit("join", { name, room }, (error: any) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, initializeUser]);

  useEffect(() => {
    socket.on("message", (message: { user: string; text: string }) => {
      setMessages(message);
    });
  }, []);

  return (
    <Container>
      <ChatWrapper>
        <InfoBar />
        <Messages />
        <Input socket={socket} />
      </ChatWrapper>
    </Container>
  );
}
export default connect(select, actions)(Chat);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #03bb85;
`;

const ChatWrapper = styled.div`
  height: 600px;
  width: 400px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 2px 3px #000;
`;
