import axios from "axios";

const API_URL = "https://huncho-mart-api.onrender.com";
export const CategoriesApi = async (category) => {
  const respond = await axios.get(
    `${API_URL}/api/products/categories/${category}`,
  );
  return respond?.data;
};
