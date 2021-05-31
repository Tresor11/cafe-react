import singleItemReducer from "../reducers/singleItem";

const initialState = {
  pending: false,
  details: {},
  error: "",
};

describe("update category", () => {
  it("should update the item details", () => {
    expect(
      singleItemReducer(initialState, {
        type: "FETCH_SINGLE_SUCCESS",
        payload: { item: { name: "testing" } },
      })
    ).toEqual({ ...initialState, details: { name: "testing" } });
  });
  it('should save the errors to the state', () => {
    expect(singleItemReducer(initialState, { type: 'FETCH_ITEMS_ERROR', payload: 'oops!' })).toEqual({ ...initialState, error: 'oops!' });
  });
});
