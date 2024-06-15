import { ethers } from "ethers";
const Repay_amount = ({state})=>{
const handleRepay_amount = async(event)=>{
    event.preventDefault();
    const {contract} = state;
    const address =document.querySelector("#address").value;
   
    console.log(address);
    
    //const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.repay_Amount();
    await transaction.wait();
    console.log("transaction is done");
    
    };


    return<>

<button id="address" className="bg-green-600 hover:bg-green-800 text-white font-bold py-4 px-7 rounded" onClick={handleRepay_amount}>REPAY AMOUNT</button>



    </>
}
    export default Repay_amount;