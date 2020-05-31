import React from "react";
import styled from "@emotion/styled";
import { RootStateOrAny, connect } from "react-redux";

const select = (
  state: RootStateOrAny,
  ownProps: { message: { user: String; text: String } }
) => ({
  message: ownProps.message,
  name: state.name,
});

function Message({
  message: { user, text },
  name,
}: {
  message: { user: String; text: String };
  name: String;
}) {
  switch (user) {
    case "admin":
      return (
        <Admin>
          <p>{text}</p>
        </Admin>
      );
    case name:
      return (
        <Self>
          <SelfMessage>{text}</SelfMessage>
        </Self>
      );
    default:
      return (
        <Other>
          <OtherMessage>
            {user}: {text}
          </OtherMessage>
        </Other>
      );
  }
}

export default connect(select)(Message);

const MessageContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Admin = styled(MessageContainer)`
  justify-content: center;
  color: lightslategray;
`;

const Self = styled(MessageContainer)`
  justify-content: flex-end;
`;

const Other = styled(MessageContainer)`
  justify-content: flex-start;
`;

const SelfMessage = styled.p`
  margin: 20px;
  margin-left: 100px;
`;

const OtherMessage = styled.p`
  margin: 20px;
  margin-right: 100px;
`;
