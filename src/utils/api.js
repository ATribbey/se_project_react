// addNewCard({ name, link }) {
//     return fetch(this._cardPath, {
//       method: "POST",
//       headers: this._baseHeaders,
//       body: JSON.stringify({
//         name: name,
//         link: link,
//       }),
//     }).then((res) => {
//       return this._checkResponse(res);
//     });
//   }

//   deleteCard(cardId) {
//     return fetch(`${this._cardPath}/${cardId}`, {
//       method: "DELETE",
//       headers: this._baseHeaders,
//     }).then((res) => {
//       return this._checkResponse(res);
//     });
//   }

// json-server --watch db.json --port 3001

const baseUrl = "http://localhost:3001";
const baseHeaders = { "Content-Type": "application/json" };

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function getClothingItems() {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
  }).then((res) => {
    return checkResponse(res);
  });
}

export function postClothingItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({
      name: name,
      imageURL: imageUrl,
      weather: weather,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
}
