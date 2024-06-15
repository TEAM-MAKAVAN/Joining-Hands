import { ethers } from "ethers";
const Add_me = ({state})=>{
const handleAdd_me = async(event)=>{
    event.preventDefault();
    const {contract} = state;
    const address =document.querySelector("#address").value;
   
    console.log(address);
    
    //const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.add_me(address);
    await transaction.wait();
    console.log("transaction is done");
    
    };


    return<>

<form onSubmit={handleAdd_me}>
<div className="flex justify-center mb-5">
<input
    className="shadow appearance-none border rounded w-full py-1 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    placeholder="Enter your wallet address"/>
    <button onClick={handleAdd_me} className="bg-green-500 text-white font-bold px-8 rounded">Add Me</button>
</div>

</form>

    </>
}
    export default Add_me;