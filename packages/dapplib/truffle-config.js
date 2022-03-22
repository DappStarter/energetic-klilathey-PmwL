require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million pulp hockey enter blue trick'; 
let testAccounts = [
"0x85a09112881858ce2fb047c60953ad1a51b7218e5259e9941adaa33ea3170068",
"0xc9684d39fc754f973a0ce818ad9a57386637ec37b90a6617e4f5aca9fb97997f",
"0xb70308e805ff5bdf14b861b99caeb17fc147000d653965f354843b056ef076d5",
"0x238b1ad40b7881c7f5eb906cc9ff820b338f10e6b20fd10511c5c298a931a59c",
"0x752cc434c2dc07a896399ef51f2be9d072dd168c41a939cf5156f410f4eb5b3c",
"0x751630c4bd5c44da3e325c5e2325b63a2f41177f5cdcaf5aa5a66e890c47e974",
"0xd61827e7a2bc468ccc8eb509645b5e3ace3f2a140b7f8611b8bc3b628f5c2d25",
"0x44689bef5f0bbe3687faa11130991ddefdd9c49b5bb357961326fb4548c28df5",
"0x65ac1d6d872a48034ebba65024426f9101f736e6ead9879f03cefbcb9e00d668",
"0xd2a88eac70887006c9597b57fe1e62851e07a97a81ab9af4618c00037e8b410a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


