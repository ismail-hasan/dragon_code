import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  // console.log("User:", user); // Debugging

  return (
    <div className="flex justify-between items-center">
      <div className="">
        {user && user.email}
      </div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        {
          user?.email ?

            <div className=" ">
              <img className="w-14 rounded-full h-14" src={user?.photoURL} alt="" />
            </div>
            :
            <div className=" ">
              <img src={userIcon} alt="" />
            </div>

        }
        {
          user && user?.email ?
            <button onClick={logOut} className="btn btn-neutral rounded-none">Log-Out</button>
            :
            <Link to={"/auth/login"} className="btn btn-neutral rounded-none">Login</Link>
        }



      </div>
    </div>
  );
};

export default Navbar;
