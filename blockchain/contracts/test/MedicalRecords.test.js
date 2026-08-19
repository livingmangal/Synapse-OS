import { expect } from "chai";
import hre from "hardhat";

const { ethers, networkHelpers } = await hre.network.create();

describe("MedicalRecords", function () {
  const recordId = ethers.id("test-record-1");
  const fileHash = ethers.id("fake-sha256-hash");
  const cid = "QmTestCID123456789";

  async function deployFixture() {
    const contract = await ethers.deployContract("MedicalRecords");
    const [owner, alice, bob] = await ethers.getSigners();
    return { contract, owner, alice, bob };
  }

  describe("registerRecord", function () {
    it("should register a new record", async function () {
      const { contract, owner } = await networkHelpers.loadFixture(deployFixture);

      const tx = await contract.registerRecord(recordId, fileHash, cid);
      await expect(tx)
        .to.emit(contract, "RecordRegistered")
        .withArgs(recordId, owner.address, fileHash, cid);

      const record = await contract.records(recordId);
      expect(record.owner).to.equal(owner.address);
      expect(record.fileHash).to.equal(fileHash);
      expect(record.cid).to.equal(cid);
      expect(record.timestamp).to.be.greaterThan(0n);
    });

    it("should reject duplicate recordId", async function () {
      const { contract } = await networkHelpers.loadFixture(deployFixture);

      await contract.registerRecord(recordId, fileHash, cid);
      await expect(
        contract.registerRecord(recordId, fileHash, cid)
      ).to.be.revertedWith("already exists");
    });
  });

  describe("Access control", function () {
    async function deployAndRegisterFixture() {
      const { contract, owner, alice, bob } = await deployFixture();
      await contract.registerRecord(recordId, fileHash, cid);
      return { contract, owner, alice, bob };
    }

    it("owner should have access", async function () {
      const { contract, owner } = await networkHelpers.loadFixture(deployAndRegisterFixture);
      expect(await contract.hasAccess(recordId, owner.address)).to.be.true;
    });

    it("non-owner should NOT have access by default", async function () {
      const { contract, alice } = await networkHelpers.loadFixture(deployAndRegisterFixture);
      expect(await contract.hasAccess(recordId, alice.address)).to.be.false;
    });

    it("should grant access", async function () {
      const { contract, alice } = await networkHelpers.loadFixture(deployAndRegisterFixture);

      const tx = await contract.grantAccess(recordId, alice.address);
      await expect(tx)
        .to.emit(contract, "AccessGranted")
        .withArgs(recordId, alice.address);
      expect(await contract.hasAccess(recordId, alice.address)).to.be.true;
    });

    it("should revoke access", async function () {
      const { contract, alice } = await networkHelpers.loadFixture(deployAndRegisterFixture);

      await contract.grantAccess(recordId, alice.address);
      const tx = await contract.revokeAccess(recordId, alice.address);
      await expect(tx)
        .to.emit(contract, "AccessRevoked")
        .withArgs(recordId, alice.address);
      expect(await contract.hasAccess(recordId, alice.address)).to.be.false;
    });

    it("only owner can grant access", async function () {
      const { contract, alice, bob } = await networkHelpers.loadFixture(deployAndRegisterFixture);

      await expect(
        contract.connect(alice).grantAccess(recordId, bob.address)
      ).to.be.revertedWith("not owner");
    });

    it("only owner can revoke access", async function () {
      const { contract, alice, bob } = await networkHelpers.loadFixture(deployAndRegisterFixture);

      await contract.grantAccess(recordId, alice.address);
      await expect(
        contract.connect(alice).revokeAccess(recordId, bob.address)
      ).to.be.revertedWith("not owner");
    });
  });
});
