import React from "react";
import styled from "@emotion/styled";
import { RootStateOrAny, connect } from "react-redux";

const select = (state: RootStateOrAny) => ({
  room: state.room,
});

function InfoBar({ room }: { room: string }) {
  return (
    <Container>
      <RoomName> {room} </RoomName>
      <LeaveChat href="/"> Leave Chat</LeaveChat>
    </Container>
  );
}

export default connect(select)(InfoBar);

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: darkslategrey;
  width: 100%;
  color: white;
  border-radius: 5px 5px 0px 0px;
`;

const RoomName = styled.h1`
  margin-top: 10px;
  margin-left: 10px;
`;

const LeaveChat = styled.a`
  margin-left: auto;
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: white;
`;
