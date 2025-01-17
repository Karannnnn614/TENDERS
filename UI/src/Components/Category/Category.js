import "./Category.css";
import { useState } from "react";
import axios from "axios";
import { _categoryapiurl } from "../../APIUrl";

function Category() {
  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [output, setOutput] = useState();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("catnm", catName);
    formData.append("caticon", file);
    const config = {
      "content-type": "multipart/form-data",
    };

    axios.post(_categoryapiurl + "save", formData, config).then((response) => {
      setCatName("");
      setOutput("Category Added Successfully....");
    });
  };

  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>ADD CATEGORY PANEL</h2>
      <div className="long-section">
        <div className="detail-box">
          <div className="heading-container">
          </div>
          <form className="category-form">
            <div className="form-group">
              <label htmlFor="catnm">Category Name:</label>
              <input
                type="text"
                className="form-control"
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
                placeholder="Enter category name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">Category Icon:</label>
              <input
                type="file"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <button onClick={handleSubmit} type="button" className="submit-btn">
              Add Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Category;
