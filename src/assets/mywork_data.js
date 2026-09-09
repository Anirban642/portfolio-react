import project1_img from '../assets/project_1.png'
import project7_img from '../assets/project_7.png'
import project8_img from '../assets/project_8.png'

const mywork_data = [
    {
        w_no:1,
        w_name:"TextileMarket",
        w_desc:"AI-powered B2B textile sourcing with natural-language and voice input for buyers and suppliers.",
        w_stack:["React", "Node.js", "AI integration"],
        w_features:["Natural-language search", "Voice search", "Buyer and supplier workflows"],
        w_img:project7_img,
        w_link:"https://textile-marketplace-sigma.vercel.app/",
        w_github:"https://github.com/Anirban642/marketplace-hackathon",
        featured:true
    },
    {
        w_no:2,
        w_name:"NOVA",
        w_desc:"A full-stack team productivity platform for planning projects, tasks, members, and activity.",
        w_stack:["React", "TypeScript", "Express", "Prisma", "PostgreSQL"],
        w_features:["JWT authentication", "Kanban task board", "Comments and project members"],
        w_img:project8_img,
        w_link:"https://nova-pm.vercel.app/",
        w_github:"https://github.com/Anirban642/nova-product-management"
    },
    {
        w_no:3,
        w_name:"Tomato",
        w_desc:"A MERN food delivery application with authentication, cart flows, admin features, and Stripe checkout.",
        w_stack:["React", "Node.js", "Express", "MongoDB", "Stripe"],
        w_features:["Authentication", "Cart and ordering", "Stripe payment flow"],
        w_img:project1_img,
        w_link:"https://food-del-frontend-19e4.onrender.com",
        w_github:"https://github.com/Anirban642/tomato-react"
    },
]
 
export default mywork_data;
