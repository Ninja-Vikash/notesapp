import { UserIdContext } from "@contexts/userId";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userId, setUserId] = useContext(UserIdContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-102">
        <h1 className="text-8xl font-bold text-stone-700">NotesApp</h1>
      </div>

      {userId != null && (
        <button
          onClick={() => {
            setUserId(null);
            navigate("/");
          }}
          className="absolute bottom-12 flex gap-2 items-center text-zinc-400 cursor-pointer font-medium"
        >
          <img
            src="icons/logout.svg"
            alt="logout icon"
            className="h-3 w-3 invert"
          />
          Sign out
        </button>
      )}
    </>
  );
};

export default Home;
