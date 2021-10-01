import { useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { useContract } from "src/hooks/useContract";
import { Button, Spinner, WavesList, Form } from "src/components";

export default function App() {
  const { currentAccount, wave, connectWallet, isMining, waves, getWaves } =
    useContract();

  useEffect(() => {
    getWaves();
  }, [getWaves]);

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
      ) : (
        <Form onWave={wave} />
      )}
      {!!waves.length && <WavesList waves={waves} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
  background-color: #363537;
  min-height: 100vh;
  padding: 1em;
  box-sizing: border-box;
  text-align: center;
  color: white;
`;

const Header = styled.h1`
  margin: 0;
`;

const Emoji = styled.p`
  font-size: 40px;
  margin: 0;
`;

const Bio = styled.div``;
