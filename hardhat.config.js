require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks:{
    ganache:{
      url:"http://127.0.0.1:7545",
      accounts:["0x7f86e5b639af1c7d5d5e971a06f4b0dd27196947afa6508955d12f285a53aed3"]
    }
  }
};
