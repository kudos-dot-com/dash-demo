import SideNavBar from "../SideNavBar/SideNavBar";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function AddChap() {
  const params = useLocation();
  const sub = params.state.sub;
  // console.log(sub);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.chapter.value,
      subject: sub,
    };

    // console.log(userData);

    axios
      .post("https://edufoundation-backend.vercel.app/api/topic/add", userData)
      .then((response) => {
        console.log(response.status, response.data.token);
        alert("Chapter has been added Successfully");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Chapter could not be added due to some error");
      });
  };

  return (
    <>
      <SideNavBar />
      <div style={{ marginLeft: "14rem" }}>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label>Enter the Name of the Chapter</label>
            <input
              class="form-control"
              placeholder="Enter the Topic"
              name="chapter"
              style={{ width: "80%", marginTop: "10px" }}
              autoComplete="off"
              required
            />
          </div>
          <br />
          <div class="form-group">
            <label>Enter the Name of the Sub-Topic</label>
            <input
              class="form-control"
              placeholder="Enter the Subtopic"
              style={{ width: "80%", marginTop: "10px" }}
              autoComplete="off"
              name="subtopic"
              // required
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
