// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier


var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var SquareVerifier = artifacts.require('SquareVerifier');

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];

    const proofData = {
        "proof": {
          "a": [
            "0x13aadb0ccdcf502d093fb9844daa62abc20d19a16881cd68472deda8f45899b3",
            "0x01ddd63bcc550d4d936c4649d92f6612259ba5d70f48ed96a24c725e692e0f5b"
          ],
          "b": [
            [
              "0x20583d924bddddcfefc6f94713bcee7521873f26dc0b95280f4927b5eb24e8bc",
              "0x305a952fd8dedbaa9ed02799fd641a03a2b82102c42bff733a51e3487d609365"
            ],
            [
              "0x2c08f3d72f1733521d92076083d94603ba01c942db7596caeeb8b99521d237cb",
              "0x2f02f43e82263f951223fa372323fdbfb3f5ac3ac675e1192c28c69f23aac6c4"
            ]
          ],
          "c": [
            "0x225d2f6ebba7f11de351e265db73048f0a3aeac8f24327d839c0de551953b186",
            "0x044f88b0d50cd978d66548fa9c3e61e10f7fb11a1c53aef4249f233f696cfced"
          ]
        },
        "inputs": [
          "0x0000000000000000000000000000000000000000000000000000000000000009",
          "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
      };

    describe('match SolnSquareVerifier spec', function () {
        beforeEach(async function () { 
            this.verifier = await SquareVerifier.deployed();
            this.contract = await SolnSquareVerifier.deployed(this.verifier);
        })

        // string tokenName = "salus";
        // string symbol = "SLS";
        // string baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";
       
        it('a new solution can be added for contract', async function () {
            const tx = await this.contract.addSolution(123, account_one);
            const { logs } = tx;
            assert.ok(Array.isArray(logs));
            assert.equal(logs.length, 1);

            const log = logs[0];
            assert.equal(log.event, 'SolutionAdded');
            assert.equal(log.args.index.toString(), '123');
            assert.equal(log.args.owner , account_one);
        })
        
        
        // Before you mint a token, you need to verify you own the property. 
        // You will use zk-SNARKs to create a verification system which can prove
        // you have title to the property without revealing that specific information
        // on the property. We covered the basics on zk-SNARKs in Privacy lesson in Course 5

        it('an ERC721 token can be minted for contract', async function () {
            const tx = await this.contract.mintNFT(456, proofData.proof, proofData.inputs);
            const { logs } = tx;
            assert.ok(Array.isArray(logs));
            assert.equal(logs.length, 2);

            const log = logs[0];
            assert.equal(log.event, 'SolutionAdded');
            assert.equal(log.args.index.toString(), '456');
            assert.equal(log.args.owner , account_one);

        })

    });
})
