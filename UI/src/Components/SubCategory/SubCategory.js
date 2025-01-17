import "./Subcategory.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { _categoryapiurl, _subcategoryapiurl } from "../../APIUrl"

function SubCategory() {
  const [file, setFile] = useState()
  const [catName, setCatName] = useState()
  const [subCatName, setSubCatName] = useState()
  const [output, setOutput] = useState()
  const [category, setCategoryDetails] = useState([])

  useEffect(() => {
    axios
      .get(_categoryapiurl + "fetch")
      .then((response) => {
        setCategoryDetails(response.data.response_content)
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  const handleChange = (event) => {
    setFile(event.target.files[0])
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData()
    formData.append("catnm", catName)
    formData.append("subcatnm", subCatName)
    formData.append("caticon", file)
    const config = {
      "content-type": "multipart/form-data",
    }

    axios
      .post(_subcategoryapiurl + "save", formData, config)
      .then((response) => {
        setSubCatName("");
        setCatName("");
        setOutput("SubCategory Added Successfully....")
      })
  }

  return (
    <>
      <div className="long_section12">
        <div className="detail-box1">
          <div className="heading_container">
            <h2>Sub Category Panel</h2>
          </div>
          <form className="category-form">
            <div className="form-group">
              <label htmlFor="catnm">Category Name:</label>
              <select
                className="form-control"
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
                placeholder="Enter category name"
              >
                <option value="">Select Category</option>
                {category.map((row) => (
                  <option>{row.catnm}</option>
                ))}
              </select>

              <div className="form-group1">
                <label htmlFor="catnm">Sub Category Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={subCatName}
                  onChange={(e) => setCatName(e.target.value)}
                  placeholder="Enter category name"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="file">Sub-Category Icon:</label>
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

export default SubCategory
