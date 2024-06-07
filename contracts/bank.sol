// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.24 and less than 0.9.0
pragma solidity ^0.8.5;



contract bank {

address   at_consideration;

uint256 demandamount;

uint256 loan_time;

uint time;

address [] me_array;
address [] verifiedAddress;

    struct Clients{
    string name;uint age;
}



function deposit () payable public{
     
}

 mapping(address => Clients) public clients;

 mapping(address=>uint256)balance;


event SavingEvent(address addr_clients);

 uint  clients_count=0;
uint j;
 function add_Clients(string memory name,uint age) public{
                  
                 if(verifiedAddress.length>=1){
                     for(j=0;j<verifiedAddress.length;j++){
if(msg.sender!=verifiedAddress[j])
{
    clients[msg.sender]=Clients(name,age);

clients_count++;
   verifiedAddress.push(msg.sender);
}  
}
}
else {
    clients[msg.sender]=Clients(name,age);

clients_count++;
     verifiedAddress.push(msg.sender);
}
 

 }
function length() public view returns(uint){
    return verifiedAddress.length;
}
function clients_Added() public view returns(uint){
    return clients_count;
}

uint time3;

function instant (uint256 demand_amount, uint256 loantimeInDays ) public   {
at_consideration = payable (msg.sender);
//require(demandamount>72000000000000000 && demandamount<2000000000000000000);
 require (loantimeInDays<=90) ;
    demandamount=demand_amount;   

    loan_time=loantimeInDays;
    time3=block.timestamp;
   
}

function extra_trnc( ) public view returns(uint256) {
 return demandamount/100;
}

 function extra_cost_frmEach() public view returns(uint256){
    return extra_trnc()/me_array.length;
 }


uint havetopay_new_variable;
function HaveToPay()  public {
  havetopay_new_variable = (demandamount/me_array.length)+extra_cost_frmEach();  
}
 
 uint256 time4=time3+345600;

   uint256 time5;
uint clientsForHelping=0;
function add_me (address add) public {

    time5=block.timestamp;

    if(time5<time4){
me_array.push(add);
}
clientsForHelping++;
}

function ClientsForHelping() public view returns(uint){
    return clientsForHelping;
}

function getContractBalance() public view returns(uint256){
    return address(this).balance;
}



function transfer()  public{
   
  payable (at_consideration).transfer(getContractBalance()-extra_trnc());
   time1=block.timestamp;
   }

    uint time1;
// function InitialTime()  public view returns(uint) {
   
//     return time1;
// }

uint time2;

function FinalTime()  public   {   
    time2=block.timestamp;

}

uint TotalTime;

function calc_totalTime()  public {   
   TotalTime=(time2-time1);
   
}
function Total_Time() public view returns(uint){
    return TotalTime;
}

uint simpleinterest;
function intrest_Amount() public  {

if(TotalTime<=loan_time){
simpleinterest =(demandamount*25*(TotalTime))/(86400000);
}

if(TotalTime>loan_time){

  simpleinterest=(((demandamount*25*(TotalTime))/(86400000))+((demandamount*5*(TotalTime-loan_time))/(8640000)));

}
} 
uint Repay_Amount;
function repay_Amount() public  {  
     Repay_Amount=demandamount+simpleinterest;
}

function Return_RepayAmt() public view returns(uint256) {  
    return Repay_Amount;
}

uint i=0;
uint256 eachAmount;

function Each() public  {
 eachAmount = Repay_Amount/me_array.length;
 }


function thankYou() public {
    while(i<me_array.length){
payable (me_array[i]).transfer(eachAmount);
i++;
    }
}
}