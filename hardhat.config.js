require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  defaultNetwork: 'polygon_mumbai',
  networks: {
    hardhat: {
      chainId: 80001,
      blockGasLimit: 60000000, // Network block gasLimit
    },
    polygon_mumbai: {
      url: process.env.API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
