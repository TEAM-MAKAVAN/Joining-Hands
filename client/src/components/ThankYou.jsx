import { ethers } from "ethers";
const ThankYou = ({state})=>{
const handleThankYou = async(event)=>{
    event.preventDefault();
    const {contract} = state;
    const address =document.querySelector("#address").value;
   
    console.log(address);
    
    //const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.thankYou();
    await transaction.wait();
    console.log("transaction is done");
    
    };


    return<>

<button id="address" onClick={handleThankYou}>PAY LENDERS</button>



    </>
}
    export default ThankYou;