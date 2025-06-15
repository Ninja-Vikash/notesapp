import HeaderLink from "@components/header/HeaderLink";
import { UserIdContext } from "@contexts/userId";
import { useContext } from "react";

const Header = () => {
  const [userId] = useContext(UserIdContext);
  return (
    <div className="w-[100%] absolute pt-12 px-28 flex justify-between">
      <h2 className="text-lg font-bold">NotesApp</h2>

      <nav className="flex gap-6">
        <HeaderLink url="/">Home</HeaderLink>
        {!!userId ? (
          <HeaderLink url="/notes">Notes</HeaderLink>
        ) : (
          <HeaderLink url="login">Login</HeaderLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
