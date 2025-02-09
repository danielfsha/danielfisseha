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
]

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
]


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
    "Git",
  'Firebase',
    "Tailwind",
    'MongoDB',
    'NextAuthjs',
    'figma',
  "Typescript",
  "Solidity",
  "RecoilJs",
  "HardhatJs",
  "EthersJs",
  "Framer Motion",
  "Alchemy",
  "Moralis",
  "Metamask",
  "EthersJs",
];


export const projects = [
    {
        name: 'BonkGuys',
        description: 'This is a fun mini game app that allows you to connect with your friends. It allows you to host a game or join a game room to play with your friends. The aim is to stay on the platforms for as long as possible. ',
        bannerImg: 'bonkguys.PNG',
        tags: ['ThreeJs', 'ReactJs', 'React Three Fiber', 'Local Storage'],
        link: 'https://bonkguys.vercel.app/'
    },
    {
        name: 'Talk to PDF using your voice',
        description: 'It uses the Google Gemini to create the embeddings and deepgram Speech-to-Text API to convert your voice into text, and then uses Google gemini API to generate a response based on the text. The app allows you to have a conversation with a PDF file using your voice, making it a useful tool for people who want to interact with PDF files in a more natural way.',
        bannerImg: 'chatPdf.PNG',
        tags: ['AI', 'Nextjs', 'Google Gemini', 'Speech-to-Text', 'Deepgram', 'Nodejs', 'NextAuthjs', "Firebase"],
        link: 'https://pdf-chat-flax.vercel.app/'
    },
    {
        name: 'Cross Chain EVM Wallet',
        description: 'The wallet allows you to view your balances and see all your token holdings in one place, keeping you informed about your assets. Additionally, you can manage your Non-Fungible Tokens (NFTs) directly within the wallet, making it easy to track your digital collectibles. You can also keep an eye on your transaction history, including all your past activities, to effectively manage your portfolio. ',
        bannerImg: 'wallet.PNG',
        tags: ['EVM', 'wallet', "Non custodial wallet", ],
        link: 'https://walletfrontend.vercel.app/'
    },
    {
        name: 'No-Code ERC20 Token Launcher DApp',
        description: "platform features an intuitive interface that enables you to launch a custom token effortlessly. By simply providing essential details such as the token's name, symbol, and initial supply within the user-friendly UI, you can create your own token with ease. This streamlined process ensures that both beginners and experienced users can navigate the token creation journey without any hassle, making it accessible for everyone looking to bring their unique ideas to the blockchain. ",
        bannerImg: 'tokenfactory.PNG',
        tags: ['Defi', 'ERC20', "Token"],
        link: 'https://tokenfactoryfrontend.vercel.app/'
    },
];