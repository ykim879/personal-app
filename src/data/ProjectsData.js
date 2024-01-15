import Project from "../project/Project";
const img = require("./answer-question.png");
export const mobileApp1 = new Project(0, "📱", "MOBILE", img,"Developed a social media platform that fosters genuine connections by answering questions using React (frontend framework), TypeScript (frontend language), and Firestore for the database to store data in NoSQL", "https://www.alexyiyeonkim.com/projects")
const img2 = require("./recime.png");
const body = ["Built a recipe recommendation app from scratch using Figma, MongoDB, TypeScript, Python, and Java.",
"Led the agile planning, MVP discussion, data modeling and analyzation to deploy recipe recommendations for users based on preference data and built an API that enabled data retrieval from cloud infrastructure.", 
"Presented application’s vision, marketplace, and product roadmap to executives and Georgia Tech Startup fair."]
const mobileApp2 = new Project(1, "📱", "MOBILE", img2,  body, "https://www.alexyiyeonkim.com/projects")
export const mobileProject = [mobileApp1, mobileApp2]