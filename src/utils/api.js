// getInitialCards() {
//     return fetch(this._cardPath, {
//       method: "GET",
//       headers: this._baseHeaders,
//     }).then((res) => {
//       return this._checkResponse(res);
//     });
// //   }

// json-server --watch db.json --port 3001

const baseUrl = "http://localhost:3001";
const baseHeader = "Content-Type: application/json";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function getClothingItems() {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: baseHeader,
  }).then((res) => {
    checkResponse(res);
  });
}
