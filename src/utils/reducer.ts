export const Reducer = (
  state: any,
  action: {
    payload: any;
    type: any;
  }
) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_COMPLETE":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
