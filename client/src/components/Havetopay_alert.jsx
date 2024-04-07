import { useState,useEffect } from "react";
const Havetopay_alert = (state) => {
    const [Havetopay_alert,setHavetopay_alert]= useState([]);
    const {contract} = state;

useEffect(()=>{
    const Havetopay_alert = async ()=>{
        const Havetopay_alert = await contract.HaveToPay();
        setHavetopay_alert(Havetopay_alert);
    };
    contract && Havetopay_alert();
},[contract]);


return<>

<h3>each amount you have to pay is:</h3>

 <h2>{Havetopay_alert.map((alert,index)=>(<div key={index}>{alert.value}</div>))}</h2>
</>
};





export default Havetopay_alert;









