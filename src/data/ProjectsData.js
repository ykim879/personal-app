import GridItem from "../grid/GridItem";

//category
export const categories = {"ALL":1, "WEBSITE":2, "MOBILE":3, "MACHINE LEARNING":4};

//website tab
const website_img = require("./website.png");
const website = new GridItem(3, "🖥️", "WEBSITE", website_img,"MY PERSONAL WEBSITE", "https://www.alexyiyeonkim.com")
const websiteProject = [website]

//mobile tab
const img = require("./answer-question.png");
const mobileApp1 = new GridItem(0, "📱", "MOBILE", img,"Developed a social media platform that fosters genuine connections by answering questions using React (frontend framework), TypeScript (frontend language), and Firestore for the database to store data in NoSQL", "https://www.alexyiyeonkim.com/projects")

const img2 = require("./recime.png");
const body = ["Built a recipe recommendation app from scratch using Figma, MongoDB, TypeScript, Python, and Java.",
"Led the agile planning, MVP discussion, data modeling and analyzation to deploy recipe recommendations for users based on preference data and built an API that enabled data retrieval from cloud infrastructure.", 
"Presented application’s vision, marketplace, and product roadmap to executives and Georgia Tech Startup fair."]
const mobileApp2 = new GridItem(1, "📱", "MOBILE", img2,  body, "https://www.alexyiyeonkim.com/projects")

const mobileProject = [mobileApp1, mobileApp2]

//ml tab
const movie_recommendation_img = require("./movie_recommendation.png");
const movie_recommendation = new GridItem(2, "🤖", "Machine Learning",
movie_recommendation_img,"Built ML algorithm for Movie Recommendation System to process big data using matrix factorization with Pyspark and Redis.", "https://github.com/ykim879/movie_recommendation_system")

const mlProject = [movie_recommendation]

const allProjects = mobileProject.concat(mlProject, websiteProject)

export const projectLayout = {
    "ALL" : allProjects,
    "WEBSITE": websiteProject,
    "MOBILE": mobileProject,
    "MACHINE LEARNING": mlProject
}