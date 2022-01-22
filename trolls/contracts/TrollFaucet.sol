// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

// TROLLS SmartBCH SEP20 token faucet
// https://troll-token.github.io
// Claim 500 TROLLS one time per day

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TrollFaucet {
    string public name = "TrollFaucet";
    address public zombie;
    uint256 public amount;

    constructor() {
      trolls = 0X0;
      amount = 500;
    }

    mapping(address => uint) public lockTime;

    function claimTrolls(address recipient) public {
      require(block.timestamp > lockTime[msg.sender], "Please try again later. Wait for the troll army");
      require(IERC20(trolls).balanceOf(address(this)) >= amount, "Not enough trolls. Try to troll somebody");
      IERC20(trolls).transfer(recipient, amount);
      lockTime[msg.sender] = block.timestamp + 1 days;      
    }
}
