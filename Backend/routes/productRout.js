import express from "express";
import products from "../data/product.js";

const router = express.Router();

router.get("/", (req, res) => {
  const {
    ids,
    categories,
    brand,
    title,
    minPrice,
    maxPrice,
    size,
    color,
    sort,
    page = 1,
    limit = 12,
    rating,
  } = req.query;

  let filterProduct = products;

  // Product IDs
  if (ids) {
    const productIds = ids.split(",").map((id) => Number(id));

    filterProduct = filterProduct.filter((item) =>
      productIds.includes(item.id),
    );
  }

  // Categories
  if (categories) {
    filterProduct = filterProduct.filter(
      (item) => item.category.toLowerCase() === categories.toLowerCase(),
    );
  }

  // Multiple brands
  if (brand) {
    const brands = brand.split(",").map((item) => item.trim().toLowerCase());

    filterProduct = filterProduct.filter((item) =>
      brands.includes(item.brand.toLowerCase()),
    );
  }

  // Title
  if (title) {
    filterProduct = filterProduct.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase()),
    );
  }

  // Minimum price
  if (minPrice) {
    filterProduct = filterProduct.filter(
      (item) => item.price >= Number(minPrice),
    );
  }

  // Maximum price
  if (maxPrice) {
    filterProduct = filterProduct.filter(
      (item) => item.price <= Number(maxPrice),
    );
  }

  // Multiple sizes
  if (size) {
    const sizes = size.split(",").map((item) => item.trim());

    filterProduct = filterProduct.filter((item) =>
      item.size.some((itemSize) => sizes.includes(itemSize)),
    );
  }

  // Multiple colors
  if (color) {
    const colors = color.split(",").map((item) => item.trim().toLowerCase());

    filterProduct = filterProduct.filter((item) =>
      item.color.some((itemColor) => colors.includes(itemColor.toLowerCase())),
    );
  }

  if (rating) {
    const ratings = rating.split(",");
    filterProduct = filterProduct.filter((item) =>
      ratings.some((rate) => item.rating.rate >= rate),
    );
  }

  // Sorting
  if (sort === "price-asc") {
    filterProduct.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-desc") {
    filterProduct.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filterProduct.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  if (sort === "discount") {
    filterProduct.sort((a, b) => b.discountPercentage - a.discountPercentage);
  }
  // TODO: When we have a real backend/database,
  // replace isNewArrival with createdAt and sort by actual product date.
  if (sort === "newest") {
    filterProduct = filterProduct.filter((item) => item.isNewArrival === true);
  }

  // Pagination
  const pageNumber = Number(page);
  const limitNumber = Number(limit);

  const startIndex = (pageNumber - 1) * limitNumber;

  const endIndex = startIndex + limitNumber;

  const pagnitedProduct = filterProduct.slice(startIndex, endIndex);

  res.json({
    products: pagnitedProduct,

    pagination: {
      page: pageNumber,
      limit: limitNumber,
      totalProducts: filterProduct.length,
      totalPages: Math.ceil(filterProduct.length / limitNumber),
    },
  });
});

router.get("/categories/:categories", (req, res) => {
  const categories = req.params.categories.toLowerCase();

  const categoriesProduct = products.filter(
    (item) => item.category.toLowerCase() === categories,
  );

  if (categoriesProduct.length === 0) {
    return res.status(404).json({
      message: "Category not found",
    });
  }
  res.json(categoriesProduct);
});

router.get("/brand/:brand", (req, res) => {
  const brand = req.params.brand.toLowerCase();

  const brandProduct = products.filter(
    (item) => item.brand.toLowerCase() === brand,
  );

  if (brandProduct.length === 0) {
    return res.status(404).json({
      message: "Category not found",
    });
  }
  res.json(brandProduct);
});

router.get("/search", (req, res) => {
  const search = req.query.q?.toLowerCase().trim();

  if (!search) {
    return res.status(400).json({
      message: "search query is required",
    });
  }

  const result = products.filter(
    (item) =>
      item.title.toLowerCase().includes(search) ||
      item.brand.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search),
  );

  if (result.length === 0) {
    return res.status(404).json({
      message: "No products found",
    });
  }

  return res.json(result);
});
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

export default router;
