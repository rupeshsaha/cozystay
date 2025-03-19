import jwt from "jsonwebtoken";

export const checkAuth = async (req, res, next) => {
    const { token }  = await req.cookies;
    if (!token) {
        return res.status(400).json({message: "You need to be logged in"})
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    if (!decodedToken) {
     return res.status(400).json({ message: "You need to be logged in" });
    }
    
    req.user = decodedToken
    next()
    
}