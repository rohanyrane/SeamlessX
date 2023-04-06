import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./historySlice"; //Making a slice
// import savedItemsSlice from "./savedItemsSlice";

export default configureStore({
    reducer: {
        //Name of slice: Name of Object
        history: historySlice,
        // savedItem: savedItemsSlice,
    }
})

// import { createStore } from 'redux';

// // Define initial state
// const initialState = {
//   value: null,
// };

// // Define reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_VALUE':
//       return {
//         ...state,
//         value: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // Create store
// const store = createStore(reducer);

// export default store;
