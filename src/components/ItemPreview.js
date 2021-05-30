import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemPreview = ({ props }) => {
  const {
    name, price, id, image,category
  } = props;
  return (
    <div className="item-prev">
      <Link to={`/items/${id}`}>
        <div className="img-cont">
          <img src={image.url}/>
        </div>
        <div className="text-cont">
          <div className="item-name">
            <p className="category">{category}</p>
            <p className="name">{name}</p>
          </div>
          <div className="item-price">
          <span className="price">${price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

ItemPreview.defaultProps = {
  name: '',
  category:'',
  image: {},
  id: 0,
  props: {},
};

ItemPreview.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
  }),
  id: PropTypes.number,
  price: PropTypes.number,
  props: PropTypes.shape({}),
};

export default ItemPreview;