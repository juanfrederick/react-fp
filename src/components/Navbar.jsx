import { Link as ReachLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <div className="flex justify-between px-5 py-3 border-b-2 border-black bg-white">
      <Link as={ReachLink} to="/">
        <h1 className="font-bold" data-testid="home-page">
          Student Portal
        </h1>
      </Link>

      <div className="flex gap-2">
        <Link as={ReachLink} to="/student">
          <Link padding="0.25rem 0.5rem" data-testid="student-page">
            All Student
          </Link>
        </Link>
        <Link as={ReachLink} to="/add">
          <Link padding="0.25rem 0.5rem" data-testid="add-page">
            Add Student
          </Link>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
