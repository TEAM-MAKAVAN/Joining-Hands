import { ethers } from "ethers";
const Intrest_amount = ({state})=>{
const handleIntrest_amount = async(event)=>{
    event.preventDefault();
    const {contract} = state;
    const address =document.querySelector("#address").value;
   
    console.log(address);
    
    //const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = contract.intrest_Amount();
    await transaction.wait();
    console.log("transaction is done");
    
    };


    return<>

<button id="address" className="bg-green-600 hover:bg-green-800 text-white font-bold py-4 px-4 rounded" onClick={handleIntrest_amount}>INTEREST AMOUNT</button>



    </>
}
    export default Intrest_amount;


// import abi from "../contractJson/bank.json"
// //import contractAddress from './contract-address.json';
// import { ethers } from 'ethers';

// // step 1 - Connect wallet

// await window.ethereum.request({method: 'eth_requestAccounts'});

// // step 2 - Initialize your contract
// const contractAddres="0x31348e660fDf7C1A6177F0E46d138D7DE5242103";
//     this.provider = new ethers.providers.Web3Provider(window.ethereum);
//     this.yourSignedContractObject = new ethers.Contract(
//       contractAddres.Addres, 
//       abi.Abi,
//       this.provider.getSigner(0)
//     );

// // step 3 - Submit transaction to metamask

//     const tx = await this.yourSignedContractObject.intrest_Amount();
//     console.log("interest amount function is called ")


//     export default Intrest_amount;