import { Link } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/home">Chats</Link>
        <Link to="/status"> Status</Link>
        <Link to="/login"> Login</Link>
        <Link to="/email"> Email</Link>
      </div>
    </>
  );
};

export default Navbar;
