import { useContext } from "react";
import { MyContext } from "./AddQues";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function MsqQuestions() {
  const {
    modules,
    formats,
    Option1,
    setOption1,
    Option2,
    setOption2,
    Option3,
    setOption3,
    Option4,
    setOption4,
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
    setOptionMsq,
  } = useContext(MyContext);

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

  function selectMultiple() {
    let optionsValue = [], optionsLabel = [];
    setOptionMsq(document.getElementById("msqOptions").selectedOptions);
    for (let i = 0; i < OptionMsq.length; i++)
    {
        optionsValue.push(OptionMsq[i].value);
        optionsLabel.push(OptionMsq[i].label);
        
    }
    document.getElementById("msqOpt").textContent = optionsLabel
    setCorrectOption(optionsValue);    
  }

  return (
    <>
      <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
        <div className="col-lg-12">
        <label>Option1</label>
        <ReactQuill
            style={{ height: "25vh" }}
            theme="snow"
            value={Option1}
            onChange={setOption1}
            modules={modules}
            formats={formats}
          />
          {/* <div class="form-group">
            <label>Option1 Text</label>
            <textarea
              class="form-control"
              placeholder="Enter the Option here"
              style={{ width: "80%", marginTop: "10px" }}
              autoComplete="off"
              id="optiontext1"
              value={Option1}
              onChange={(e) => setOption1(e.target.value)}
            />
          </div> */}
          <br /><br/>
        </div>

        {/* <div className="col-lg-6">
          <div class="form-group">
            <label>Option1 Image</label>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="option1Img"
                style={{ marginTop: "10px" }}
                onChange={handleFileRead}
              />
            </div>
          </div>
        </div> */}
      </div>

      <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
        <div className="col-lg-12">
        <label>Option2</label>
        <ReactQuill
            style={{ height: "25vh" }}
            theme="snow"
            value={Option2}
            onChange={setOption2}
            modules={modules}
            formats={formats}
          />
          {/* <div class="form-group">
            <label>Option2 Text</label>
            <textarea
              class="form-control"
              placeholder="Enter the Option here"
              style={{ width: "80%", marginTop: "10px" }}
              autoComplete="off"
              value={Option2}
              onChange={(e) => setOption2(e.target.value)}
            />
          </div> */}
          <br /><br/>
        </div>

        {/* <div className="col-lg-6">
          <div class="form-group">
            <label>Option2 Image</label>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="option2Img"
                style={{ marginTop: "10px" }}
                onChange={handleFileRead}
              />
            </div>
          </div>
        </div> */}
      </div>

      <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
        <div className="col-lg-12">
        <label>Option3</label>
          {/* <div class="form-group">
            <label>Option3 Text</label>
            <textarea
              class="form-control"
              placeholder="Enter the Option here"
              style={{ width: "80%", marginTop: "10px" }}
              autoComplete="off"
              value={Option3}
              onChange={(e) => setOption3(e.target.value)}
            />
          </div> */}
          <ReactQuill
            style={{ height: "25vh" }}
            theme="snow"
            value={Option3}
            onChange={setOption3}
            modules={modules}
            formats={formats}
          />
          <br /><br/>
        </div>

        {/* <div className="col-lg-6">
          <div class="form-group">
            <label>Option3 Image</label>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="option3Img"
                style={{ marginTop: "10px" }}
                onChange={handleFileRead}
              />
            </div>
          </div>
        </div> */}
      </div>

      <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
        <div className="col-lg-12">
        <label>Option4 Text</label>
          {/* <form autocomplete="off">
            <div class="form-group">
              <label>Option4 Text</label>
              <textarea
                class="form-control"
                placeholder="Enter the Option here"
                style={{ width: "80%", marginTop: "10px" }}
                autoComplete="off"
                value={Option4}
                onChange={(e) => setOption4(e.target.value)}
              />
            </div>
            <br />
          </form> */}
          <ReactQuill
            style={{ height: "25vh" }}
            theme="snow"
            value={Option4}
            onChange={setOption4}
            modules={modules}
            formats={formats}
          />
          <br/><br/>
        </div>

        {/* <div className="col-lg-6">
          <div class="form-group">
            <label>Option4 Image</label>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="option4Img"
                style={{ marginTop: "10px" }}
                onChange={handleFileRead}
              />
            </div>
          </div>
        </div> */}
      </div>

      <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
        <div className="col-lg-6">
          <label for="msqOptions" style={{ paddingBottom: "10px" }}>
            Correct Option
          </label>
          <select
            id="msqOptions"
            name="msqOptions"
            class="form-control"
            onClick={selectMultiple}
            multiple
            required
          >
            <option value={Option1}>Option1 Text</option>
            <option value={Option2}>Option2 Text</option>
            <option value={Option3}>Option3 Text</option>
            <option value={Option4}>Option4 Text</option>
            {/* <option value={option1Img}>Option1 Image</option>
            <option value={option2Img}>Option2 Image</option>
            <option value={option3Img}>Option3 Image</option>
            <option value={option4Img}>Option4 Image</option> */}
          </select>
          <br />
          <div id="msqOpt">
          </div>
          <br/>
        </div>
      </div>
    </>
  );
}
