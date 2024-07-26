async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy();
  await myNFT.deployed();

  console.log("MyNFT deployed to:", myNFT.address);

  // Mint an NFT
  const tx = await myNFT.mintTo(deployer.address);
  await tx.wait();

  console.log(`Minted NFT to ${deployer.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
