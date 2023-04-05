import logo from "../../Assets/Images/Logo.PNG";
import { Link } from "react-router-dom";
import "./sidenavbar.css";

const side = [
  { sub: "Physics", link: "physics" },
  { sub: "Chemistry", link: "chemistry" },
  { sub: "Mathematics", link: "mathematics" },
  { sub: "Biology", link: "biology" },
];

export default function SideNavBar() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <img src={logo} id="logo" />

        <li> <Link to ="/"> Dashboard </Link> </li>
        {side.map((i) => (
          <li> <Link to ="/upload"
          state ={{sub: `${i.link}`}}> {i.sub} </Link> </li>
        ))}

        <div className="social_media">
          <a href="#"><i className="fab fa-facebook-f"> fb </i></a>
          <a href="#"><i className="fab fa-twitter"> tw </i></a>
          <a href="#"><i className="fab fa-instagram"> in </i></a>
        </div>
      </div>

      <div className="main_content">
        <div className="header">Welcome!! Have a nice day.</div>
        <div className="info">
        </div>
      </div>
    </div>
  );
}
