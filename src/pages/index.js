import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 100vh;
`;

const Logo = styled.div`
  background-image: url("/logo.svg");
  width: 100px;
  height: 100px;
`;

export default function Home() {
  return (
    <Container>
      <GlobalStyle />
      <Logo />
    </Container>
  );
}
