import { createSlice } from "@reduxjs/toolkit";
import {
  getNftlive,
  getNftnew,
  getAuthor,
  getBlog,
  getBlogPage,
  getDetailNft,
  getDetailBlog,
  getDetailAuthor,
} from "./api";

const apiSlice = createSlice({
  name: "data",
  initialState: {
    liveNft: [],
    newNft: [],
    author: [],
    blogs: [],
    blogPage: [],
    detailNft: {},
    detailBlog: {},
    detailAuthor: {},
  },
  receducers: {},

  extraReducers: (builder) => {
    builder.addCase(getNftlive.fulfilled, (state, action) => {
      state.liveNft = action.payload;
    });
    builder.addCase(getNftnew.fulfilled, (state, action) => {
      state.newNft = action.payload;
    });
    builder.addCase(getAuthor.fulfilled, (state, action) => {
      state.author = action.payload;
    });
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.blogs = action.payload;
    });
    builder.addCase(getBlogPage.fulfilled, (state, action) => {
      state.blogPage = action.payload;
    });
    builder.addCase(getDetailNft.fulfilled, (state, action) => {
      state.detailNft = action.payload;
    });

    builder.addCase(getDetailBlog.fulfilled, (state, action) => {
      state.detailBlog = action.payload;
    });

    builder.addCase(getDetailAuthor.fulfilled, (state, action) => {
      state.detailAuthor = action.payload;
    });
  },
});
export default apiSlice.reducer;
