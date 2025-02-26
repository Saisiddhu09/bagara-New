const jwt = require("jsonwebtoken");
const config = require("../config.json"); // Ensure this has a secret key

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const cleanToken = token.replace("Bearer ", ""); // Ensure token is clean
        const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET);

        if (decoded.role !== "admin") {
            return res.status(403).json({ message: "Forbidden: Admins only." });
        }

        req.admin = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ message: "Invalid or expired token." });
    }
};

module.exports = authMiddleware;
