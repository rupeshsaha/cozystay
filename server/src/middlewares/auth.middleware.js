import jwt from "jsonwebtoken";

export const checkAuth = async (req, res, next) => {
    const { token }  = await req.cookies;
    if (!token) {
        return res.status(400).json({message: "Unauthenticated"})
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    if (!decodedToken) {
     return res.status(400).json({ message: "Unauthenticated" });
    }
    
    req.user = decodedToken
    next()
    
}