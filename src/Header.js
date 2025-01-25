import Search from "./Search";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <h1>World weather</h1>
        <Search />
      </header>
    </div>
  );
}
