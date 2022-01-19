const initialState = {
  items: [],
  loading: false,
  error: null
};

export function items(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_BEGIN":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        items: [...state.items, ...payload.items],
        loading: false
      };
    case "FETCH_ERROR":
      return { ...state, error: payload.error, loading: false };
    case "REMOVE":
      return {
        items: state.items.filter((value) => value.name !== action.name)
      };
    default:
      return state;
  }
}
