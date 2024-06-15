import { ethers } from "ethers";
const Instant_function = ({state})=>{
const handleInstant= async(event)=>{
event.preventDefault();
const {contract} = state;
const demand_amount =document.querySelector("#demand_amount").value;
const loantime =document.querySelector("#loantime").value;
console.log(demand_amount,loantime);

//const amount = { value: ethers.utils.parseEther("0.001") };
const transaction = await contract.instant(demand_amount,loantime);
await transaction.wait();
console.log("transaction is done");
alert("someone has raised a demand")

};

return <>  

<form onSubmit={handleInstant}>
    
<label className="block text-gray-700 text-left font-bold mb-2" htmlFor="amount">Enter the Demanded Amount</label>
    <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
    id="amount"
    type="text"
    placeholder="Demand Amount"
    />
    <label className="block text-gray-700 text-left font-bold mb-2" htmlFor="time">Enter the loan time period</label>
    <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
    id="time"
    type="text"
    placeholder="Loan Time"
    />
 <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">Submit</button>

</form>

 </>
}
export default Instant_function;

