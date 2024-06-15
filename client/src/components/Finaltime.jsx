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

<button id="address" className="bg-green-600 hover:bg-green-800 text-white font-bold py-4 px-12 rounded" onClick={handleFinaltime}>Final TIME</button>



    </>
}
    export default Finaltime;