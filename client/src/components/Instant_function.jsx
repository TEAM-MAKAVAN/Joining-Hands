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

};

return <>  

<form onSubmit={handleInstant}>
    
<input id="demand_amount"  placeholder="DEMAND AMOUNT"></input>
<input id="loantime"  placeholder="LOAN TIME"></input>
<button >complete</button>

</form>

 </>
}
export default Instant_function;

