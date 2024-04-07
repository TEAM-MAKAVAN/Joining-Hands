import { ethers } from "ethers";
// let amount1 =document.querySelector("#amount").value;
// function CreateValue(amount1){

//     const  value = { value: ethers.utils.parseEther(amount1) };
// }
const Deposit = ({state})=>{
   
const handledeposit = async(event)=>{
   
    event.preventDefault();
    const {contract} = state;
    //const amount =document.querySelector("#amount").value;
    const value = { value: ethers.utils.parseEther("0.0505") };
   
    console.log(address);
    
  
    const transaction = await contract.deposit(value);
    await transaction.wait();
    console.log("transaction is done");
    
    
    };


    return<>

<form onSubmit={handledeposit}>

<input id="amount"  placeholder="PAY TO CONTRACT" />
{/* <button  onClick ={CreateValue(amount1)}>CREATE VALUE</button> */}
<button  onClick ={handledeposit}>PAY</button>



</form>

    </>
}
    export default Deposit;