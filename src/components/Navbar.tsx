import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchparams] = useSearchParams();
  let todosData = searchparams.get("todos");
  return (
    <nav>
      <Link to="/" className={todosData === null ? "active" : ""}>
        ALL
      </Link>
      <Link
        to="/?todos=active"
        className={todosData === "active" ? "active" : ""}
      >
        ACTIVE
      </Link>
      <Link
        to="/?todos=completed"
        className={todosData === "completed" ? "active" : ""}
      >
        COMPLETED
      </Link>
    </nav>
  );
};

export default Navbar;
