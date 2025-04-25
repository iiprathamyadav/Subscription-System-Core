# coredao-contract-templates
A collection of CoreDAO contract templates for educational and development purposes.
# ☕ **Subscription System Core ** Smart Contract

A simple smart contract that lets users support creators by "Subscription system " (sending ETH with a message). Built using Solidity and Hardhat, deployable on Core Blockchain networks.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git https://github.com/iiprathamyadav/Subscription-System-Core.git
cd ProjectName
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
PRIVATEKEY="your_core_wallet_private_key"
CORE_TEST2_SCAN_KEY="your_testnet2_explorer_api_key"
```

> ⚠️ **Important:** Never share your private key or commit the `.env` file to version control.

---

## 🛠 Hardhat Commands

### Compile Contracts

```bash
npx hardhat compile
```

### Run Tests

```bash
npx hardhat test
```

### Deploy Contract

Use a deployment script:

```bash
npx hardhat run scripts/deploy.js --network core_testnet2
```

---

## 🔍 Contract Verification

You can verify contracts using Core block explorers:

```bash
npx hardhat verify --network core_testnet2 <deployed_contract_address> <constructor_args_if_any>
```

API keys for verification must be included in `.env` as shown above.

---
