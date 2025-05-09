const hre=require("hardhat");
async function main(){
const contract= await hre.ethers.getContractFactory("Storage");
const mycontract=await contract.deploy();
await mycontract.waitForDeployment();
console.log("contract deployed at",await mycontract.getAddress());
}
main();
