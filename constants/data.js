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
        name: 'Node based social media automation builder',
        description: 'This is a Nextjs app that allows you to create a social media automation bot that can be used to post on multiple platforms such as Twitter, Instagram, and Facebook. It also allows you to trigger certain actions based on events like email recived. The app allows you to make professional social media presence by automating your social media posts and actions.',
        bannerImg: 'automationBuilder.PNG',
        tags: ['Nextjs', 'Nodejs', 'NextAuthjs', 'Bot', "MongoDB"],
        link: 'https://automation-builder-app.vercel.app/'
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
];