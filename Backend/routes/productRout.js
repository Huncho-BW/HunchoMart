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
// Flash Deal settings
const FLASH_DEAL_LIMIT = 10;
const FLASH_DEAL_DURATION = 12 * 60 * 60 * 1000;

// Store the current deals so they stay the same for 12 hours
let currentFlashDeal = [];
let flashDealEndAt = null;

router.get("/flash-deals", (req, res) => {
  // Create a new set of Flash Deals
  const createFlashDeal = () => {
    const flashDeals = products.filter((product) => product.flashDeal === true);

    // Shuffle and pick 10 products
    const shuffle = [...flashDeals]
      .sort(() => Math.random() - 0.5)
      .slice(0, FLASH_DEAL_LIMIT);

    currentFlashDeal = shuffle;

    // Start a new 12-hour period
    flashDealEndAt = Date.now() + FLASH_DEAL_DURATION;
  };

  try {
    const now = Date.now();

    // Create new deals if there is no active deal or the old one expired
    if (!flashDealEndAt || now >= flashDealEndAt) {
      createFlashDeal();
    }

    res.status(200).json({
      success: true,
      data: currentFlashDeal,
      endsAt: flashDealEndAt,
    });
  } catch (error) {
    console.error("Error fetching flash deals:", error);

    res.status(500).json({
      success: false,
      data: [],
      endsAt: null,
      message: "Failed to fetch flash deals",
    });
  }
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
