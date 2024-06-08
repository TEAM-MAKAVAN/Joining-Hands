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
    <div>
      


 

  return (
    <>
      <div className="account">connected account : {account}</div>
    
      <div className="App">
        {/* <h1>User Interface</h1> */}

        <div className="addbtn">
          <Addtocomm className="addme_btn" state={state}></Addtocomm>
        </div>

        <div className="Mainidea">
          
                
        </div>
        <br></br>
        <div className="maincomponents">
          
          <div className="boxes">
            <div className="box1">
              {" "}
              <p>Borrower: Who will raise Demand.</p>
            </div>
            <div className="box2">
              {" "}
              <p>Lenders: Who will contribute in loan.</p>
            </div>
            <div className="box3">
              {" "}
              <p>Manager: Who will manage all Transactions.</p>
            </div>
          </div>
                 
        </div>
        
        <div className="display-btn">

        <h3 className="subheading">IF YOU WANT MONEY THEN FILL THE DETAILS</h3>
        <Instant_function state={state}></Instant_function>
        </div>
        <br />
        <br />
        <h3 className="subheading">SOMEONE HAS RAISED THE DEMAND OF MONEY</h3>

        <div className="display-btn">
        <h3 className="subheading">NOW IF YOU WANT TO CONTRIBUTE TO THE LOAN THEN ADD YOURSELF</h3>
        <Add_me state={state}></Add_me>
        </div>
        
        <div className="display-btn">
        <h3 className="subheading"> NOW YOU HAVE TO PAY THE AMOUNT</h3>
        {/* <Havetopay state={state}></Havetopay> */}
        <Deposit state={state}></Deposit>
        </div>
        
        

       

     <div className='footer'>
      <h3 className="subheading">Contact Manager</h3>
      <p>Email:xyz@gmail.com</p>
     </div>
      </div>
    </>
  );


export default App;

//ank contract address: 0xB53c838FffBf0efd10135BC17204eBd9f4Ff93E6

    </div>
  )
}

export default UserAccess