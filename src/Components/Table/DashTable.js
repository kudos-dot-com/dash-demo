import { useState } from "react";
import api from "../API";

let topics = [];

export default function DashTable() {
  const [nophy, setNoPhy] = useState("Loading...");
  const [nochem, setNoChem] = useState("Loading...");
  const [nomath, setNoMath] = useState("Loading...");
  const [nobio, setNoBio] = useState("Loading...");

  fetch(`${api.get.topic}physics`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    topics = data.result;
    // console.log(topics.length);
    setNoPhy(topics.length)
  })

  fetch(`${api.get.topic}chemistry`)
    .then((response) => {
      return response.json();      
    })
    .then((data) => {
      topics = data.result;
      // console.log(topics.length);
      setNoChem(topics.length);
    });

  fetch(`${api.get.topic}mathematics`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      topics = data.result;
      // console.log(topics.length);
      setNoMath(topics.length);
    });

  fetch(`${api.get.topic}biology`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      topics = data.result;
      // console.log(topics.length);
      setNoBio(topics.length);
    });

  const content = [
    { slno: "1", sub: "Physics", chap: nophy, ques: "5" },
    { slno: "2", sub: "Chemistry", chap: nochem, ques: "5" },
    { slno: "3", sub: "Mathematics", chap: nomath, ques: "5" },
    { slno: "4", sub: "Biology", chap: nobio, ques: "5" },
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Sl. No.</th>
          <th scope="col">Subject</th>
          <th scope="col">Topics</th>
          <th scope="col">Questions</th>
        </tr>
      </thead>
      <tbody>
        {content.map((i) => (
          <tr>
            <th scope="row">{i.slno}</th>
            <td>{i.sub}</td>
            <td>{i.chap}</td>
            <td>{i.ques}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
