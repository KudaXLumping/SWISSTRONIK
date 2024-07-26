async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(deployer.address);
  await myToken.deployed();

  console.log("MyToken deployed to:", myToken.address);

  // Mint an NFT
  const tx = await myToken.mintTo(deployer.address);
  await tx.wait();

  console.log(`Minted NFT to ${deployer.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
