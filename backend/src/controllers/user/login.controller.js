import { User } from "../../model/users.model.js";

export const login = async (req, res) => {
    const { name, password } = req.body;

    try {
        if ([name, password].includes("")) {
            res.send("Name and Password is required to sign in!");
            return
        }

        const user = await User.findOne({ name, password });

        if (!user) {
            console.log("User not found!");
            return
        }

        res.json({ data: user, message: "user found" });
    } catch (error) {
        console.log("Error while sign in", error);
    }
};
