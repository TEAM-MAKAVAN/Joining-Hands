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

<div className="flex justify-center mb-4">
    <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Pay To Contract"/>
    <button onClick ={handledeposit} className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2">Pay</button>
</div>

{/* <button  onClick ={CreateValue(amount1)}>CREATE VALUE</button> */}


</form>

    </>
}
    export default Deposit;