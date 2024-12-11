# Base Quest Hub 🎮

A gamified platform for Base network users to complete quests, earn points, and compete on the leaderboard. Complete on-chain activities to earn rewards and climb the ranks!

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

![image](https://github.com/user-attachments/assets/8ac48668-f936-430b-95c4-fb4097d04e1b)

![image](https://github.com/user-attachments/assets/ab4be5b3-da95-4817-8426-f29f24faf7e0)

![image](https://github.com/user-attachments/assets/6903ebbc-9f75-429f-ba17-7a46a76b3885)




## 🚀 Features

- **Quest System**: Complete on-chain activities to earn points
- **Leaderboard**: Compete with other users and track your ranking
- **Wallet Integration**: Seamless connection with major Web3 wallets
- **Real-time Updates**: Live tracking of quest completions and points
- **ENS Integration**: Support for ENS names in profiles and leaderboard
- **Social Features**: Track friends' progress and achievements

## 📋 Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- A modern web browser with a Web3 wallet (e.g., MetaMask)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/base-quest-hub.git
cd base-quest-hub
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_WALLET_CONNECT_ID=your_wallet_connect_project_id
NEXT_PUBLIC_QUEST_HUB_ADDRESS=your_contract_address
```

4. Run the development server:
```bash
yarn dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
base-quest-hub/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components/
│   ├── NavBar.tsx
│   ├── QuestBoard.tsx
│   ├── QuestCard.tsx
│   ├── Profile.tsx
│   └── Leaderboard.tsx
├── hooks/
│   ├── useQuests.ts
│   ├── useUserData.ts
│   └── useLeaderboard.ts
├── types/
│   ├── Quest.ts
│   └── User.ts
└── contracts/
    ├── QuestHub.sol
    └── abi.ts
```

## 💻 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Web3**: wagmi v2, RainbowKit v2, viem
- **Smart Contracts**: Solidity
- **State Management**: React Query

## 🔑 Smart Contract

The QuestHub smart contract is deployed on Base network and handles:
- Quest completion verification
- Points tracking
- Leaderboard management
- User data storage

Contract Address: `[Your Contract Address]`

## 📝 Available Scripts

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run tests
yarn test

# Run linting
yarn lint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- John Doe - Frontend Developer
- Jane Smith - Smart Contract Developer
- [Add your team members]

## 🔗 Links

- [Live Demo](https://too-quick-9kpm.vercel.app/)
- [Documentation](https://plant-octave-bc7.notion.site/Base-Quest-Hub-Gamified-On-chain-Activity-Platform-159d8b3479ac80cd86d5c09107e19864)
- [Contract on BaseScan](https://basescan.org)

## 🙏 Acknowledgments

- Base team for the infrastructure
- RainbowKit for wallet integration
- [Add other acknowledgments]

## 📞 Support

For support, please join our [Discord](your-discord-link) or open an issue in the repository.

## 🚧 Roadmap

- [ ] Quest marketplace for protocols
- [ ] Advanced analytics dashboard
- [ ] Guild system implementation
- [ ] Mobile app development
- [ ] Cross-chain expansion


