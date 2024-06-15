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

<button id="address"  className="bg-green-600 hover:bg-green-800 text-white font-bold py-4 px-10 rounded" onClick={handleThankYou}>PAY LENDERS</button>



    </>
}
    export default ThankYou;