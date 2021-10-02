var SalusPropertyToken = artifacts.require('SalusPropertyToken');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await SalusPropertyToken.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, 111);
            await this.contract.mint(account_one, 222);
            await this.contract.mint(account_two, 333);
            await this.contract.mint(account_two, 444);
        })

        it('should return total supply', async function () {
            const totalSupply = await this.contract.totalSupply();
            assert(Number(totalSupply) === 4, "Total supply returned incorrect value: " + totalSupply);
            
        })

        it('should get token balance', async function () { 
            const balance1 = await this.contract.balanceOf(account_one);
            assert(Number(balance1) === 2, "balanceOf returned incorrect value: " + balance1);
            const balance2 = await this.contract.balanceOf(account_two);
            assert(Number(balance2) === 2, "balanceOf returned incorrect value: " + balance2);
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const expected = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/111";

            const tokenURI = await this.contract.getTokenURI(111);
            assert(tokenURI === expected, "Incorrect tokenURI");
        })

        it('should transfer token from one owner to another', async function () { 
            const ownerBefore = await this.contract.ownerOf("111");
            assert(ownerBefore === account_one, "Incorrect owner: " + ownerBefore);
            await this.contract.transferFrom(account_one, account_two, 111);
            const ownerAfter = await this.contract.ownerOf("111");
            assert(ownerAfter === account_two, "Incorrect owner: " + ownerAfter);
            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await SalusPropertyToken.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let success = false;
            try {
                await this.contract.mint(account_two, 123, {from: account_two});
                success = true;
            }
            catch (error) {
                // threw Error, so test succeeded.
                success = false;
            }
            assert(success === false, "Should fail");  
        })

        it('should return contract owner', async function () { 
            const owner = await this.contract.getOwner();
            assert(owner === account_one, "Incorrect contract owner");
            
        })

    });
})