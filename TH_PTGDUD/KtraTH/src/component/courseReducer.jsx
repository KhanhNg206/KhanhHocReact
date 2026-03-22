export default function courseReducer(state, action) {
  switch (action.type) {
    case "SET":
      return Array.isArray(action.payload) ? action.payload : [];
    case "ADD":
      return [...state, action.payload];
    case "EDIT":
      return state.map(c => c.id === action.payload.id ? action.payload : c);
    case "DEL":
      return state.filter(c => c.id !== action.payload);
    default:
      return state;
  }
}
