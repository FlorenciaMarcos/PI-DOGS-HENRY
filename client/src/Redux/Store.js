// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { rootReducer } from "./reducer";

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./Reducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
