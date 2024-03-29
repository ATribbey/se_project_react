const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.raspberryip.com"
    : "http://localhost:3001";
const baseHeaders = { "Content-Type": "application/json" };

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
  const jwt = localStorage.getItem("jwt");

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
  const jwt = localStorage.getItem("jwt");

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
  const jwt = localStorage.getItem("jwt");

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
  const jwt = localStorage.getItem("jwt");

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
