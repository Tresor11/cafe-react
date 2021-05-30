import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import createItem from "../actions/createItem";
import {useInput,resetInputs} from "../helpers/index";
import { useHistory } from "react-router-dom";

const ItemForm = (props) => {
  const category=useInput('');
  const name=useInput('');
  const image=useInput('');
  const price=useInput('');
  let history = useHistory();
  const callback=()=>{
    resetInputs(name,category);
    history.push('/')
  }
  const submitForm = (event) => {
    const {createItem} = props
    const data={
      name: name.value,
      category: category.value,
      price: price.value,
      image: image.value
    }
    console.log(data)
    createItem(data,callback);
    event.preventDefault();
};
  return (
    <div className="container">
      <div>
        <h4>CREATE ITEM</h4>
        <form onSubmit={submitForm}>
          <div className="input-cont">
            <label>Type</label>
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
            <label>Name</label>
            <input
              type="text"
              required
              name="name"
              value={name.value}
              onChange={name.onChange}
            />
          </div>

          <div className="input-cont">
            <label>Price</label>
            <input
              type="number"
              required
              name="price"
              value={price.value}
              onChange={price.onChange}
            />
          </div>

          <div className="input-cont">
            <label>Image</label>
            <input
              type="file"
              required
              name="image"
              className="custom-file-input"
              onChange={image.handleFileChange}
            />
          </div>

          <div>
            <p>
              <button type="submit" className="blue-button">
                CREATE
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// class ItemForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       price: "",
//       category: "",
//       image: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.onDrop = this.onDrop.bind(this);
//   }

//   onDrop(ev) {
//     // this.setState({ image: ev.target.files[0] });
//     // console.log(this.state);
//     console.group("state");
//     const prevState = this.state;
//     let url= ev.target.files[0];
//     this.setState({ ...prevState,image:url})
//     console.log("the file");
//     console.log(this.state);
//   }

//   handleChange(ev) {
//     let prevState=this.state
//     const newState = {...prevState,[ev.target.name]:ev.target.value};
//     console.log(newState);
//     this.setState(newState);
//     console.log(this.state)
//   }

//   handleSubmit(ev) {
//     ev.preventDefault();
//     const { store, createItem, history } = this.props;
//     const callBack = () => {
//       this.setState({
//         name: "",
//         category: "",
//         price: "",
//         image: "",
//       });
//       history.push("/items");
//     };
//     createItem(this.state, callBack);
//   }

//   render() {
//     const { name, category, price,image } = this.state;
//     return (
//       <div className="container">
//         <div>
//           <h4>CREATE ITEM</h4>
//           <form onSubmit={this.handleSubmit}>
//             <div className="input-cont">
//               <label>Type</label>
//               <select id="category" value={category} onChange={this.handleChange} name="category" required>
//                 <option value="Side">Side</option>
//                 <option value="Main Course">Main Course</option>
//               </select>
//             </div>

//             <div className="input-cont">
//               <label>Name</label>
//               <input
//                 type="text"
//                 required
//                 name="name"
//                 value={name}
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="input-cont">
//               <label>Price</label>
//               <input
//                 type="number"
//                 required
//                 name="price"
//                 value={price}
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="input-cont">
//               <label>Image</label>
//               <input
//                 type="file"
//                 required
//                 name="image"
//                 className="custom-file-input"
//                 onChange={this.onDrop}
//               />
//             </div>

//             <div>
//               <p>
//                 <button className="blue-button" onClick={this.handleSubmit}>CREATE</button>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

const mapStateToProps = (store) => ({ store });

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
