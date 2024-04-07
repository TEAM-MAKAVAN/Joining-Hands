import { useState,useEffect } from 'react'
import abi from "./contractJson/bank.json"
import {ethers} from "ethers";
import './App.css'
import Instant_function from './components/Instant_function';
 import Addtocomm from './components/Addtocomm';
 import Add_me from './components/Add_me';
 import Deposit from './components/Deposit';

import Calctime from './components/Calctime';
import Finaltime from './components/Finaltime';
import Repay_amount from './components/Repay_amount';
import Intrest_amount from './components/Intrest_amount';
import ThankYou from './components/ThankYou';
import Transfer from './components/Transfer';
import Each from './components/Each';
import Havetopay from './components/Havetopay';
import Havetopay_alert from './components/Havetopay_alert';


function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const template=async()=>{
      const contractAddres="0xFBF3940C9752B885fE275Ee48D069679BB1C7dCb";
      const contractABI=abi.abi;

      try{
      const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        });

window.ethereum.on("account changed",()=>{
window.location.reload()
})

        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
        const signer =  provider.getSigner(); //write the blockchain


        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        // console.log(contract)
        setState({provider,signer,contract});
        }catch(error){
          console.log(error);
        }

    }
    template();
  },[])



  return (
    <>
    <div className="App">
    <h1>User Interface</h1>
    connected account : {account}
     <Addtocomm state={state}></Addtocomm>
     <h3>IF YOU WANT MONEY THEN FILL THE DETAILS</h3>
     <Instant_function state={state}></Instant_function>  
     <h3>SOMEONE HAS RAISED THE DEMAND OF MONEY</h3>
     <h3>NOW IF YOU WANT TO CONTRIBUTE TO THE LOAN THEN ADD YOURSELF</h3>
     <Add_me state={state}></Add_me>
     <h3> NOW YOU HAVE TO PAY THE AMOUNT</h3>
     <Havetopay_alert state={state}></Havetopay_alert>
     <Deposit state={state}></Deposit>

     <h1> Manager Interface</h1>
    <div className='manager'>
    <h3>Manager will tell the lenders how much amount they have to pay.</h3>
    <Havetopay state={state}></Havetopay>
    <h3>Now after that Manager will transfer Money from Contract Balance to Borrower's Account and along with that He will  start Time </h3>
     <Transfer state={state}></Transfer>
     <h3> When Borrower requests the manager that he's going to repay the amount he will stop timer </h3>
     <Finaltime state={state}></Finaltime>
     <h3>Now He will calculate Total Time</h3>
     <Calctime state={state}></Calctime>
     <h3> Then total Interest Amount will be calculated</h3>
     <Intrest_amount state={state}></Intrest_amount>
     <h3>Then Total Repayable Amount By the Borrower( with Interest) will be calculated</h3>
     <Repay_amount state={state}></Repay_amount>
     <h3>After receiving money from borrowers, Money that need to be paid to each lender will be calculated</h3>
     <Each state={state}></Each>
     <h3>Finally lenders will be paid back with profit they have earned</h3>
     <ThankYou state={state}></ThankYou>
     </div>
     

    </div>
    </>
  )
}


export default App



//ank contract address: 0xB53c838FffBf0efd10135BC17204eBd9f4Ff93E6