// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title MedicalRecords
 * @notice Hackathon demo — stores file-hash + IPFS CID on-chain for integrity
 *         verification, with simple address-based access control.
 * @dev    No encryption, no multi-org network. See README "Future Work".
 */
contract MedicalRecords {
    struct Record {
        address owner;
        bytes32 fileHash;   // SHA-256 of the report file
        string  cid;        // IPFS content ID
        uint256 timestamp;
    }

    // recordId => Record
    mapping(bytes32 => Record) public records;
    // recordId => grantee => allowed
    mapping(bytes32 => mapping(address => bool)) public access;

    // ── Events ──────────────────────────────────────────────────────────
    event RecordRegistered(
        bytes32 indexed recordId,
        address indexed owner,
        bytes32 fileHash,
        string  cid
    );
    event AccessGranted(bytes32 indexed recordId, address indexed grantee);
    event AccessRevoked(bytes32 indexed recordId, address indexed grantee);

    // ── Core Functions ──────────────────────────────────────────────────

    /**
     * @notice Register a new medical record on-chain.
     * @param recordId  Unique identifier (e.g. keccak256 of file + owner + nonce)
     * @param fileHash  SHA-256 digest of the uploaded file
     * @param cid       IPFS content identifier returned by the pinning service
     */
    function registerRecord(
        bytes32 recordId,
        bytes32 fileHash,
        string calldata cid
    ) external {
        require(records[recordId].owner == address(0), "already exists");
        records[recordId] = Record(msg.sender, fileHash, cid, block.timestamp);
        emit RecordRegistered(recordId, msg.sender, fileHash, cid);
    }

    /**
     * @notice Owner grants read access to another address.
     */
    function grantAccess(bytes32 recordId, address grantee) external {
        require(records[recordId].owner == msg.sender, "not owner");
        access[recordId][grantee] = true;
        emit AccessGranted(recordId, grantee);
    }

    /**
     * @notice Owner revokes a previously granted access.
     */
    function revokeAccess(bytes32 recordId, address grantee) external {
        require(records[recordId].owner == msg.sender, "not owner");
        access[recordId][grantee] = false;
        emit AccessRevoked(recordId, grantee);
    }

    /**
     * @notice Check whether an address may access a record.
     * @return true if the address is the owner OR has been granted access.
     */
    function hasAccess(
        bytes32 recordId,
        address grantee
    ) external view returns (bool) {
        return records[recordId].owner == grantee || access[recordId][grantee];
    }
}
