import { useState } from "react";
import api from "../API";

let topics = []

// fetch(`${api.get.topic}${sub}`)
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   topics = data.result;
// })

const content = [
  { slno: "1", sub: "Physics", chap: "10", ques: "5" },
  { slno: "2", sub: "Chemistry", chap: "10", ques: "5" },
  { slno: "3", sub: "Mathematics", chap: "10", ques: "5" },
  { slno: "4", sub: "Biology", chap: "10", ques: "5" },
];

export default function DashTable() {

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Sl. No.</th>
          <th scope="col">Subject</th>
          <th scope="col">Chapters</th>
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