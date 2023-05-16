import { configureStore } from "@reduxjs/toolkit";
import dataRducer from "./apiSlice";
export default configureStore({
  reducer: {
    data: dataRducer,
  },
});
