// migrating the appropriate contracts
var SquareVerifier = artifacts.require("SquareVerifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");

module.exports = function(deployer) {
  deployer.deploy(SquareVerifier).then(() => deployer.deploy(SolnSquareVerifier, SquareVerifier.address));
};
