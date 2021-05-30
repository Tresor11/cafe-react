import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createItem from '../actions/createItem';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      contact: '',
      description: '',
      image: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({ image: picture[0] });
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { store, createItem, history } = this.props;
    const callBack = () => {
      this.setState({
        name: '', contact: '', price: '', description: '', image: '',
      });
      history.push('/items');
    };
    createItem(this.state, store.user.auth_token, callBack);
  }

  render() {
    const {
      name, contact, description, price,
    } = this.state;
    return (
      <div>
        <div >
          <div >
            <h4 >CREATE ITEM</h4>
            <form  onSubmit={this.handleSubmit}>

              <div >
                <label >Name</label>
                <p >
                  <input

                    type="text"
                    required
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                  <span >
                    <i  />
                  </span>
                </p>
              </div>

              <div >
                <label >Category</label>
                <p >
                  <input

                    type="text"
                    required
                    value={contact}
                    placeholder="contact"
                    name="contact"
                    onChange={this.handleChange}
                  />
                  <span >
                    <i  />
                  </span>
                </p>
              </div>

              <div >
                <label >Price</label>
                <p >
                  <input

                    type="number"
                    required
                    placeholder="Price"
                    name="price"
                    value={price}
                    onChange={this.handleChange}
                  />
                  <span >
                    <i  />
                  </span>
                </p>
              </div>

              <div >
                <p >
                  <button >
                    CREATE
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({ store });

const mapDispatchToProps = {
  createItem,
};

ItemForm.defaultProps = {
  history: {},
};

ItemForm.propTypes = {
  store: PropTypes.shape({
    items: PropTypes.shape({}),
    user: PropTypes.shape({
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        favorites: PropTypes.arrayOf(PropTypes.shape({})),
        details: PropTypes.shape({
          admin: PropTypes.bool,
          image: PropTypes.shape({}),
          name: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  createItem: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);