import { useState, useEffect } from "react";
import React from 'react';
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


function AdminAccess(){

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

  return(
    <div className="min-h-screen bg-blue-500 flex flex-col items-center p-6">
      <header className="w-full bg-blue-900 text-white text-center py-4 mb-8">
        <h1 className="text-4xl font-bold">Manager Interface</h1>
      </header>

      <div className="space-y-12 text-white text-center">
        <div className="flex justify-between items-center space-x-4">
          <span className='text-2xl'>Transfer Money from Contract Balance to Borrower's Account and also start Time</span>
          <Transfer state={state}></Transfer>
        </div>
     
        <div className="flex justify-between items-center space-x-4">
          <span className='text-2xl'>If Borrower requested to repay the amount stop loan timer</span>
          <Finaltime state={state}></Finaltime>
        </div>

        <div className="flex justify-between items-center space-x-4">
          <span className='text-2xl'>Calculate Total loan Time</span>
          <Calctime state={state}></Calctime>
        </div>

        <div className="flex justify-between items-center space-x-4">
          <span className='text-2xl'>Calculate Interest Amount</span>
          <Intrest_amount state={state}></Intrest_amount>
        </div>

        <div className="flex justify-between items-center space-x-4">
          <span className='text-2xl'>Calculate Total Repayable Amount By the Borrower (with Interest)</span>
          <Repay_amount state={state}></Repay_amount>
        </div>

        <div className="flex justify-between items-center space-x-4">
          <span className='text-2xl'>If money is received from Borrower calculate payable amount to each lender with interest rewards</span>
          <Each state={state}></Each>
        </div>
        <div className="flex justify-between items-center space-x-4">
          <span className='text-2xl'>Final call! Pay to the lenders</span>
          <ThankYou state={state}></ThankYou>
        </div>
      </div>
     
     </div>
  )
}

export default AdminAccess;


