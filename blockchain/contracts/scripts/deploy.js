import hre from "hardhat";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const { ethers } = await hre.network.connect();
  console.log("Deploying MedicalRecords contract...");

  const contract = await ethers.deployContract("MedicalRecords");
  const address = await contract.getAddress();
  console.log(`✅ MedicalRecords deployed to: ${address}`);

  // Read the compiled artifact to get the ABI
  const artifactPath = path.resolve(
    __dirname,
    "../artifacts/contracts/MedicalRecords.sol/MedicalRecords.json"
  );
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

  // Write the deployed address + ABI to a JSON file the frontend can import
  const frontendDir = path.resolve(__dirname, "../../frontend/lib");
  if (!fs.existsSync(frontendDir)) {
    fs.mkdirSync(frontendDir, { recursive: true });
  }

  const networkName = process.argv.includes("sepolia") ? "sepolia" : (hre.network.name || "localhost");

  const deployedData = {
    address: address,
    network: networkName,
    abi: artifact.abi,
    deployedAt: new Date().toISOString(),
  };

  const outPath = path.join(frontendDir, "deployedContract.json");
  fs.writeFileSync(outPath, JSON.stringify(deployedData, null, 2));
  console.log(`📄 Contract data written to: ${outPath}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
