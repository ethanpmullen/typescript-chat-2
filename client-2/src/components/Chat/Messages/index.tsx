import React from "react";
import Message from "./Message";

import styled from "@emotion/styled";
import { RootStateOrAny, connect } from "react-redux";

const select = (state: RootStateOrAny) => {
  return {
    messages: state.messages,
    name: state.name,
  };
};

function Messages({
  messages,
}: {
  messages: { user: string; text: string }[];
}) {
  return (
    <MessagesContainer>
      {messages.map(
        (
          message: { user: string; text: string },
          i: string | number | undefined
        ) => (
          <div key={i}>
            <Message message={message} />
          </div>
        )
      )}
    </MessagesContainer>
  );
}
export default connect(select)(Messages);

const MessagesContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;
