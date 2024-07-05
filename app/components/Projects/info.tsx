const info: {

   
   name: string,
   keywords: string[],
   category:string,
   description: string,
   
   bgColor: string,
   screenshots: string,

   liveLink: string,
   githubLink: string,
   mediumLink: string,
}[] = [
      {
         
         name: "CryptApex",
         keywords: ["NextJS", "AppWrite", "Vercel", "TailwindCSS", "Figma", "GSAP"],
         category:"backend",
         description: "Design and Development of a Landing page with sign up functionality built during my time at CryptApex",

         bgColor: "#00204F",
         screenshots: "/assets/cryptapex.png",

         liveLink: "https://www.cryptapex.com/",
         githubLink: "",
         mediumLink: "",
      },
      {
         
         name: "Pedestrian Navigation based on Illumination",
         keywords: ["React Native","Expo","Google Maps API","Hyperledger Fabric","Arduino","Javascript"],
         category:"mobile",
         description: "A navigation app that provides walking directions through the best-illuminated paths of the city while avoiding dark areas",

         liveLink: "",
         githubLink: "https://github.com/tortsBsus/Capstone",
         mediumLink: "",

         bgColor: "#00204F",
         screenshots: "/assets/lumos.png"
      },

      {
         
         name: "BMS-IoT",
         keywords: ["React Native", "Google Cloud Console", "Arduino IDE", "Expo", "Python", "C++", "Javascript"],
         category:"mobile",
         description: "An IoT-based Smart Irrigation System that integrates sensor and weather API data to predict the amount of water required using an LSTM deep learning model, demonstrating a 15\% reduction in water usage.",

         liveLink: "",
         githubLink: "https://github.com/itsNavaneeth/bms-iot-expo-ignite",
         mediumLink: "",

         bgColor: "#01EE84",
         screenshots: "/assets/BMSIoT.png"
      },

      {
         
         name: "Clique : Shop with Friends",
         keywords:["Android Studio","Java","Material Design","Vonage API","WebRTC"],
         category:"mobile",
         description:"A mobile platform for collaborative curation of products from e-commerce outlets, fostering real-time social interactions through audio and video channels",
         
         liveLink: "",
         githubLink:"https://github.com/tortsBsus/Clique-ShopWithFriends",
         mediumLink: "",
         
         bgColor:"#9697FA",
         screenshots:"/assets/Clique1.png"
      },
      {
         
         name: "Cipher It",
         keywords:["Java","Netbeans GUI","MultiThreaded Algorithm"],
         category:"backend",
         description:"An Encryption software that encrypts and decrypts, ﬁle or text input, using Substitution, Caesar or DES algorithms",

         liveLink: "",
         githubLink:"https://github.com/tortsBsus/Cipher-It",
         mediumLink: "",
         
         bgColor:"#E73F7B",
         screenshots:"/assets/CipherIt1.png"
      },

      {
         
         name: "Comment Cleanser",
         keywords: ["ReactJS","TypeScript","Youtube Data API","Vercel","OpenAI GPT"],
         category:"backend",
         description: "An AI tool for content creators to filter out the spam from their youtube comment sections using just the url of any youtube video",

         liveLink: "https://comment-cleanser.vercel.app/",
         githubLink: "https://github.com/tortsBsus/comment-cleanser",
         mediumLink: "",
         
         bgColor: "#1A202C",
         screenshots: "/assets/CommentCleanser.png"
      },
      {
         
         name: "Select Chip Component",
         keywords: ["Tailwind","NextJS 14","TypeScript"],
         category:"backend",
         description: "An assignment to create a Select Component from scratch based on certain criteria",
         
         liveLink: "https://zepto-select-assignment.vercel.app/",
         githubLink: "https://github.com/tortsBsus/zepto-chip-component-assignment",
         mediumLink: "",
         
         bgColor: "#00204F",
         screenshots: "/assets/select-chip-component.png"
      },
      {
         
         name: "Alien Votes",
         keywords: ["ReactJS","Solidity","Rinkeby","Metamask","Hardhat","Vercel"],
         category:"blockchain",
         description: "An implementation of Blockchain based voting systems, that lets users cast a vote and once cast, displays which team is winning once the transaction is completed",
         
         liveLink: "https://alien-votes-web3.vercel.app/",
         githubLink: "https://github.com/tortsBsus/Alien-Votes-Web3",
         mediumLink: "",
         
         bgColor: "#029299",
         screenshots: "/assets/AlienVotes.png"
      },
      {
         
         name: "Claritable",
         keywords: ["ReactJS","TypeScript","Solidity","MetaMask","Hardhat","Vercel"],
         category:"blockchain",
         description: "A web3 based accountability system that empowers users to make cryptocurrency donations via a MetaMask wallet and provides a breakdown of where the charity used each part of the donation.",
         
         liveLink: "https://claritable-proj.vercel.app/",
         githubLink: "https://github.com/tortsBsus/Claritable",
         mediumLink: "",
         
         bgColor: "#AA0C15",
         screenshots: "/assets/Claritable.png"
      },

      {
         
         name: "Penpal with me",
         keywords: ["MySQL Database","HTML","CSS","JavaScript","PHP"],
         category:"backend",
         description: " A social media website that matches users based on common interests and languages, connecting people from diverse backgrounds by allowing them to send letter - like messages.",
         
         liveLink: "",
         githubLink: "https://github.com/tortsBsus/Penpal-with-Me",
         mediumLink: "",
         
         bgColor: "#8F78C2",
         screenshots: "/assets/Penpal.png"
      },
      // {
         
      //    name: "Supply Chain Management using Blockchain",
      //    keywords: ["ReactJS","Solidity","Rinkeby","Metamask","Hardhat","Vercel"],
      //    category:"blockchain",
      //    description: "A web3 based management system where movement of payloads belonging to different companies can be tracked between hubs and stored in an immutable ledger",
         
      //    liveLink: "https://capstone-project-taupe.vercel.app/",
      //    githubLink: "NA",
      //    mediumLink: "https://capstone-project-taupe.vercel.app/",
         
      //    bgColor: "#00204F",
      //    screenshots: "/assets/lumos.png"
      // },
      //  {
         
      //    name: "Ovarian Cancer Prediction",
      //    keywords: ["Python","Keras","Google Collab"],
      //    category:"backend",
      //    description: "Built K-Nearest Neighbour, Naive Bayes and other Machine Learning models that predicts the likelihood of tumours being cancerous based on the findings of a scientific paper ",
         
      //    liveLink: "https://github.com/tortsBsus/Ovarian_Cancer_Prediction",
      //    githubLink: "https://github.com/tortsBsus/Ovarian_Cancer_Prediction",
      //    mediumLink: "https://github.com/tortsBsus/Ovarian_Cancer_Prediction",
         
      //    bgColor: "#00204F",
      //    screenshots: "/assets/lumos.png"
      // },
      // {
         
      //    name: "All you need to know: BTS",
      //    liveLink: "https://all-you-need-to-know-bts.vercel.app/",
      //    githubLink: "https://github.com/tortsBsus/All-You-Need-To-Know-BTS",
      //    keywords: ["ReactJS"],
      //    category:"backend",
      //    description: "This is a project",
      //    mediumLink: "https://all-you-need-to-know-bts.vercel.app/",
      //    bgColor: "#00204F",
      //    screenshots: "/assets/lumos.png"
      // },     
      // {
         
      //    name: "StudyFund",
      //    liveLink: "https://github.com/tortsBsus/StudyFund",
      //    githubLink: "https://github.com/tortsBsus/StudyFund",
      //    keywords: ["ReactJS"],
      // category:"",
      //    description: "This is a project",
      //    mediumLink: "https://github.com/tortsBsus/StudyFund",
      //    bgColor: "#00204F",
      //    screenshots: "/assets/lumos.png"
      // },

   ]

const keywords = {

}

const FeaturedProject : {

   
   name: string,
   keywords: string[],
   category:string,
   description: string,
   
   bgColor: string,
   screenshots: string,

   liveLink: string,
   githubLink: string,
   mediumLink: string,
} = {

   
   name: "Spiinder",
   keywords: ["NextJS", "Shadcn", "TailwindCSS", "Google OAuth", "Google APIs"],
   category:"backend",
   description: "Categorise your spends via swipes - an expense tracker that lets you swipe your transactions into different categories and understand where your money goes",
   
   bgColor: "red",
   screenshots: "/assets/Spiinder.gif",

   liveLink: "https://spiinder.vercel.app/",
   githubLink: "https://github.com/tortsBsus/spiinder",
   mediumLink: "",
}

export default {info, FeaturedProject};