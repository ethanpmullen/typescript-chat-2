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
          <div>
            <input
              placeholder="Name"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Room"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(event: any) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}
          >
            <button type="submit">Sign in!</button>
          </Link>
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
