import { ethers } from "ethers";
const Transfer = ({state})=>{
const handleTransfer = async(event)=>{
    event.preventDefault();
    const {contract} = state;
    const address =document.querySelector("#address").value;
   
    console.log(address);
    
    //const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.transfer();
    await transaction.wait();
    console.log("transaction is done");
    
    };


    return<>

<button id="address" onClick={handleTransfer}>TRANSFER</button>



    </>
}
    export default Transfer;