import SideNavBar from "../SideNavBar/SideNavBar";

export default function AddChap() {
  return (
    <>
      <SideNavBar />
      <div style={{ marginLeft: "14rem" }}>
        <form>
          <div class="form-group">
            <label>
              Enter the Name of the Topic
            </label>
            <input
              class="form-control"
              placeholder="Enter the Topic"
              style={{ width: "80%", marginTop: "10px"}}
              autoComplete="off"
              required
            />
          </div>
          <br />
          <div class="form-group">
            <label>
              Enter the Name of the Sub-Topic
            </label>
            <input
              class="form-control"
              placeholder="Enter the Subtopic"
              style={{ width: "80%", marginTop: "10px"}}
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
    </>
  );
}
