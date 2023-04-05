import SideNavBar from "../SideNavBar/SideNavBar";

export default function AddChap() {
  return (
    <>
      <SideNavBar />
      <div style={{ marginLeft: "14rem" }}>
        <form>
          <div class="form-group">
            <label>
              Enter the Name of the Chapter
            </label>
            <input
              class="form-control"
              placeholder="Enter the Chapter"
              style={{ width: "80%", marginTop: "10px"}}
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
