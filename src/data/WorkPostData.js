import Post from "../Post";

const adp1 = require('./../../assets/adp1.jpg');

const secondADPBody = ["Discovered 6 million dollars of unprocessed credit owed to our company through visualizing data with SQL queries and then documenting them in actionable insights to process the outlying payments.",
"Preventing future unprocessed credit situations similar to the scenario above by creating a system for customers using a new data model and building an ORM and APIs using GraphQL.",
"Modularized the mainframe into the distributed system in the cloud to increase functionality of a product by building new data models, migrating data, and programming internal and external API with GraphQL."];
export const secondADP = new Post(adp1, "ADP / Backend engineer", "July 2023", "PRESENT", secondADPBody);


const firstADPBody = ["Improved the end-user experience of our tax web product by greatly reducing API response latency through a mix of more performant database indexes and creating highly optimized REST APIs.",
"Scaled the serving of the web product to handle our growing customer base by designing a messaging service queue and moving it from a centralized on-premise system to a distributed system of microservices and serverless hosting.",
"Increased the durability of our new web product by leading the discovery of possible user scenarios followed by the addition of securely sanitized logging, observability monitoring, automated test cases for all scenarios, and ensuring greater than 95% code coverage across the product."]
export const firstADP = new Post(adp1, "ADP / Full Stack Developer", "February 2022", "July 2023", firstADPBody);

const internshipBody = ["Improved performance and response of a web product using React hooks, memoization, and reducing the number of elements being rendered.",
"Showcased technical proficiency in both front end and back end including building new UI and UX tools."]
export const internship = new Post(adp1, "ADP /  Full Stack Developer Internship", "June 2021", "August 2021", internshipBody);

export const works = [secondADP, firstADP, internship];
