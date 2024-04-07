// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract parking {

// at first you have to pay some wei (pay at least 60 wei for better experience)
// then click on the "get parking fee" with the corresponding address
//  click "parking time" button  to know parking time
//  click on "get refund" button to get refund



    uint public parkingTime;
  
    

    // to store the balance of each visitor
    mapping(address => uint) public balance;
    

    // to store the entry time of each visitor
    mapping(address => uint) public entryTimes;
   


    //  function to accept payment and record entry time  
    //   entry time will be noted when payment is done 
    receive() external payable {
        require(msg.value > 0, "You must pay some amount");
        balance[msg.sender] = msg.value;
        entryTimes[msg.sender] = block.timestamp;
    }
    


    // parking fee used   (HERE PARKING FEE= 1 wei FOR 1 SEC)    &
    // exit time will be counted when user click on "get parking fee"
    function getParkingFee(address visitor) public  returns (uint) {
  
        parkingTime = block.timestamp - entryTimes[visitor];

        return parkingTime * 1;
    }
    
    

    // A function to refund the overpayment
    function getrefund() public {           
        uint refundAmount = balance[msg.sender] - parkingTime;       
        payable(msg.sender).transfer(refundAmount);
    }
}
