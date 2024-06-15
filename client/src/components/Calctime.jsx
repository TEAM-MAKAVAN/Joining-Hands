import { ethers } from "ethers";
const Calctime = ({state})=>{
const handleCalctime = async(event)=>{
    event.preventDefault();
    const {contract} = state;
    const address =document.querySelector("#address").value;
   
    console.log(address);
    
    //const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.calc_totalTime();
    await transaction.wait();
    console.log("transaction is done");
    
    };


    return<>

<button id="address" className="bg-green-600 hover:bg-green-800 text-white font-bold py-4 px-6 rounded" placeholder="enter your wallet address" onClick={handleCalctime}>CALCULATE TIME</button>



    </>
}
    export default Calctime;