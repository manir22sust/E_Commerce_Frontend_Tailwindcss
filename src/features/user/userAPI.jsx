import { API_BASE_URL } from "../../utils/url";
export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${API_BASE_URL}/orders/user/` + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${API_BASE_URL}/users/` + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${API_BASE_URL}/users/` + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data });
  });
}
