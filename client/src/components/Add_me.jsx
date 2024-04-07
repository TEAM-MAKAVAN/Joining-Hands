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

<input id="address" placeholder="enter your wallet address" />
<button onClick={handleAdd_me} >Add Me</button>

</form>

    </>
}
    export default Add_me;