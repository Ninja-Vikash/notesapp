import { User } from "../../model/users.model.js";

export const signup = async (req, res) => {
    const { name, password } = req.body;

    try {
        if ([name, password].includes("")) {
            res.send("All fields must be filled!");
            return
        }

        const newUser = await User({
            name,
            password,
        });
        await newUser.save();

        res.json({ data: newUser, message: "Signup completed!!!" });
    } catch (error) {
        console.log("Error while sign up", error);
    }
};
