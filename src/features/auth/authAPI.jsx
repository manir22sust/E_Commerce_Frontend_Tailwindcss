import { API_BASE_URL } from "../../utils/url";

export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.json();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
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

export function signOut(userId) {
  return new Promise(async (resolve) => {
    //TODO : on server we will remove user session info
    resolve({ data: "success" });
  });
}
