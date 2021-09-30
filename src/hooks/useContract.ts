import { useEffect, useState } from "react";
import { ethers } from "ethers";
import waveportal from "src/utils/WavePortal.json";

declare global {
  interface Window {
    ethereum?: any;
  }
}

interface Wave {
  waver: string;
  message: string;
  timestamp: number;
}

export const useContract = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isMining, setIsMining] = useState(false);
  const [waves, setWaves] = useState<Wave[]>([]);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const wave = async (message: string) => {
    const contractAddress = "0xD5168130fb1ce9ff39ee8a20223eaF7fC8348968";

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const waveportalContract = new ethers.Contract(
          contractAddress,
          waveportal.abi,
          signer
        );

        const waveTxn = await waveportalContract.wave(message, {
          gasLimit: 300000,
        });
        setIsMining(true);
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        setIsMining(false);
        console.log("Mined -- ", waveTxn.hash);

        let waves = await waveportalContract.getWaves();
        console.log(`We have a total of ${waves.length} waves till now`);

        setWaves(waves);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    currentAccount,
    setCurrentAccount,
    wave,
    connectWallet,
    isMining,
    waves,
  };
};
