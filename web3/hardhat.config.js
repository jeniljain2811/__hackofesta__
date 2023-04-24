/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'Mumbai',
    networks: {
      hardhat: {},
      Mumbai: {
        url: 'https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d',
        accounts: '72ec6d6d1fe8de8ef7f898c732211c3f2c7680a3221d2ad31402077bfd2fba38'
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
