import React from 'react'

import { useState, useEffect } from "react";
import abi from "../contractJson/bank.json";
import { ethers } from "ethers";

import Instant_function from "../components/Instant_function";
import Addtocomm from "../components/Addtocomm";
import Add_me from "../components/Add_me";
import Deposit from "../components/Deposit";

import Calctime from "../components/Calctime";
import Finaltime from "../components/Finaltime";
import Repay_amount from "../components/Repay_amount";
import Intrest_amount from "../components/Intrest_amount";
import ThankYou from "../components/ThankYou";
import Transfer from "../components/Transfer";
import Each from "../components/Each";
import './UserAccess.css'
function UserAccess() {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  useEffect(() => {
    const template = async () => {
      const contractAddres = "0xC7fd8225cFbD0faD408C480aBf812E0c0Abd851e";
      const contractABI = abi.abi;

      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("account changed", () => {
          window.location.reload();
        });

        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum); //read the Blockchain
        const signer = provider.getSigner(); //write the blockchain

        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        );
        // console.log(contract)
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    template();
  }, []);

    return (
      <div className="bg-blue-500 min-h-screen flex flex-col items-center">
        <div className="w-full bg-blue-800 text-white py-4 text-center">
          <h1 className="text-5xl font-bold">User Interface</h1>
          <p>Connected Account : Not connected</p>
        </div>
        <div className="w-11/12 md:w-2/4 lg:w-1/2 mt-8 bg-white p-8 rounded-lg shadow-lg">

        <div className="text-center mb-4">
          <Addtocomm className="addme_btn" state={state}></Addtocomm>
        </div>
      
          <div className="text-center mb-4">
            <h2 className="text-lg py-10 font-bold mb-2">IF YOU WANT MONEY THEN FILL THE DETAILS</h2>
            <Instant_function state={state}></Instant_function>
          </div>
          <div className="text-center py-5 mb-4">
            <h2 className="text-lg font-bold py-2 mb-2">SOMEONE HAS RAISED THE DEMAND OF MONEY</h2>
            <h2 className="text-lg font-bold py-4 mb-2">NOW IF YOU WANT TO CONTRIBUTE TO THE LOAN THEN ADD YOURSELF</h2>
            <Add_me state={state}></Add_me>
          </div>

          <div className="text-center py-5 mb-4">
            <h2 className="text-lg font-bold mb-2">NOW YOU HAVE TO PAY THE AMOUNT</h2>
            {/* <Havetopay state={state}></Havetopay> */}
            <Deposit state={state}></Deposit>
          </div>
        </div>
      </div>
    );
  }


export default UserAccess