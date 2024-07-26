// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC721, Ownable {
    uint256 private _currentTokenId = 0;

    constructor(address initialOwner)
        ERC721("KudaLumping", "KDL")
        Ownable(initialOwner) // Pass the initial owner to the Ownable constructor
    {}

    function mintTo(address recipient) public onlyOwner returns (uint256) {
        uint256 newTokenId = _currentTokenId;
        _mint(recipient, newTokenId);
        _currentTokenId += 1;
        return newTokenId;
    }
}
