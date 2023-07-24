import SideNavBar from "../SideNavBar/SideNavBar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../API";
import { createContext } from "react";
import McqQuestions from "./MCQ";
import MsqQuestions from "./MSQ";
import TextQuestions from "./TEXT";

let chapters = [];

const MyContext = createContext("");

export default function AddQues() {
  const params = useLocation();
  const sub = params.state.sub;
  // console.log(sub);

  const [subOpt, setSubOpt] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [Topics, setTopics] = useState(0);
  const [DdlTopic, setDdlTopic] = useState("");
  const [DdlChapter, setDdlChapter] = useState("");
  // const [DdlSubTopic, setDdlSubTopic] = useState('');
  const [Question, setQuestion] = useState("");
  const [Option1, setOption1] = useState("");
  const [Option2, setOption2] = useState("");
  const [Option3, setOption3] = useState("");
  const [Option4, setOption4] = useState("");
  const [CorrectOption, setCorrectOption] = useState([]);
  const [Hint, setHint] = useState("");
  const [Difficultylevel, setDifficultylevel] = useState("");
  const [ExamType, setExamType] = useState("");
  const [ExamYear, setExamYear] = useState("");
  const [ExamKey, setExamKey] = useState("");
  const [OptionMsq, setOptionMsq] = useState([]);

  // const [Chaterphy, setChaterphy] = useState(0);
  const [questionImg, setQuestionImg] = useState("");
  const [option1Img, setOption1Img] = useState("");
  const [option2Img, setOption2Img] = useState("");
  const [option3Img, setOption3Img] = useState("");
  const [option4Img, setOption4Img] = useState("");

  const fetchData = () => {
    setLoading(true);
    fetch(`${api.get.topic}${sub}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        chapters = data.result;
        console.log(chapters);
        setSubOpt(chapters);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(sub, DdlChapter, DdlTopic);
    console.log("This is the Chapter Text: ", DdlChapter);
    {Question && console.log("This is the Question Text: ", Question);}
    {Option1 && console.log("This is the Option 1 Text: ", Option1);}
    {Option2 && console.log("This is the Option 2 Text: ", Option2);}
    {Option3 && console.log("This is the Option 3 Text: ", Option3);}
    {Option4 && console.log("This is the Option 4 Text: ", Option4);}
    {CorrectOption && console.log("This is the Correct Option: ", CorrectOption);}
    {Hint && console.log("This is the Hint Text: ", Hint);}
    {Difficultylevel && console.log("This is the Difficulty Level: ", Difficultylevel);}
    {ExamType && console.log("This is the Exam Type: ", ExamType);}
    {ExamYear && console.log("This is the Exam Year Text: ", ExamYear);}
    // console.log(OptionMsq);

    // try{
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //     subject: sub,
    //     chapter: DdlChapter,
    //     topic: DdlTopic,
    //     question: Question,
    //     questionImage: questionImg,
    //     option1: Option1,
    //     option2: Option2,
    //     option3: Option3,
    //     option4: Option4,
    //     option1Image: option1Img,
    //     option2Image: option2Img,
    //     option3Image: option3Img,
    //     option4Image: option4Img,
    //     correct_answer : CorrectOption,
    //     difficulty : Difficultylevel,
    //     exam : ExamType,
    //     hints1 : Hint,
    //     year : ExamYear}
    //   )};

    // const response = await fetch(`${api.post.question}/add`, requestOptions);
    // const data = await response.json();
    // console.log(data.message);
    // alert(data.message);
    // }

    // catch (err) {
    //   console.log(err);
    // }
  };

  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    console.log(event.target.id);

    if (event.target.id === "questionImg") {
      console.log(base64);
      setQuestionImg(base64);
    }

    if (event.target.id === "option1Img") {
      console.log(base64);
      setOption1Img(base64);
    }

    if (event.target.id === "option2Img") {
      console.log(base64);
      setOption2Img(base64);
    }

    if (event.target.id === "option3Img") {
      console.log(base64);
      setOption3Img(base64);
    }

    if (event.target.id === "option4Img") {
      console.log(base64);
      setOption4Img(base64);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <SideNavBar />
      <MyContext.Provider
        value={{
          Option1,
          setOption1,
          Option2,
          setOption2,
          Option3,
          setOption3,
          Option4,
          setOption4,
          CorrectOption,
          setCorrectOption,
          option1Img,
          setOption1Img,
          option2Img,
          setOption2Img,
          option3Img,
          setOption3Img,
          option4Img,
          setOption4Img,
          OptionMsq,
          setOptionMsq
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
            <div className="col-lg-6">
              <label for="inputState" style={{ paddingBottom: "10px" }}>
                Topic
              </label>
              <select
                id="inputState"
                class="form-control"
                value={DdlChapter}
                onChange={(e) => setDdlChapter(e.target.value)}
                required
              >
                <option value="">Choose...</option>
                {subOpt.map((i) => (
                  <option>{i.name}</option>
                ))}
              </select>
              <br />
            </div>

            <div className="col-lg-6">
              <label style={{ paddingBottom: "10px" }}>Sub-Topic</label>
              <input
                type="text"
                class="form-control"
                placeholder="Write the subtopic here"
                list="subtopics"
                value={DdlTopic}
                onChange={(e) => setDdlTopic(e.target.value)}
              />
              <datalist id="subtopics">
                <option value="SubTopic 1" />
                <option value="SubTopic 2" />
                <option value="SubTopic 3" />
                <option value="SubTopic 4" />
                <option value="SubTopic 5" />
              </datalist>
            </div>
          </div>

          <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
            <div className="col-lg-6">
              <div class="form-group">
                <label>Question Text</label>
                <textarea
                  class="form-control"
                  placeholder="Enter the Question Text here"
                  style={{ width: "80%", marginTop: "10px" }}
                  autoComplete="off"
                  value={Question}
                  onChange={(e) => setQuestion(e.target.value)}
                  required = {!(Question || questionImg)}
                />
                <br />
              </div>
            </div>

            <div className="col-lg-6">
              <div class="form-group">
                <label>Question Image</label>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="questionImg"
                    style={{ marginTop: "10px" }}
                    onChange={handleFileRead}
                    required = {!(Question || questionImg)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
            <div className="col-lg-6">
              <label style={{ paddingBottom: "10px" }}>Hint</label>
              <input
                type="text"
                class="form-control"
                placeholder="Write the Hint here"
                autoComplete="off"
                value={Hint}
                onChange={(e) => setHint(e.target.value)}
                required
              />
            </div>

            <div className="col-lg-6">
              <label for="inputState" style={{ paddingBottom: "10px" }}>
                Difficulty level
              </label>
              <select
                id="inputState"
                class="form-control"
                value={Difficultylevel}
                onChange={(e) => setDifficultylevel(e.target.value)}
                required
              >
                <option value="">Choose...</option>
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
              </select>
              <br />
            </div>
          </div>

          <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
            <div className="col-lg-4">
              <label for="inputState" style={{ paddingBottom: "10px" }}>
                Exam Type
              </label>
              <select
                id="inputState"
                class="form-control"
                value={ExamType}
                onChange={(e) => setExamType(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="WBJEE">WBJEE</option>
                <option value="JEE MAINS">JEE MAINS</option>
                <option value="JEE ADVANCED">JEE ADVANCED</option>
                <option value="NEET">NEET</option>
              </select>
              <br />
            </div>

            <div className="col-lg-4">
              <label style={{ paddingBottom: "10px" }}>Exam Year</label>
              <input
                type="text"
                class="form-control"
                placeholder="Write the Exam Year here"
                value={ExamYear}
                onChange={(e) => setExamYear(e.target.value)}
              />
            </div>

            <div className="col-lg-4">
              <label style={{ paddingBottom: "10px" }}>Option Type</label>
              <select
                id=""
                class="form-control"
                value={ExamKey}
                onChange={(e) => setExamKey(e.target.value)}
                required
              >
                <option value="">Choose...</option>
                <option>MCQ</option>
                <option>MSQ</option>
                <option>TEXT</option>
              </select>
            </div>
          </div>

          <>
            {ExamKey === "MCQ" && <McqQuestions />}
            {ExamKey === "MSQ" && <MsqQuestions />}
            {ExamKey === "TEXT" && <TextQuestions />}
          </>

          <div style={{ paddingBottom: "20px" }}>
            <button
              type="submit"
              class="btn btn-primary"
              style={{ marginLeft: "14rem" }}
            >
              Submit
            </button>
          </div>
        </form>
      </MyContext.Provider>
    </>
  );
}

export { MyContext };
