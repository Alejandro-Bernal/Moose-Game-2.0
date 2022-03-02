import { injected } from "./Connector";
import { useWeb3React } from "@web3-react/core";

function WalletConnection() {
  // uses for the web3 library
  const { account, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (err) {
      console.log(err);
    }
  }

  async function disconnect() {
    try {
      await deactivate();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <button type="button" onClick={connect}>
        Connect Wallet
      </button>
      <h1>Wallet Addres: {account} </h1>
    </div>
  );
}

export default WalletConnection;
