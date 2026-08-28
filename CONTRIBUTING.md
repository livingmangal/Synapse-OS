# Contributing to SynapseOS

First off, thank you for considering contributing to SynapseOS! It's people like you that make SynapseOS such a great open-source platform for autonomous health management.

## Getting Started

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Sanjeevni-OS.git
   ```
3. **Set up the development environment**:
   Follow the [Installation & Local Setup](README.md#14-installation--local-setup) instructions in the README to start the Frontend (Next.js), Backend (FastAPI), and Blockchain components.

## How Can I Contribute?

### Reporting Bugs
If you find a bug, please create an Issue using the Bug Report template. Include as much detail as possible: steps to reproduce, expected behavior, actual behavior, and environment details.

### Suggesting Enhancements
Have an idea for a new agent, a new feature, or an architectural improvement? Open a Feature Request Issue. We welcome ideas on how to improve the clinical intelligence or accessibility of the platform.

### Pull Requests
1. Create a new branch for your feature or bugfix: `git checkout -b feature/your-feature-name`.
2. Make your changes in the codebase.
3. Ensure your code follows the existing style:
   - **Frontend**: TypeScript strict mode, Tailwind CSS utility classes, Prettier formatting.
   - **Backend**: PEP 8 compliance, Black formatting, Pydantic type hints.
   - **Blockchain**: Solidity 0.8.20 standards, Hardhat test coverage.
4. Run tests before submitting: `pytest` for backend, `hardhat test` for blockchain.
5. Push to your fork and submit a Pull Request against the `main` branch.

## Code of Conduct
By participating in this project, you agree to maintain a respectful and welcoming environment for everyone. Please be kind, collaborative, and professional in all interactions.

Thank you for contributing!
