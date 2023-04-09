import SideNavBar from "../SideNavBar/SideNavBar";
import "./subdetails.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const cont = [{ link: "/addtopic" , topic: "Add Topics" },
              { link: "/addques", topic: "Add Questions" }];


export default function SubDetails() {

  const params = useLocation();
  const subject = params.state.sub.toUpperCase();

  return (
    <>
      <SideNavBar />
      <div className="container">
        <div className="row gy-3 my-3" style={{ marginLeft: "10rem" }}>
          <div
            className="container text-center"
            style={{ paddingBottom: "10px", fontWeight: "bold" }}>
            {subject}
          </div>

          {cont.map((i) => (
            <div className="col-lg-5">
              <div className="card text-center h-100">
                <Link to={i.link} style={{textDecoration: "none"}}>
                  <div
                    className="card-body"
                    style={{ padding: "25px", boxShadow: "2px 2px 10px black" }}>
                    <h5 className="card-title" style={{color:"black"}}> {i.topic} </h5>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
