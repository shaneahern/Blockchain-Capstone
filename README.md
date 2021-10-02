# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

* Contract for Salus_Property (SLS) token deployed at 
  * https://rinkeby.etherscan.io/address/0xe7fF79406B82a6Adfb7A10Ef9b970dCc9DFd457B
* Tokens on OpenSea
  * https://testnets.opensea.io/collection/unidentified-contract-ovwcsur126
* SLS token purchases:
  * https://rinkeby.etherscan.io/address/0xD191CCfBF8715414E56C623e28D964Efc15Ed46D#tokentxnsErc721
  * https://rinkeby.etherscan.io/address/0x595ceD4D538d6F9ab1f0EC82Cc88143E57a9024f#tokentxnsErc721

## Software Versions 
* Truffle v5.4.6 (core: 5.4.6)
* Solidity - 0.8.7 (solc-js)
* Node v14.17.1
* Web3.js v1.5.1

## Setup
 * Clone project: ```git clone https://github.com/shaneahern/Blockchain-Capstone.git```
 * To deploy via Infura you'll need an Infura API keys are available for free at: infura.io/register
 * Edit ```Blockchain-Capstone/eth-contracts/truffle-config.js``` and replace <YOUR_INFURA_KEY_HERE> with your Infura key
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate public/private key pairs. 
 * Create a file at ```Blockchain-Capstone/eth-contracts/.secret``` and enter your wallet mnemonic there.

## Compile Contracts and Run Tests
```
cd Blockchain-Capstone
cd eth-contracts
truffle compile
truffle test
```

## Contract Abis
Abi for SquareVerifier.sol
```
[{"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"X","type":"uint256"},{"internalType":"uint256","name":"Y","type":"uint256"}],"internalType":"struct Pairing.G1Point","name":"a","type":"tuple"},{"components":[{"internalType":"uint256[2]","name":"X","type":"uint256[2]"},{"internalType":"uint256[2]","name":"Y","type":"uint256[2]"}],"internalType":"struct Pairing.G2Point","name":"b","type":"tuple"},{"components":[{"internalType":"uint256","name":"X","type":"uint256"},{"internalType":"uint256","name":"Y","type":"uint256"}],"internalType":"struct Pairing.G1Point","name":"c","type":"tuple"}],"internalType":"struct SquareVerifier.Proof","name":"proof","type":"tuple"},{"internalType":"uint256[2]","name":"input","type":"uint256[2]"}],"name":"verifyTx","outputs":[{"internalType":"bool","name":"r","type":"bool"}],"stateMutability":"view","type":"function","constant":true}]
```

Abi for SolnSquareVerifier.sol
```
[{"inputs":[{"internalType":"address","name":"verifierAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransfered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"SolutionAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_myid","type":"bytes32"},{"internalType":"string","name":"_result","type":"string"}],"name":"__callback","outputs":[],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_myid","type":"bytes32"},{"internalType":"string","name":"_result","type":"string"},{"internalType":"bytes","name":"_proof","type":"bytes"}],"name":"__callback","outputs":[],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBaseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSymbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"paused","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"addSolution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"components":[{"internalType":"uint256","name":"X","type":"uint256"},{"internalType":"uint256","name":"Y","type":"uint256"}],"internalType":"struct Pairing.G1Point","name":"a","type":"tuple"},{"components":[{"internalType":"uint256[2]","name":"X","type":"uint256[2]"},{"internalType":"uint256[2]","name":"Y","type":"uint256[2]"}],"internalType":"struct Pairing.G2Point","name":"b","type":"tuple"},{"components":[{"internalType":"uint256","name":"X","type":"uint256"},{"internalType":"uint256","name":"Y","type":"uint256"}],"internalType":"struct Pairing.G1Point","name":"c","type":"tuple"}],"internalType":"struct SquareVerifier.Proof","name":"proof","type":"tuple"},{"internalType":"uint256[2]","name":"input","type":"uint256[2]"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"}]
```

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
