

const DonateForEarn = artifacts.require('./DonateForEarn.sol')
contract('DonateForEarn', function (accounts) {
    // let donateForEarn
    // beforeEach('setup contract for each test', async function () {
    //     donateForEarn = await DonateForEarn.new()
    // })
    // it('has an owner', async function () {
    //     assert.equal(await donateForEarn.owner(), accounts[0])
    // })

    it('should be able to donate', async function(){

        
        
        var account_one = accounts[0];
        var account_two = accounts[1];
        var account_three = accounts[2];
        var account_four = accounts[3];

        var account_one_starting_balance = web3.eth.getBalance(account_one).toNumber()

        console.log(account_one_starting_balance)
        var account_two_starting_balance;
        var account_one_ending_balance;
        var account_two_ending_balance;
        
        
        var amount = web3.toWei('2', 'ether')
        
        
        DonateForEarn.deployed().then( async function(instance) {
            await instance.donate({value: amount, from: account_two});
            
            await instance.donate({value: amount, from: account_three});
            await instance.donate({value: amount, from: account_four});
            await instance.donate({value: amount, from: accounts[4]});
            await instance.donate({value: amount * 2, from: accounts[5]});
            
        })
        
        
        
        // return DonateForEarn.deployed().then(function(instance) {
        //     donateForEarn = instance;
        // return donateForEarn.balance.call(account_one);
        // }).then(function(balance) {
        // account_one_starting_balance = balance.toNumber();
        // return donateForEarn.balance.call(account_two);
        // }).then(function(balance) {
        // account_two_starting_balance = balance.toNumber();
        // return donateForEarn.donate({value: amount, from: account_two});
        // }).then(function() {
        // return donateForEarn.balance.call(account_one);
        // }).then(function(balance) {
        // account_one_ending_balance = balance.toNumber();
        // return donateForEarn.balance.call(account_two);
        // }).then(function(balance) {
        // account_two_ending_balance = balance.toNumber();

        // assert.equal(account_one_ending_balance, account_one_starting_balance , "Amount wasn't correctly taken from the sender");
        // assert.equal(account_two_ending_balance, account_two_starting_balance , "Amount wasn't correctly sent to the receiver");
    });
        
  


})
