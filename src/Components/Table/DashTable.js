import { useState, useEffect } from "react";
import api from "../API";

export default function DashTable() {
  const [noTopics, setNoTopics] = useState(Array(5).fill("Loading..."));

  useEffect(() => {
    // An array to store data from all fetches
    let topics = [];

    // An array of URLs to fetch data from
    const urls = [
      `${api.get.topic}physics`,
      `${api.get.topic}chemistry`,
      `${api.get.topic}mathematics`,
      `${api.get.topic}biology`,
    ];

    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        topics = topics.concat(data.result.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    Promise.all(urls.map((url) => fetchData(url))).then(() => {
      setNoTopics(topics);
    });
  }, []);

  const content = [
    { slno: "1", sub: "Physics", chap: noTopics[0]},
    { slno: "2", sub: "Chemistry", chap: noTopics[1]},
    { slno: "3", sub: "Mathematics", chap: noTopics[2]},
    { slno: "4", sub: "Biology", chap: noTopics[3]},
  ];

  return (
    <div className="" style={{ marginLeft: "25%" }}>
      <div className="row gy-3 mx-3">
        <div className="col-lg-2 col-md-2 col-sm-2" />
        <div className="col-lg-2" />
        <div className="col-lg-9 col-md-9 col-sm-9">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sl. No.</th>
                <th scope="col">Subject</th>
                <th scope="col">Topics</th>
              </tr>
            </thead>
            <tbody>
              {content.map((i) => (
                <tr>
                  <th scope="row">{i.slno}</th>
                  <td>{i.sub}</td>
                  <td>{i.chap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1" />
      </div>
    </div>
  );
}
