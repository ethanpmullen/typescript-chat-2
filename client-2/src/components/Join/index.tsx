import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <Container>
      <JoinWrapper>
        <Title>Join</Title>
        <div>
          <Input
            placeholder="Name"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <Layer>
            <Input
              placeholder="Room"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
            <LinkStyle
              onClick={(event: any) =>
                !name || !room ? event.preventDefault() : null
              }
              to={`/chat?name=${name}&room=${room}`}
            >
              <Button type="submit">Go!</Button>
            </LinkStyle>
          </Layer>
          <Layer>
            <LinkStyle
              onClick={(event: any) => (!name ? event.preventDefault() : null)}
              to={`/chat?name=${name}&room=${name}`}
            >
              <Button type="submit">Create new room with name</Button>
            </LinkStyle>
          </Layer>
        </div>
      </JoinWrapper>
    </Container>
  );
}
export default Join;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #03bb85;
`;

const JoinWrapper = styled.div`
  height: 600px;
  width: 400px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 2px 3px #000;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  position: relative;
`;

const Layer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  display: flex;
  outline: none;
  padding: 12px;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  margin: 0;
`;

const Button = styled.button`
  background-color: darkslategray;
  display: flex;
  padding: 12px;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  margin: 0;
  margin-top: auto;
  color: white;
  height: 40px;
`;

const LinkStyle = styled(Link)`
  color: white;
`;
