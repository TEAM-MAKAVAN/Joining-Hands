import { ethers } from "ethers";
const Each = ({state})=>{
const handleEach = async(event)=>{
    event.preventDefault();
    const {contract} = state;
    const address =document.querySelector("#address").value;
   
    console.log(address);
    
    //const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.Each();
    await transaction.wait();
    console.log("transaction is done");
    
    };


    return<>

<button id="address" onClick={handleEach}>AmtPayableToEach</button>



    </>
}
    export default Each;