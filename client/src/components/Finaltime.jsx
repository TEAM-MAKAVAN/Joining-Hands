import { ethers } from "ethers";
const Finaltime = ({state})=>{
const handleFinaltime = async(event)=>{
    event.preventDefault();
    const {contract} = state;
    const address =document.querySelector("#address").value;
   
    console.log(address);
    
    //const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction =  contract.FinalTime();
    await transaction.wait();
   
   console.log("transaction is done");
    
    };


    return<>

<button id="address" onClick={handleFinaltime}>Final TIME</button>



    </>
}
    export default Finaltime;