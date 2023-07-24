import SideNavBar from "../SideNavBar/SideNavBar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import api from "../API";
import { useState, useEffect } from "react";

export default function AddChap() {
  const params = useLocation();
  const sub = params.state.sub;
  let chapters = [];

  const [loading, setLoading] = useState(false);
  const [subOpt, setSubOpt] = useState([]);

  const fetchData = () => {   
      setLoading(true);
      fetch(`${api.get.topic}${sub}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          chapters = data.result;
          setSubOpt(chapters)
          console.log(chapters);
          setLoading(false);
        });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chapterSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.chapter.value,
      subject: sub,
    };

    axios
      .post(`${api.get.topic}add`, userData)
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

  const topicSubmit = (e) => {
    e.preventDefault();
    const userData = {
      topic : e.target.chapter.value,
      name: e.target.topic.value,
      subject: sub,
    };

    axios
      .post(`${api.get.chapter}add`, userData)
      .then((response) => {
        console.log(response.status, response.data.token);
        alert("Topic has been added Successfully");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Topic could not be added due to some error");
      });
  };

  return (
    <>
      <SideNavBar />
      <div style={{ marginLeft: "14rem" }}>
        <br />
        <h4 className="text-center">Add Chapter</h4>
        <form onSubmit={chapterSubmit}>
          <div class="form-group">
            <label>Enter the Name of the Chapter</label>
            <input
              class="form-control"
              placeholder="Insert the Chapter"
              name="chapter"
              style={{ width: "80%", marginTop: "10px" }}
              autoComplete="off"
              required
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div style={{ marginLeft: "14rem" }}>
      <br/><h4 className="text-center">Add Topic</h4>
        <form onSubmit={topicSubmit}>
          <div class="form-group">
            <label>Select the Chapter</label>
            <select
                id="inputState"
                class="form-control"
                name="chapter"
                required
                style={{ width: "80%", marginTop: "10px" }}
                onClick={fetchData}
              >
                <option value="">Choose...</option>
                {subOpt.map((i) => (
                  <option>{i.name}</option>
                ))}
              </select>
          </div>
          <br />
          <div class="form-group">
            <label>Enter the Name of the Topic</label>
            <input
              class="form-control"
              placeholder="Insert the Topic"
              style={{ width: "80%", marginTop: "10px" }}
              autoComplete="off"
              name="topic"
              required
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
