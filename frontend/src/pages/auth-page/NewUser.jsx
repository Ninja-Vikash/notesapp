import { UserIdContext } from "@contexts/userId";
import { signupApi } from "@services/apiServices";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewUser = ({ handleInterface }) => {
  const [userId, setUserId] = useContext(UserIdContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    const res = await signupApi({ name, password });
    setUserId(res.data._id);

    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col mb-4">
        <img src="icons/lock.svg" className="h-16 w-16 invert" />
        <h2 className="text-xl font-bold my-2 text-center">NotesApp Auth</h2>
      </div>

      <input
        type="text"
        placeholder="username"
        className="input-styles"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="input-styles mt-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={signUp}
        disabled={name.trim() === "" || password.trim() === ""}
        className="btn-blue w-full mt-4 py-3 font-medium flex justify-center items-center gap-2"
      >
        Create with Auth
        <img src="icons/lock.svg" className="w-4 h-4 invert" />
      </button>

      <hr className="my-4 border-zinc-700" />

      <button className="btn-outlined py-2 w-full" onClick={handleInterface}>
        Already have an account?
      </button>
    </div>
  );
};

export default NewUser;
