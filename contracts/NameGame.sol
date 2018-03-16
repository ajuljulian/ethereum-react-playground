pragma solidity ^0.4.18;

contract NameGame {

  bytes32 name;
  uint    lastUpdated;
  address lastAddress;

  event NameGame(bytes32 indexed name, address indexed addr, uint indexed timeUpdated);

  function  currentName() public constant returns(bytes32) {
    return name;
  }

  function  lastUpdatedMinutes() public constant returns(uint) {
    return ((now - lastUpdated)/60);
  }

  function  fromAddres() public constant returns(address) {
    return lastAddress;
  }

  function interact(bytes32 yourName) public {
    name = yourName;
    lastAddress = msg.sender;
    lastUpdated = now;
    NameGame(name,lastAddress,lastUpdated);
  }
}
