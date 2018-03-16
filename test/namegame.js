var NameGame = artifacts.require("./NameGame.sol");

contract('NameGame', function(accounts) {

  it("...should store the name 'Ara'.", function() {
    return NameGame.deployed().then(function(instance) {
      nameGameInstance = instance;

      return nameGameInstance.interact("Ara", {from: accounts[0]});
    }).then(function() {
      return nameGameInstance.currentName.call();
    }).then(function(storedData) {
      assert.equal(web3.toUtf8(storedData), "Ara", "The value 'Ara' was not stored.");
    });
  });

});
