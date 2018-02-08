pragma solidity ^0.4.19;
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/DonateForEarn.sol";

contract TestDonation {
  function testPlatformUsingDeployedContract() public {
    DonateForEarn dfe = DonateForEarn(DeployedAddresses.DonateForEarn());

    address expected = tx.origin;
    
    Assert.equal(dfe.ownerAddress(), expected, "platform address should be 0x627306090abaB3A6e1400e9345bC60c78a8BEf57");
  }

  
  
}