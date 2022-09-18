const { ethers } = require("ethers"); // yarn add ethers
const Web3 = require('web3'); // yarn add web3
var wss = "YOUR_FASTLYNODE_HERE"; // use specific wss for the chain you wish to check balance in
const web3 = new Web3(wss);

let success = 0;

var init = async function() {
    while(!success) { 
        let createWallet = ethers.Wallet.createRandom(); // generates random wallet
        const getBalance = await web3.eth.getBalance(createWallet.address) // uses web3 to check balance of generated address
        const ethBalance = web3.utils.fromWei(getBalance, 'ether') // converts wei to decimals
        console.log('🔍 Checking Wallet:', createWallet.address)
        if (ethBalance > 0) { //print wallet details only if balance is greater than 0
            console.log('👾 Address:', createWallet.address)
            console.log('💬 Mnemonic:', createWallet.mnemonic.phrase)
            console.log('🔑 Private Key:', createWallet.privateKey)
            console.log('🤑 Balance:',ethBalance, 'BNB')
            success = 1;
        }
    }
}

init();
