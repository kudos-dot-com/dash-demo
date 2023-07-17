import { useContext } from "react";
import { MyContext } from "./AddQues";

export default function TextQuestions() {
  const { CorrectOption, setCorrectOption } = useContext(MyContext);

  return (
    <>
      <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
        <div className="col-lg-6">
          <div class="form-group">
            <label>Answer Text</label>
            <textarea
              class="form-control"
              placeholder="Enter the Answer Text here"
              style={{ width: "80%", marginTop: "10px" }}
              autoComplete="off"
              value={CorrectOption}
              onChange={(e) => setCorrectOption(e.target.value)}
            />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
