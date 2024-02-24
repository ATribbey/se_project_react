import { checkResponse } from "./utils/api";
const baseUrl = "http://localhost:3001";
const baseHeaders = { "Content-Type": "application/json" };

export function login({ email, password }) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    console.log(res);
    return checkResponse(res);
  });
}

export function register({ name, avatar, email, password }) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ name, avatar, email, password }),
  }).then((res) => {
    console.log(res);
    return checkResponse(res);
  });
}
