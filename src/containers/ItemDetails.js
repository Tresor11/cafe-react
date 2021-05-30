import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spiner from "../components/Spiner";
import fetchSingle from "../actions/fetchSingleItem";
import { useHistory, Link } from "react-router-dom";

const ItemDetails = (props) => {
  const { fetchSingle, store, match } = props;
  useEffect(() => {
    fetchSingle(match.params.id);
  }, [fetchSingle, match.params.id]);
  const { single } = store;
  const { name, price, id, image, category } = single.details;
  let history = useHistory();
  const deleteItem = () => {
    fetchSingle(id, "DELETE");
    history.push("/");
  };

  const shouldComponentRender = () => {
    if (!single.details.image) return false;

    return true;
  };

  return (
    <div>
      {shouldComponentRender() === true ? (
        <div className="item-details container">
          <div class="item-nav">
            <h4>View Item</h4>
          </div>
          <div className="item-details-cont">
            <div className="item-image">
              <img src={image.url} className="responsive-img" />
            </div>
            <div className="item-info">
              <div className="item-name">
                <p className="category">{category}</p>
                <p className="name">{name}</p>
              </div>
              <div className="item-price">
                <span className="price">${price}</span>
              </div>
              <div className="buttons-cont">
                <Link to={`/items/${id}/edit`}>
                  <button class="blue-button">Edit item</button>
                </Link>
                <button class="blue-button red" onClick={deleteItem}>
                  Delete item
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spiner />
      )}
    </div>
  );
};

ItemDetails.defaultProps = {
  name: "",
  category: "",
  image: {},
  id: 0,
  props: {},
};

ItemDetails.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
  }),
  id: PropTypes.number,
  price: PropTypes.number,
  props: PropTypes.shape({}),
};

const mapDispatchToProps = {
  fetchSingle,
};

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
