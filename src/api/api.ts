import axios, { CreateAxiosDefaults } from "axios";

export const baseURL = "http://localhost:8000/api";

export const headers: CreateAxiosDefaults["headers"] = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const axios_instance = axios.create({
  baseURL,
  headers,
});
