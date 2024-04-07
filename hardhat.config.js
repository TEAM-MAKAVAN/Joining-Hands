require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/TIyInA-AhnLRtGDFlwi5ciSYLJpYxhf5",
      accounts: ["21bd68540348d86a34a97be6680501386a9c5f2d8cde99be8dce29bfb563f47c"]
    }
  }
};