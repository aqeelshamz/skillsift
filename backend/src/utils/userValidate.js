import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const validate = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.status(401).send("Unauthorized");

    jwt.verify(token, process.env.TOKEN_SECRET, async (err, user) => {
        console.log(user)
        if (err) return res.status(401).send("Unauthorized");
        const userData = await User.findOne({ _id: user.id }).lean();
        if (!userData) {
            return res.status(401).send("Unauthorized");
        }

        req.user = userData;
        next();
    });
};

const validateCompany = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.status(401).send("Unauthorized");

    jwt.verify(token, process.env.TOKEN_SECRET, async (err, user) => {
        console.log(user)
        if (err) return res.status(401).send("Unauthorized");
        const userData = await User.findOne({ _id: user.id }).lean();
        if (!userData) {
            return res.status(401).send("Unauthorized");
        }

        if (userData.type !== 1) return res.status(401).send("Unauthorized");

        req.user = userData;
        next();
    });
};

export { validate, validateCompany };