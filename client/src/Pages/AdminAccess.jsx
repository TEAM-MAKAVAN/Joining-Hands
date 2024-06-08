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
    <>
    <h1 className="heading"> Manager Interface</h1>
        <div className='manager'>

        <div className="display-btn">
        <h3 className="subheading"> Transfer Money from Contract Balance to Borrower's Account and also start Time </h3>
     <Transfer state={state}></Transfer>
        </div>
     <div className="display-btn">
     <h3 className="subheading"> If Borrower requested  to repay the amount  stop loan timer </h3>
     <Finaltime state={state}></Finaltime>
     </div>
     
     <div className="display-btn">
     <h3 className="subheading"> calculate Total loan Time</h3>
     <Calctime state={state}></Calctime>
     </div>
     
     <div className="display-btn">
     <h3 className="subheading"> claculate Interest Amount </h3>
     <Intrest_amount state={state}></Intrest_amount>
     </div>

     <div className="display-btn">
     <h3 className="subheading">calculate Total Repayable Amount By the Borrower( with Interest) </h3>
     <Repay_amount state={state}></Repay_amount>
     </div>
     
     <div className="display-btn">
     <h3 className="subheading"> If money is received from Borrower calculate  payable amount to each lender with interest rewards</h3>
     <Each state={state}></Each>
     </div>
     
     <div className="display-btn">
     <h3 className="subheading">Final call! Pay to the lenders</h3>
     <ThankYou state={state}></ThankYou>
     </div>
     
     </div>
    </>
  )
}

export default AdminAccess;