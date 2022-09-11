require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note toss common install opinion bottom slice'; 
let testAccounts = [
"0xb5562df481236ca44aca811496f69f853b98247b8302fe0e5b7df0914984e1f9",
"0x81be5d470592cb873e203e493f71c66ff2d3a6740701047da8326c3501c4ccab",
"0x1fa50c57912344c9ed5e6be52f27b2fa07556406afb98d02862cf4265e24521e",
"0xa5a0beb43b3259cd6c52e5d0737d9b0dc592dce3b6d82e4679cfc111ad991d17",
"0x10b89f4526a74df330bf323af408fb4695f69e41eb26659bd5abc9d9db4dd6e1",
"0xdecff15be8dc69950481af7f6791c2b6d595f0a398e4b8a24c3f36723f4327a9",
"0xe65b54af028e5a396f9c2d9d35564ca3f0adee4f19676a6916ef08eeac075ca3",
"0x9dea499627b8a1898ecc20ebdc696658b2b011fbcb0f728e3afcbaa0d784b6be",
"0xabf78f083187b429bdd418493493d4f6b7780fc32be472e42a74a20a16839782",
"0x4da8bee4fd9cdaced33199a7f0feaa34d926c76abf8537c500d9a1245d4dca4d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

