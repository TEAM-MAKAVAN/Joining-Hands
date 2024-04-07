import { ethers } from "ethers";
const Addtocomm = ({state})=>{
const handleAddtocomm= async(event)=>{
    event.preventDefault();
    const {contract} = state;
    const name =document.querySelector("#name").value;
    const age =document.querySelector("#age").value;
    console.log(name,age);
    
    //const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.add_Clients(name,age);
    await transaction.wait();
    console.log("transaction is done");
    
    };


    return<>

<form onSubmit={handleAddtocomm}>

<input id="name" placeholder="enter your name" />
<input id="age" placeholder="enter your age"/>
<button >Submit</button>

</form>

    </>
}
    export default Addtocomm;