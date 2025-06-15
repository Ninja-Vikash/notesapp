import { UserIdContext } from "@contexts/userId";
import { loginApi } from "@services/apiServices";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReturnedUser = ({ handleInterface }) => {
  const [userId, setUserId] = useContext(UserIdContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await loginApi({ name: username, password });
    setUserId(res.data._id);

    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col mb-4">
        <img src="icons/lock.svg" className="h-16 w-16 invert" />
        <h2 className="text-xl font-bold my-2 text-center">Auth Login In</h2>
      </div>

      <input
        type="text"
        required
        placeholder="username"
        className="input-styles"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        required
        placeholder="password"
        className="input-styles mt-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={login}
        disabled={username.trim() === "" || password.trim() === ""}
        className="btn-green w-full mt-4 py-3 font-medium flex justify-center items-center gap-2"
      >
        Login with Auth
        <img src="icons/lock.svg" className="w-4 h-4 invert" />
      </button>

      <hr className="my-4 border-zinc-700" />

      <button className="btn-outlined py-2 w-full" onClick={handleInterface}>
        Create a new account!
      </button>
    </div>
  );
};

export default ReturnedUser;
