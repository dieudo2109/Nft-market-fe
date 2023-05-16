import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_API = "https://api-nft-vercel.vercel.app/v1";
export const getNftlive = createAsyncThunk("data/getNftlive", async () => {
  const response = await axios.get(`${URL_API}/nft`);
  return response.data.slice(1, 6);
});

export const getNftnew = createAsyncThunk("data/getNftnew", async () => {
  const response = await axios.get(`${URL_API}/nft`);
  return response.data.slice(6, 19);
});

export const getAuthor = createAsyncThunk("data/getAuthor", async () => {
  const response = await axios.get(`${URL_API}/author`);
  return response.data;
});

export const getBlog = createAsyncThunk("data/getBlog", async () => {
  const response = await axios.get(`${URL_API}/blog`);
  return response.data.slice(0, 3);
});

export const getBlogPage = createAsyncThunk("data/getBlogPage", async () => {
  const response = await axios.get(`${URL_API}/blog`);
  return response.data;
});

export const getDetailNft = createAsyncThunk(
  "data/getDetailnft",
  async (id) => {
    const response = await axios.get(`${URL_API}/nft/${id}`);
    return response.data;
  }
);

export const getDetailBlog = createAsyncThunk(
  "data/getDetailBlog",
  async (id) => {
    const response = await axios.get(`${URL_API}/blog/${id}`);
    return response.data;
  }
);

export const getDetailAuthor = createAsyncThunk(
  "data/getDetailAuthor",
  async (id) => {
    const response = await axios.get(`${URL_API}/author/${id}`);
    return response.data;
  }
);
