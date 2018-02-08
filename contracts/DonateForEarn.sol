pragma solidity ^0.4.19;

contract DonateForEarn {
    

    uint minDonation; 
    address public owner;
    
    address[] donaters = new address[](0);
    uint[] donchart = new uint[](0);
    uint totalDonation;

    event MinDonate(uint newValue);
    event Donation(address from, uint value);
    event Reward(address to, uint reward);

    function DonateForEarn() public {
        minDonation = 450;
        MinDonate(minDonation);
        owner = msg.sender;
        totalDonation = 0;
        
    }

    

    function ownerAddress() public view returns (address) {
        return owner;
    }
    
    function donatersAddress() public view returns (address[]) {
        return donaters;
    }

    function donchartAddress() public view returns (uint[]) {
        return donchart;
    }

    function setMinDonation(uint donation) public {
        if (msg.sender == owner && donation >= 1440) {
            minDonation = donation;
            MinDonate(minDonation);
        }
    }

    function donate() public payable {
        uint amount = msg.value;
        require(amount > minDonation);
        require(msg.sender != owner);
        
        Donation(msg.sender, amount);
        totalDonation += amount;
        
        amount /= 2;
        owner.transfer(amount);
        
        if(donaters.length > 0){
            for(uint i = donaters.length - 1; i >= 0 && i < donaters.length; i--){
                address receiver = donaters[i];
                uint historyDon = donchart[i];
                uint reward = amount * historyDon /(amount + historyDon);
                receiver.transfer(reward);
                Reward(receiver, reward);
                amount = amount - reward;
            }
        }
        owner.transfer(amount);
        donaters.push(msg.sender);
        donchart.push(msg.value);
    }
}