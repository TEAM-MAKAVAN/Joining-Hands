import { useState, useEffect } from "react";
import abi from "./contractJson/bank.json";
import { ethers } from "ethers";
import "./App.css";
import Instant_function from "./components/Instant_function";
import Addtocomm from "./components/Addtocomm";
import Add_me from "./components/Add_me";
import Deposit from "./components/Deposit";

import Calctime from "./components/Calctime";
import Finaltime from "./components/Finaltime";
import Repay_amount from "./components/Repay_amount";
import Intrest_amount from "./components/Intrest_amount";
import ThankYou from "./components/ThankYou";
import Transfer from "./components/Transfer";
import Each from "./components/Each";
import Havetopay from "./components/Havetopay";
//import Havetopay_alert from './components/Havetopay_alert';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  useEffect(() => {
    const template = async () => {
      const contractAddres = "0xa7dbdB074DB451C86bAd98bf3F832Cb43e430D09";
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
    <>
      <div className="account">connected account : {account}</div>
      <div className="heading"> JOINING HANDS for RISING HEADS </div>
      <div className="discription">
        <h3>Community Description:</h3>
        <p>
          This is a decentralised loan community system where people from same
          orgnisation will join the community to help each other financially.
          The core Idea of this project is based on blockchain technology.
        </p>
            
      </div>
      <div className="App">
        {/* <h1>User Interface</h1> */}

        <div className="addbtn">
          <Addtocomm className="addme_btn" state={state}></Addtocomm>
        </div>

        <div className="Mainidea">
          <h3>Concept Detail</h3>
          <p>
            This platform allow a person to request the loan for a particular
            time period. Now the other community members will join hands to
            contribute for loan requested by the person. The interest given by
            the borrower will be distributed equally among the community members
            who had contributed for the loan.
          </p>
                
        </div>
        <br></br>
        <div className="maincomponents">
          <h3>There are three main components in this system:</h3>
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
        <div className="working">
          <h2>How everything will work is Transparent to Everyone</h2>
          <p className="subheading">
            1. Borrower will raise his demand of money and also the time he will
            require to repay the amount.The maximum time is 90 days<br></br>
            2. Community members will be notified about the demand raised by
            borrower. <br></br>
            3.People who are interested to contribute to the loan will add
            themselves in Add Me section. <br></br>
            4.After the sufficient members joined for loan payment the Manager
            will notify them the amount they have to pay.<br></br>
            5.If Borrower have asked some x amount then additional cost 1% of x
            is charged collectively bu lenders to fulfill transaction cost
            issues.<br></br>
            6.Now all the lenders will send the required amount to the CONTRACT
            BALANCE and manager will check that whether they have paid or not.{" "}
            <br></br>
            7.After receiving Money in Contract Balance, Manager will send it to
            the Borrower at the same time he will start the loan duration time.
            <br></br>
            8. When borrower wants to repay the loan amount he will contact to
            the Manager and ask for Repayable Amount.<br></br>
            9. Manager will stop the loan loan time and calculate Interest
            Amount.<br></br>
            10. Interest Calculation: There will be a Simple Interest of 2.5%
            for the days he mentioned during the demand time.After that if He is
            not able to repay then Interest Amount will be 5% for rest of the
            days.<br></br>
            11. After Interest Calculation total repayable amount will be
            informed to the borrower.<br></br>
            12. Borrower will pay the repayable amount to Contract Balance.
            <br></br>
            13. Finally After receiving money the Manager will pay to the
            lenders with their Rewarded amount.<br></br><br />
            <h3 className="subheading">IN THIS WAY OUR SMART CONTRACT IS WORKING</h3>
          </p>
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
        
        <br /><br />
        <br /><br />
        <hr></hr>
        <br /><br />
        <br /><br />

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

     <div className='footer'>
      <h3 className="subheading">Contact Manager</h3>
      <p>Email:xyz@gmail.com</p>
     </div>
      </div>
    </>
  );
}

export default App;

//ank contract address: 0xB53c838FffBf0efd10135BC17204eBd9f4Ff93E6
