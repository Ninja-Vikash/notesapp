import { User } from "../../model/users.model.js";

export const users = async (_, res) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (error) {
        console.log("Error while fetching all users", error);
    }
};
