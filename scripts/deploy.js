const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying banking contract with the account:", deployer.address);

  // Deploy your Parking contract here
  const bank = await ethers.getContractFactory("bank");
  const bankContract = await bank.deploy();
  await bankContract.deployed();

  console.log("bank contract address:", bankContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  