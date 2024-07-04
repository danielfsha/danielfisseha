export const links = [
    {
        name: 'Home',
        hash: '#hero' 
    },
    {
        name: 'About',
        hash: '#about' 
    },
    {
        name: 'Skills',
        hash: '#skills' 
    },
    {
        name: 'Projects',
        hash: '#projects' 
    }
] as const

export const socials = [
    {
        label: 'github',
        link: 'https://github.com/danielfsha',
        icon: 'github.svg'
    }, 
    {
        label: 'linkedin',
        link: "https://www.linkedin.com/in/daniel-fisseha-b1b74b203/",
        icon: 'linkedin.svg'
    },
    {
        label: 'gmail',
        link: "mailto:developedbydanielfisseha@gmail.com",
        icon: 'gmail.svg'
    }
] as const 


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Solidity",
  "RecoilJs",
  "HardhatJs",
  "EthersJs",
  "Framer Motion",
  "Alchemy",
  "Moralis",
  "Metamask",
  "EthersJs"
] as const;


export const projects = [
    {
        name: 'Cross Chain EVM Wallet',
        description: 'This is a Non custodial wallet in which you are responsible for storing and managing your private keys. It allows you to create new wallet, recover existing wallet from seed phrase, view their balances, token holding, NFTs, past activities and initiate new transactions. ',
        bannerImg: 'wallet.PNG',
        tags: ['EVM', 'wallet', "Non custodial wallet"],
        link: 'https://walletfrontend.vercel.app/'
    },
    {
        name: 'No-Code ERC20 Token Launcher DApp',
        description: 'An intuitive interface that allows you to launch a custom token by providing details, such as name, symbol, and initial supply within the UI',
        bannerImg: 'tokenfactory.PNG',
        tags: ['Defi', 'ERC20', "Token"],
        link: 'https://tokenfactoryfrontend.vercel.app/'
    },
    {
        name: 'NFT Minter DApp',
        description: 'An NFT minting DApp to mint unique digital assets on the Ethereum Spolia.It has a visually appealing user interface that allows you to easily connect your wallets, pick an image for NFT designs, and initiate the minting process after providing name, symbol and description',
        bannerImg: 'nftminter.PNG',
        tags: ['NFT', 'Collectables', "ERC721"],
        link: 'https://nftminter-livid.vercel.app/'
    }
] as const;