import { useState } from "react";
import "./App.css";
import { useContract } from "src/hooks/useContract";
import { Button } from "src/components";
import logo from "./logo.svg";

export default function App() {
  const [message, setMessage] = useState("");

  const changeMessage = (event: any) => {
    const { value } = event.target;
    console.log({ value });
    setMessage(value);
  };

  const { currentAccount, wave, connectWallet, isMining, waves } =
    useContract();

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">Let's waaaaaaaaaaave 😎</div>

        <div className="bio">
          I am Pablo, connect your Ethereum wallet and wave at me!
        </div>

        {!currentAccount ? (
          <Button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </Button>
        ) : isMining ? (
          <div className="mining">
            <img className="logo" src={logo} alt="logo" />
            <p>Mining...</p>
          </div>
        ) : waves.length ? (
          <div className="thanks">
            {waves.map((wave) => (
              <div
                style={{
                  backgroundColor: "OldLace",
                  marginTop: "16px",
                  padding: "8px",
                }}
              >
                <div>Address: {wave.waver}</div>
                <div>Time: {wave.timestamp.toString()}</div>
                <div>Message: {wave.message}</div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <input
              value={message}
              onChange={changeMessage}
              style={{ borderRadius: "5px" }}
            ></input>
            <Button className="waveButton" onClick={() => wave(message)}>
              Tell me something while waving!
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
