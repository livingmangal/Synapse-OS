# Security Policy

## Supported Versions

Currently, only the `main` branch is supported for security updates.

| Version | Supported          |
| ------- | ------------------ |
| `main`  | :white_check_mark: |

## Reporting a Vulnerability

We take the security of the SynapseOS platform and our users' health data very seriously. 

If you discover a security vulnerability within this project, please **do not** disclose it publicly. 

Instead, follow these steps:
1. Navigate to the **Security** tab of this repository on GitHub.
2. Click on **Private vulnerability reporting** (if enabled) or reach out directly to the maintainers via email at `security@sanjeevnios.com` (placeholder).
3. Provide a detailed description of the vulnerability, steps to reproduce, and potential impact.

We will acknowledge receipt of your vulnerability report within 48 hours and strive to send you regular updates about our progress. If you report a vulnerability, we will coordinate a public disclosure with you once a fix is released.

### Scope

The scope includes:
- Smart contract vulnerabilities (`MedicalRecords.sol`)
- Authorization bypass in the FastAPI backend
- Potential LLM Prompt Injection or Jailbreak vectors
- Data leakage in the frontend React application
- Insecure dependency implementations

Thank you for helping keep SynapseOS secure!
