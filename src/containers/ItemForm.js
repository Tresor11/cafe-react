import React from "react";
import { connect } from "react-redux";
import createItem from "../actions/createItem";
import { useInput, resetInputs } from "../helpers/index";
import { useHistory } from "react-router-dom";

const ItemForm = (props) => {
  const category = useInput("");
  const name = useInput("");
  const image = useInput("");
  const price = useInput("");
  let history = useHistory();
  const callback = () => {
    resetInputs(name, category);
    history.push("/");
  };
  const submitForm = (event) => {
    const { createItem } = props;
    const data = {
      name: name.value,
      category: category.value,
      price: price.value,
      image: image.value,
    };

    createItem(data, callback);
    event.preventDefault();
  };
  return (
    <div className="container">
      <div>
        <div className="form-nav">
          <h4>CREATE ITEM</h4>
        </div>
        <form className="form-control" onSubmit={submitForm}>
          <div className="input-cont field">
            <label htmlFor="category">Type</label>
            <select
              id="category"
              value={category.value}
              onChange={category.onChange}
              name="category"
              required
            >
              <option value="">Select type</option>
              <option value="Side">Side</option>
              <option value="Main Course">Main Course</option>
            </select>
          </div>

          <div className="input-cont">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              name="name"
              id="name"
              value={name.value}
              onChange={name.onChange}
            />
          </div>

          <div className="input-cont">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              required
              name="price"
              id="price"
              value={price.value}
              onChange={price.onChange}
            />
          </div>

          <div className="input-cont">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              required
              name="image"
              id="image"
              className="custom-file-input"
              onChange={image.handleFileChange}
            />
          </div>

          <div>
            <p>
              <button type="submit" className="blue-button">
                <span>Add menu item</span>
                <div className="loader"></div>
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (store) => ({ store });

const mapDispatchToProps = {
  createItem,
};

ItemForm.defaultProps = {
  history: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
