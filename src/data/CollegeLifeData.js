import Post from "../Post";

const img = require('./graduation.jpg');

const universityBody = ["B.S. in Computer Science with emphasis on Intelligence and Info/Internetwork", "Graduated with Highest Honors ", "GPA: 4.00 / 4.00",
"Awards: Faculty Honors at Georgia Tech for for Fall 2020, Spring 2021, and Fall 2021 Semester"]
const universityPost = new Post(img, "Georgia Institute of Technology", "June 2019", "December 2021", universityBody);

export const universityLife = [universityPost]