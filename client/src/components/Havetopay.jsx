import { ethers } from "ethers";
const Havetopay = ({state})=>{
const handleHavetopay = async(event)=>{
    event.preventDefault();
    const {contract} = state;
    const address =document.querySelector("#address").value;
   
    console.log(address);
    
    //const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.HaveToPay();
    await transaction.wait();
    console.log("transaction is done");
    
    };


    return<>

<button id="address" onClick={handleHavetopay}>HAVE TO PAY</button>



    </>
}
    export default Havetopay;