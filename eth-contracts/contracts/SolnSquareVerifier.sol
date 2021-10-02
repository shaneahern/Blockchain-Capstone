// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.7;

import "./ERC721Mintable.sol";
import "./SquareVerifier.sol";

// define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is SalusPropertyToken {

    // define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
    Verifier verifier;


    constructor (address verifierAddress) {
       verifier = Verifier(verifierAddress);
    }


    // define a solutions struct that can hold an index & an address
    struct Solution {    
        uint256 index;  
        address owner;
    }

    // define an array of the above struct
    Solution[] solutions;

    // define a mapping to store unique solutions submitted
    mapping(uint256 => Solution) private uniqueSolutions;


    // Create an event to emit when a solution is added
    event SolutionAdded(uint256 index, address owner);


    // Create a function to add the solutions to the array and emit the event
    function addSolution(uint256 index, address owner) public {
        Solution memory solution = Solution(index, owner);
        solutions.push(solution);
        uniqueSolutions[index] = solution;
        emit SolutionAdded(index, owner);
    }

    // Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    // metadata = name, symbol, URI
    // tokenSupply = _allTokens.length, added on mint() call
    function mintNFT(uint256 tokenId, SquareVerifier.Proof memory proof, uint[2] memory input) public {
        require(verifier.verifyTx(proof, input) == true);
        require(uniqueSolutions[tokenId].owner == address(0x0));
        require(keccak256(abi.encodePacked(getName())) == keccak256("salus_property"));
        require(keccak256(abi.encodePacked(getSymbol())) == keccak256("SLS"));
        addSolution(tokenId, msg.sender);
        uint256 existingTotalSupply = totalSupply();
        mint(msg.sender, tokenId);
        require(totalSupply() == existingTotalSupply + 1);
        string memory tokenURI = getTokenURI(tokenId);
        string memory expectedTokenURI = strConcat("https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/", uint2strNew(tokenId));
        require(keccak256(abi.encodePacked(tokenURI)) == keccak256(abi.encodePacked(expectedTokenURI)));
    }

}

abstract contract Verifier {    
    function verifyTx(SquareVerifier.Proof memory proof, uint[2] memory input) public virtual view returns (bool r);
}


























