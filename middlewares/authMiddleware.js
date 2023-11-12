const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler")


const authMiddleware = asyncHandler(async (req, res, next)=>{


    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];

        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                req['user'] = decoded;
                console.log("authorized")
                next();
            }
        }catch(e) {
            throw new Error("not Authorized, token expired");
        }
    }
    else {
        throw new Error("There is no token attached to header");
    }


})


const isAdmin = asyncHandler(async (req, res, next)=>{
    const id = req.user.id;
    const adminUser = await User.findOne({id});

    console.log("The role "+adminUser.role)

    if (adminUser.role !== "admin") {
        throw new Error("You are not admin ");

    }else {
        next();
    }
})

module.exports = {isAdmin, authMiddleware};