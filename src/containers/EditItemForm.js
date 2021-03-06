import React from "react";
import { connect } from "react-redux";
import editItem from "../actions/editItem";
import { useInput, resetInputs } from "../helpers/index";
import { useHistory } from "react-router-dom";

const ItemForm = (props) => {
  const { single } = props.store;
  const itemDetails = single.details;
  const category = useInput(itemDetails.category);
  const name = useInput(itemDetails.name);
  const image = useInput("");
  const price = useInput(itemDetails.price);
  let history = useHistory();
  const callback = () => {
    resetInputs(name, category, price, image);
    history.push(`/items/${single.details.id}`);
  };
  const submitForm = (event) => {
    const { editItem } = props;
    const data = {
      name: name.value,
      category: category.value,
      price: price.value,
      ...(image.value !== "" ? { image: image.value } : {}),
    };

    editItem(data, single.details.id, callback);
    event.preventDefault();
  };
  return (
    <div className="container">
      <div>
        <div className="form-nav">
          <h4>EDIT ITEM</h4>
        </div>
        <form onSubmit={submitForm}>
          <div className="input-cont">
            <label>Type</label>
            <select
              id="category"
              value={category.value}
              onChange={category.onChange}
              name="category"
            >
              <option value="">Select type</option>
              <option value="Side">Side</option>
              <option value="Main Course">Main Course</option>
            </select>
          </div>

          <div className="input-cont">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name.value}
              onChange={name.onChange}
            />
          </div>

          <div className="input-cont">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={price.value}
              onChange={price.onChange}
            />
          </div>

          <div className="input-cont">
            <label>Image</label>
            <input
              type="file"
              name="image"
              className="custom-file-input"
              onChange={image.handleFileChange}
            />
          </div>

          <div>
            <p>
              <button type="submit" className="blue-button">
                <span>Update item</span>
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
  editItem,
};

ItemForm.defaultProps = {
  history: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
