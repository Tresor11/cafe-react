import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchItems from '../actions/fetchItems';
import ItemPreview from '../components/ItemPreview';
import Spiner from '../components/Spiner';
import { Link } from 'react-router-dom';

const ItemList = props => {
  const { fetchItems, store } = props;
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const shouldComponentRender = () => {
    if (store.items.pending === true) return false;
    return true;
  };

  return (
    <div className="item-list">
      <div className="item-nav">
        <h4>Menu</h4>
        <Link to={'/newitem'} className="blue-button">
          Add menu item
        </Link>
      </div>
      <div>
        {shouldComponentRender() === true ? (
          <div className="wrap-items">
            {store.items.items.map(el => <ItemPreview key={el.id} props={el} />)}
          </div>
        ) : <Spiner /> }
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchItems,
};

const mapStateToProps = store => ({ store });

ItemList.propTypes = {
  store: PropTypes.shape({
    items: PropTypes.shape({
      pending: PropTypes.bool,
      items: PropTypes.arrayOf(PropTypes.shape({})),
    })
  }).isRequired,
  fetchItems: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);