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

<div className="mb-4">
    <label className="block text-gray-700 text-left font-bold mb-2" htmlFor="name">Enter Your Name</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-non focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
</div>
<div id="age" className="mb-4">
    <label className="block text-gray-700 text-left font-bold mb-2" htmlFor="age">Enter your Age</label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" placeholder="Enter your age"/>
</div>
<button className="bg-green-600 hover:bg-green-800 text-white text-center font-bold py-4 px-12 rounded" >Add Me to Community</button>

</form>

    </>
}
    export default Addtocomm;