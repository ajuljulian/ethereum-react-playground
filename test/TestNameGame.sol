pragma solidity ^0.4.18;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/NameGame.sol";

contract TestNameGame {

  function testItStoresAValue() public {
    NameGame nameGame = NameGame(DeployedAddresses.NameGame());

    nameGame.interact("Ara");

    bytes32 expected = "Ara";

    Assert.equal(nameGame.currentName(), expected, "It should store the value 'Ara'.");
  }

}
