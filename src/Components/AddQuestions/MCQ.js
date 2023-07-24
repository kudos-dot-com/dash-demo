import { useContext } from "react";
import { MyContext } from "./AddQues";

export default function McqQuestions() {
  const {
    Option1, setOption1, Option2, setOption2, Option3, setOption3, Option4, setOption4,
    CorrectOption, setCorrectOption, option1Img, setOption1Img, option2Img, setOption2Img,
    option3Img, setOption3Img, option4Img, setOption4Img, } = useContext(MyContext);

  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    console.log(event.target.id);

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
      <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
        <div className="col-lg-6">
          <div class="form-group">
            <label>Option1 Text</label>
            <textarea
              class="form-control"
              placeholder="Enter the Option here"
              style={{ width: "80%", marginTop: "10px" }}
              autoComplete="off"
              id="optiontext1"
              value={Option1}
              onChange={(e) => setOption1(e.target.value)}
              required = {!(Option1 || option1Img)}
            />
          </div>
          <br />
        </div>

        <div className="col-lg-6">
          <div class="form-group">
            <label>Option1 Image</label>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="option1Img"
                style={{ marginTop: "10px" }}
                onChange={handleFileRead}
                required = {!(Option1 || option1Img)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
        <div className="col-lg-6">
          <div class="form-group">
            <label>Option2 Text</label>
            <textarea
              class="form-control"
              placeholder="Enter the Option here"
              style={{ width: "80%", marginTop: "10px" }}
              autoComplete="off"
              value={Option2}
              onChange={(e) => setOption2(e.target.value)}
              required = {!(Option2 || option2Img)}
            />
          </div>
          <br />
        </div>

        <div className="col-lg-6">
          <div class="form-group">
            <label>Option2 Image</label>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="option2Img"
                style={{ marginTop: "10px" }}
                onChange={handleFileRead}
                required = {!(Option2 || option2Img)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
        <div className="col-lg-6">
          <div class="form-group">
            <label>Option3 Text</label>
            <textarea
              class="form-control"
              placeholder="Enter the Option here"
              style={{ width: "80%", marginTop: "10px" }}
              autoComplete="off"
              value={Option3}
              onChange={(e) => setOption3(e.target.value)}
              required = {!(Option3 || option3Img)}
            />
          </div>
          <br />
        </div>

        <div className="col-lg-6">
          <div class="form-group">
            <label>Option3 Image</label>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="option3Img"
                style={{ marginTop: "10px" }}
                onChange={handleFileRead}
                required = {!(Option3 || option3Img)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
        <div className="col-lg-6">
          <form autocomplete="off">
            <div class="form-group">
              <label>Option4 Text</label>
              <textarea
                class="form-control"
                placeholder="Enter the Option here"
                style={{ width: "80%", marginTop: "10px" }}
                autoComplete="off"
                value={Option4}
                onChange={(e) => setOption4(e.target.value)}
                required = {!(Option4 || option4Img)}
              />
            </div>
            <br />
          </form>
        </div>

        <div className="col-lg-6">
          <div class="form-group">
            <label>Option4 Image</label>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="option4Img"
                style={{ marginTop: "10px" }}
                onChange={handleFileRead}
                required = {!(Option4 || option4Img)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
        <div className="col-lg-6">
          <label for="inputState" style={{ paddingBottom: "10px" }} required>
            Correct Option
          </label>
          <select
            id="inputState"
            class="form-control"
            value={CorrectOption}
            onChange={(e) => setCorrectOption(e.target.value)}
            required
          >
            <option value="">Choose...</option>
            <option value={Option1}>Option1 Text</option>
            <option value={Option2}>Option2 Text</option>
            <option value={Option3}>Option3 Text</option>
            <option value={Option4}>Option4 Text</option>
            <option value={option1Img}>Option1 Image</option>
            <option value={option2Img}>Option2 Image</option>
            <option value={option3Img}>Option3 Image</option>
            <option value={option4Img}>Option4 Image</option>
          </select>
          <br />
        </div>
      </div>
    </>
  );
}
