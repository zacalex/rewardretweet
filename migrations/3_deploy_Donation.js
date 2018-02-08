var DonateForEarn = artifacts.require("./DonateForEarn.sol");

module.exports = function(deployer) {
  deployer.deploy(DonateForEarn);
//   deployer.link(DonateForEarn);
};
