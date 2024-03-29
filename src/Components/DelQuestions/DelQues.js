import { useState, useEffect } from "react";
import axios from "axios";
import api from "../API";
import SideNavBar from "../SideNavBar/SideNavBar";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./delQues.css";
import React from 'react';
import { renderToString } from 'react-dom/server';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import parse from 'html-react-parser';
import katex from 'katex';
// import 'katex/dist/katex.min.css';

let regexForHTML = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;
const regex = /\\\[([^\]]*)\\\]/g;

export default function DelQues() {
  let [allQues, setAllQues] = useState([]);
  let [idx, setIdx] = useState(1);
  const [loading, setLoading] = useState(false);
  const  [newstring,setnewstring] = useState("");
  let questions = [];

  const fetchData = () => {
    setLoading(true);
    fetch(`${api.get.allQues}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        questions = data.result;
        setAllQues(questions);
        console.log(questions);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function prevQues() {
    if (idx > 1) {
      setIdx(--idx);
      console.log(regexForHTML.test(allQues[idx - 1].question));
      document.getElementById("Qno").textContent = "Question No - " + idx;
      if (!regexForHTML.test(allQues[idx].question)) {
        allQues[idx - 1].question !== ""
          ? (document.getElementById("Qtxt").textContent =
              allQues[idx - 1].question)
          : (document.getElementById("Qtxt").textContent = ""(
              allQues[idx - 1].questionImage !== ""
            )
              ? document
                  .getElementById("QImg")
                  .setAttribute(
                    "src",
                    `data:image/jpeg;base64,${allQues[idx - 1].questionImage}`
                  )
              : document.getElementById("QImg").setAttribute("src", ""));
      }
    }
  }

  let inlineMathHtml, blockMathHtml, replacedString;

 async function nextQues() {
    if (idx <= allQues.length - 1) {
      setIdx(++idx);
      console.log(regexForHTML.test(allQues[idx - 1].question));
      document.getElementById("Qno").textContent = "Question No - " + idx;

      if (!regexForHTML.test(allQues[idx - 1].question)) {
        allQues[idx - 1].question !== ""
          ? (document.getElementById("Qtxt").textContent =
              allQues[idx - 1].question)
          : (document.getElementById("Qtxt").textContent = ""(
              allQues[idx - 1].questionImage !== ""
            )
              ? document
                  .getElementById("QImg")
                  .setAttribute(
                    "src",
                    `data:image/jpeg;base64,${allQues[idx - 1].questionImage}`
                  )
              : document.getElementById("QImg").setAttribute("src", ""));
      } else {
      
        replacedString =await allQues[idx - 1].question.replace(regex, (match, equation) => {
          console.log(match.slice(1, -2))
          const mathHtml = katex.renderToString(match.slice(1, -2), {
            throwOnError: false, 
          });
          return mathHtml;
          // return <BlockMath math={match.slice(1, -2)}/>;
        });
        setnewstring(replacedString)
        console.log(replacedString)
        console.log(typeof(replacedString))

       
      }
    }
  }

  function delQues() {
    const quesID = allQues[idx - 1]._id;

    axios
      .delete(`${api.del.delete}${quesID}`)
      .then((response) => {
        alert("This Question has been deleted");
      })
      .catch((error) => {
        alert(error);
      });

    fetchData();
  }

 

  function editQues() {}

  const replaceLatexWithEquations = (html) => {
    let index = 0;
    const replacedHtml = html.replace(regex, (match, latex) => {
      const equationComponent = <InlineMath key={index} math={latex} />;
      index++;
      return ReactDOMServer.renderToStaticMarkup(equationComponent);
    });

    return replacedHtml;
  };

  const renderedContent = allQues[idx - 1]
    ? replaceLatexWithEquations(allQues[idx - 1].question)
    : null;

  return (
    <>
      <SideNavBar />
      <div style={{ marginLeft: "14rem" }}>
        <div
          className="container card bg-white shadow"
          style={{ width: "90%" }}
        >
          {allQues.length > 0 && (
            <>
              <h4 className="pt-3 px-3" id="Qno">
                Question No - {idx}
              </h4>

              <div>
                
                   </div>

              <div>
                {allQues[idx - 1].question !== "" ? (
                  regexForHTML.test(allQues[idx - 1].question)? (
                    <div
                      id="abcd"
                      dangerouslySetInnerHTML={{
                        __html:newstring
                      }}
                    />
                  ) : (
                    <h5 className="pt-4 px-3" id="Qtxt">
                      {allQues[idx - 1].question}
                    </h5>
                  )
                ) : (
                  // (<h5 className="pt-4 px-3" id="Qtxt"></h5>)
                  <></>
                )}
              </div>

              <div>
                {allQues[idx - 1].questionImage !== "" ? (
                  <h5 className="pt-4 px-3" id="Qtxt">
                    <img
                      id="QImg"
                      src={`data:image/jpeg;base64,${
                        allQues[idx - 1].questionImage
                      }`}
                    />
                  </h5>
                ) : (
                  // (<h5 className="pt-4 px-3" id="Qtxt"> <img id="QImg" src=""/> </h5>)
                  <></>
                )}
              </div>
            </>
          )}

          <div className="card-body text-center">
            <div className="btn-group">
              <button
                type="button"
                class="btn btn-primary"
                aria-expanded="false"
                title="Previous Question"
                id="larr"
                onClick={prevQues}
              >
                <FaArrowLeft />
              </button>

              <button
                type="button"
                class="btn btn-primary"
                aria-expanded="false"
                title="Next Question"
                id="rarr"
                onClick={nextQues}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <br />
        <div className="d-grid gap-2 col-2 mx-auto">
          <div className="btn-group">
            <button
              class="btn btn-primary"
              title="Edit Question"
              onClick={editQues}
            >
              Edit
            </button>

            <button
              class="btn btn-primary"
              title="Delete Question"
              onClick={delQues}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
