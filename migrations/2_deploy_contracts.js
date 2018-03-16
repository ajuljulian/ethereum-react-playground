var NameGame = artifacts.require("./NameGame.sol");

module.exports = function(deployer) {
  deployer.deploy(NameGame);
};
