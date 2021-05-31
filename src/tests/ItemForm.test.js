import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../reducers/index";
import ItemForm from "../containers/ItemForm";

test("renders learn react link", () => {
  render(
    <Router>
      <Provider store={store}>
        <ItemForm />
      </Provider>
    </Router>
  );

  expect(screen.getByLabelText("Type")).toBeInTheDocument();
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Image")).toBeInTheDocument();
  expect(screen.getByLabelText("Price")).toBeInTheDocument();
  expect(screen.getByText(/CREATE ITEM/i)).toBeInTheDocument();
});
