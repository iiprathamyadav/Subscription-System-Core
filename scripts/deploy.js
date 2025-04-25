const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying Subscription contract with deployer:", deployer.address);

  const Token = await hre.ethers.getContractFactory("YourERC20Token");
  const token = await Token.deploy();
  await token.deployed();

  const monthlyFee = hre.ethers.utils.parseEther("10");

  const Subscription = await hre.ethers.getContractFactory("Subscription");
  const subscription = await Subscription.deploy(token.address, monthlyFee);
  await subscription.deployed();

  console.log("✅ Subscription contract deployed at:", subscription.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
