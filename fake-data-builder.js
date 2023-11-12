const {faker} = require("@faker-js/faker");
const Blog = require("./models/blogModel");
console.log("hello sayed")

let obj = {};



let list = [];
for (let i=0;i<10;i++) {
    
    obj.title = faker.person.firstName();
    obj.description = faker.location.city();
    obj.category = faker.location.county();
    obj.numViews = i;
    obj.isLiked = true;
    obj.isDisLiked = false;
    obj.likes = [];
    obj.dislikes = [];
    obj.images = [];

    list.push(obj);

}



const blog = await Blog.create(obj);
console.log(blog)