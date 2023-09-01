import { API_BASE_URL } from "../../utils/url";
export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    // TODO: we will not hard-code server URL here
    const response = await fetch(`${API_BASE_URL}/products/` + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${API_BASE_URL}/products/`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data });
  });
}
export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${API_BASE_URL}/products/` + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination, admin) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}
  // TODO: on server we will support multi values
  // TODO : Server will filter deleted products in case of non-admin
  let queryString = "";

  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  if (admin) {
    queryString += `admin=true`;
  }

  return new Promise(async (resolve) => {
    // TODO: we will not hard-code server URL here
    const response = await fetch(`${API_BASE_URL}/products?` + queryString);
    const data = await response.json();
    const totalItems = response.headers.get("X-Total-Count");
    resolve({
      data: {
        products: data,
        totalItems: +totalItems,
      },
    });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    // TODO: we will not hard-code server URL here
    const response = await fetch(`${API_BASE_URL}/categories`);
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchBrands() {
  return new Promise(async (resolve) => {
    // TODO: we will not hard-code server URL here
    const response = await fetch(`${API_BASE_URL}/brands`);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsDetials(id) {
  return new Promise(async (resolve) => {
    // TODO: we will not hard-code server URL here
    const response = await fetch(`${API_BASE_URL}/products/` + id);
    const data = await response.json();
    resolve({ data });
  });
}
