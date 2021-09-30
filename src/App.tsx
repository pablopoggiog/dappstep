// import { useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { useContract } from "src/hooks/useContract";
import { Button, Spinner, WavesList, Form } from "src/components";

export default function App() {
  const { currentAccount, wave, connectWallet, isMining, waves } =
    useContract();

  // useEffect(() => {
  //   getWaves()
  // }, [getWaves]);

  const text = isMining
    ? "⛏️ Mining ⛏️"
    : "I am Pablo, connect your Ethereum wallet and wave at me!";

  return (
    <Container>
      <Header>Let's wave</Header>
      <Emoji>😎</Emoji>

      <Bio>{text}</Bio>

      {!currentAccount ? (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      ) : isMining ? (
        <Spinner />
      ) : waves.length ? (
        <WavesList waves={waves} />
      ) : (
        <Form onWave={wave} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  background-color: #363537;
  min-height: 100vh;
  padding: 1em;
  box-sizing: border-box;
  text-align: center;
  color: white;
`;

const Header = styled.h1``;

const Emoji = styled.p`
  font-size: 40px;
  margin: 0.5em;
`;

const Bio = styled.div`
  margin-bottom: 2em;
`;
