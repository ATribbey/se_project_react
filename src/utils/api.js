const baseUrl = "http://localhost:3001";
const baseHeaders = { "Content-Type": "application/json" };
const jwt = localStorage.getItem("jwt");

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    Promise.reject(`Error: ${res.status}`);
  }
}

export function getClothingItems() {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: baseHeaders,
  }).then((res) => {
    return checkResponse(res);
  });
}

export function postClothingItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
}

export function likeClothingItem(id) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
}

export function dislikeClothingItem(id) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
}

export function deleteClothingItem(cardId) {
  return fetch(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
}
