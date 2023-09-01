import { API_BASE_URL } from "../../utils/url";

export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${API_BASE_URL}/cart`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data });
  });
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    // TODO: we will not hard-code server URL here
    const response = await fetch(`${API_BASE_URL}/cart?user=` + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${API_BASE_URL}/cart/` + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${API_BASE_URL}/cart/` + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data: { id: itemId } });
  });
}

export function resetCart(userId) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetchItemsByUserId(userId);
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const items = await response.json();
      for (let item of items) {
        await deleteItemFromCart(item.id);
      }
      resolve({ status: "success" });
    } catch (error) {
      resolve({ status: "error", message: error.message });
    }
  });
}
