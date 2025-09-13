import { Link } from "react-router-dom";
import { RiHome3Line } from "react-icons/ri";

function Header() {
  return (
    <div className="ml-10">
      <Link to="/">
          <RiHome3Line className="h-10 w-10"/>
      </Link>
        
    </div>
  );
}

export default Header;
