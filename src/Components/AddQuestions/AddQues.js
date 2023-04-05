import SideNavBar from "../SideNavBar/SideNavBar";

export default function AddQues() {
  return (
    <>
      <SideNavBar />
      <form>
        <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
          <div className="col-lg-6">
            <div class="form-group">
              <label>Question Text</label>
              <textarea
                class="form-control"
                placeholder="Enter the Option here"
                style={{ width: "80%", marginTop: "10px" }}
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
                  id="validatedCustomFile"
                  style={{ marginTop: "10px" }}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
          <div className="col-lg-6">
            <div class="form-group">
              <label>Option1 Text</label>
              <textarea
                class="form-control"
                placeholder="Enter the Option here"
                style={{ width: "80%", marginTop: "10px" }}
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
                  id="validatedCustomFile"
                  style={{ marginTop: "10px" }}
                  required
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
                  id="validatedCustomFile"
                  style={{ marginTop: "10px" }}
                  required
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
                  id="validatedCustomFile"
                  style={{ marginTop: "10px" }}
                  required
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
                  id="validatedCustomFile"
                  style={{ marginTop: "10px" }}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
          <div className="col-lg-6">
            <label for="inputState" style={{ paddingBottom: "10px" }}>
              Correct Option
            </label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>Option1 Text</option>
              <option>Option2 Text</option>
              <option>Option3 Text</option>
              <option>Option4 Text</option>
              <option>Option1 Image</option>
              <option>Option2 Image</option>
              <option>Option3 Image</option>
              <option>Option4 Image</option>
            </select>
            <br />
          </div>

          <div className="col-lg-6">
            <label style={{ paddingBottom: "10px" }}>Hint</label>
            <input
              type="text"
              class="form-control"
              placeholder="Write the Hint here"
            />
          </div>
        </div>

        <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
          <div className="col-lg-6">
            <label for="inputState" style={{ paddingBottom: "10px" }}>
              Topic
            </label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
            </select>
            <br />
          </div>

          <div className="col-lg-6">
            <label style={{ paddingBottom: "10px" }}>Sub-Topic</label>
            <input
              type="text"
              class="form-control"
              placeholder="Write the subtopic here"
            />
          </div>
        </div>

        <div className="row" style={{ marginLeft: "13rem", width: "80%" }}>
          <div className="col-lg-4">
            <label for="inputState" style={{ paddingBottom: "10px" }}>
              Difficulty level
            </label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>Level 1</option>
              <option>Level 2</option>
              <option>Level 3</option>
            </select>
            <br />
          </div>

          <div className="col-lg-4">
            <label for="inputState" style={{ paddingBottom: "10px" }}>
              Exam Type
            </label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>WBJEE</option>
              <option>JEE MAINS</option>
              <option>JEE ADVANCED</option>
              <option>NEET</option>
            </select>
            <br />
          </div>

          <div className="col-lg-4">
            <label style={{ paddingBottom: "10px" }}>Exam Year</label>
            <input
              type="text"
              class="form-control"
              placeholder="Write the Exam Year here"
            />
          </div>
        </div>

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
    </>
  );
}
