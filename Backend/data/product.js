const products = [
  {
    id: 50,
    title: "Nike Air Max Red Runner",
    description:
      "A stylish Nike sneaker designed for everyday comfort, casual wear, and active lifestyles.",
    category: "sneaker",

    price: 8500,
    actualPrice: 10000,
    discountPercentage: 15,

    isFlashDeal: true,

    rating: {
      rate: 4.7,
      count: 324,
    },

    stock: 12,

    tags: ["footwear", "sneakers", "nike", "running"],
    brand: "Nike",
    sku: "SNK-NIK-050",

    weight: 1.2,

    dimensions: {
      width: 18,
      height: 11,
      depth: 30,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["Red", "White", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-20T09:00:00.000Z",
      updatedAt: "2026-08-20T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/83/27/9b/83279bc6dda339a963de80f2f4709b5e.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/83/27/9b/83279bc6dda339a963de80f2f4709b5e.jpg",
  },

  {
    id: 51,
    title: "Nike Air Force Classic White",
    description:
      "A clean and versatile Nike sneaker with a classic white design suitable for everyday outfits.",
    category: "sneaker",

    price: 15000,
    actualPrice: 18000,
    discountPercentage: 16.67,

    isFlashDeal: false,

    rating: {
      rate: 4.5,
      count: 287,
    },

    stock: 18,

    tags: ["footwear", "sneakers", "nike", "casual"],
    brand: "Nike",
    sku: "SNK-NIK-051",

    weight: 1.3,

    dimensions: {
      width: 18,
      height: 11,
      depth: 30,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["White", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-21T09:00:00.000Z",
      updatedAt: "2026-08-21T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/af/89/88/af8988f60161559ee2b919376dd42077.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/af/89/88/af8988f60161559ee2b919376dd42077.jpg",
  },

  {
    id: 52,
    title: "Nike Air Max Black Sport",
    description:
      "A modern Nike sneaker combining a sporty appearance with a comfortable design for daily use.",
    category: "sneaker",

    price: 22500,
    actualPrice: 27000,
    discountPercentage: 16.67,

    isFlashDeal: false,

    rating: {
      rate: 4.4,
      count: 198,
    },

    stock: 9,

    tags: ["footwear", "sports", "sneakers", "nike"],
    brand: "Nike",
    sku: "SNK-NIK-052",

    weight: 1.2,

    dimensions: {
      width: 18,
      height: 11,
      depth: 30,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44],
    colors: ["Black", "White"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-22T09:00:00.000Z",
      updatedAt: "2026-08-22T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/ec/f5/77/ecf577233a1bf3d0ee490e67aae84532.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/ec/f5/77/ecf577233a1bf3d0ee490e67aae84532.jpg",
  },

  {
    id: 53,
    title: "Nike Dunk Low Blue Edition",
    description:
      "A stylish Nike low-top sneaker featuring a bold color combination and a comfortable everyday fit.",
    category: "sneaker",

    price: 29999,
    actualPrice: 35000,
    discountPercentage: 14.29,

    isFlashDeal: true,

    rating: {
      rate: 4.8,
      count: 412,
    },

    stock: 6,

    tags: ["footwear", "dunk", "sneakers", "nike"],
    brand: "Nike",
    sku: "SNK-NIK-053",

    weight: 1.1,

    dimensions: {
      width: 18,
      height: 10,
      depth: 29,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["Blue", "White", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-23T09:00:00.000Z",
      updatedAt: "2026-08-23T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/1200x/e6/01/7e/e6017ebb46111d34aef356455279aab1.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/e6/01/7e/e6017ebb46111d34aef356455279aab1.jpg",
  },

  {
    id: 54,
    title: "Nike Air Jordan Street Black",
    description:
      "A premium-looking Nike sneaker with a bold streetwear design made for casual and everyday styling.",
    category: "sneaker",

    price: 39999,
    actualPrice: 45000,
    discountPercentage: 11.11,

    isFlashDeal: false,

    rating: {
      rate: 4.6,
      count: 356,
    },

    stock: 11,

    tags: ["footwear", "jordan", "streetwear", "nike"],
    brand: "Nike",
    sku: "SNK-NIK-054",

    weight: 1.3,

    dimensions: {
      width: 19,
      height: 11,
      depth: 30,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["Black", "White", "Grey"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-24T09:00:00.000Z",
      updatedAt: "2026-08-24T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/1200x/bd/1b/e5/bd1be5cd9b0da8d088f63eca8995f156.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/bd/1b/e5/bd1be5cd9b0da8d088f63eca8995f156.jpg",
  },

  {
    id: 55,
    title: "Nike Court Vision White Red",
    description:
      "A classic Nike sneaker with a clean silhouette and contrasting details for casual everyday wear.",
    category: "sneaker",

    price: 45000,
    actualPrice: 52000,
    discountPercentage: 13.46,

    isFlashDeal: true,

    rating: {
      rate: 4.3,
      count: 265,
    },

    stock: 8,

    tags: ["footwear", "casual", "sneakers", "nike"],
    brand: "Nike",
    sku: "SNK-NIK-055",

    weight: 1.2,

    dimensions: {
      width: 18,
      height: 10,
      depth: 29,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["White", "Red", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-25T09:00:00.000Z",
      updatedAt: "2026-08-25T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/35/8a/ac/358aaca0ed55bab9338d96cdbce1c488.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/35/8a/ac/358aaca0ed55bab9338d96cdbce1c488.jpg",
  },

  {
    id: 56,
    title: "Nike Air Max Grey Runner",
    description:
      "A lightweight Nike sneaker designed with a modern running-inspired appearance and comfortable everyday feel.",
    category: "sneaker",

    price: 55000,
    actualPrice: 65000,
    discountPercentage: 15.38,

    isFlashDeal: false,

    rating: {
      rate: 4.2,
      count: 174,
    },

    stock: 14,

    tags: ["footwear", "running", "sports", "nike"],
    brand: "Nike",
    sku: "SNK-NIK-056",

    weight: 1.1,

    dimensions: {
      width: 18,
      height: 10,
      depth: 30,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44],
    colors: ["Grey", "White", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-26T09:00:00.000Z",
      updatedAt: "2026-08-26T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/1200x/c1/47/d7/c147d75d161d89ee196b1e3622fecb8c.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/c1/47/d7/c147d75d161d89ee196b1e3622fecb8c.jpg",
  },

  {
    id: 57,
    title: "Nike Dunk Classic White Black",
    description:
      "A versatile Nike sneaker featuring a timeless two-tone design suitable for casual streetwear outfits.",
    category: "sneaker",

    price: 68000,
    actualPrice: 78000,
    discountPercentage: 12.82,

    isFlashDeal: true,

    rating: {
      rate: 4.9,
      count: 521,
    },

    stock: 5,

    tags: ["footwear", "dunk", "streetwear", "nike"],
    brand: "Nike",
    sku: "SNK-NIK-057",

    weight: 1.2,

    dimensions: {
      width: 18,
      height: 10,
      depth: 29,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["White", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-27T09:00:00.000Z",
      updatedAt: "2026-08-27T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/1200x/06/af/68/06af68ba950f56342ce76c959b6b01e7.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/06/af/68/06af68ba950f56342ce76c959b6b01e7.jpg",
  },

  {
    id: 58,
    title: "Nike Sport Runner Green",
    description:
      "A sporty Nike sneaker with a fresh color combination designed for active casual outfits and everyday use.",
    category: "sneaker",

    price: 85000,
    actualPrice: 95000,
    discountPercentage: 10.53,

    isFlashDeal: false,

    rating: {
      rate: 4.5,
      count: 231,
    },

    stock: 16,

    tags: ["footwear", "sports", "running", "nike"],
    brand: "Nike",
    sku: "SNK-NIK-058",

    weight: 1.1,

    dimensions: {
      width: 18,
      height: 10,
      depth: 30,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44],
    colors: ["Green", "White", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-28T09:00:00.000Z",
      updatedAt: "2026-08-28T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/1200x/09/76/3b/09763bbdec41f76ba99aa2669c238ea5.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/09/76/3b/09763bbdec41f76ba99aa2669c238ea5.jpg",
  },

  {
    id: 59,
    title: "Nike Air Street White Grey",
    description:
      "A modern Nike sneaker with a clean streetwear-inspired design that works well for everyday casual outfits.",
    category: "sneaker",

    price: 120000,
    actualPrice: 140000,
    discountPercentage: 14.29,

    isFlashDeal: true,

    rating: {
      rate: 4.7,
      count: 389,
    },

    stock: 7,

    tags: ["footwear", "streetwear", "sneakers", "nike"],
    brand: "Nike",
    sku: "SNK-NIK-059",

    weight: 1.2,

    dimensions: {
      width: 18,
      height: 10,
      depth: 29,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["White", "Grey", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-29T09:00:00.000Z",
      updatedAt: "2026-08-29T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/03/68/08/036808f50e0dc0bca1dba721638c43cb.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/03/68/08/036808f50e0dc0bca1dba721638c43cb.jpg",
  },

  {
    id: 60,
    title: "Puma Street Runner Black",
    description:
      "A stylish Puma sneaker designed for everyday comfort with a modern streetwear-inspired look.",
    category: "sneaker",

    price: 7500,
    actualPrice: 9000,
    discountPercentage: 16.67,

    isFlashDeal: false,

    rating: {
      rate: 4.3,
      count: 186,
    },

    stock: 15,

    tags: ["footwear", "sneakers", "puma", "casual"],
    brand: "Puma",
    sku: "SNK-PUM-060",

    weight: 1.1,

    dimensions: {
      width: 18,
      height: 10,
      depth: 29,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["Black", "White"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-20T09:00:00.000Z",
      updatedAt: "2026-08-20T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/19/25/50/1925503471a7a73eedd82e8e9fcf2ea1.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/19/25/50/1925503471a7a73eedd82e8e9fcf2ea1.jpg",
  },

  {
    id: 61,
    title: "Puma Classic White Trainer",
    description:
      "A clean Puma trainer featuring a simple design that works well with casual everyday outfits.",
    category: "sneaker",

    price: 14500,
    actualPrice: 18000,
    discountPercentage: 19.44,

    isFlashDeal: true,

    rating: {
      rate: 4.6,
      count: 241,
    },

    stock: 9,

    tags: ["footwear", "trainer", "puma", "casual"],
    brand: "Puma",
    sku: "SNK-PUM-061",

    weight: 1.2,

    dimensions: {
      width: 18,
      height: 10,
      depth: 29,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["White", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-21T09:00:00.000Z",
      updatedAt: "2026-08-21T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/32/d2/30/32d2304ce4ba2c6c60b6fe5d62349b5e.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/32/d2/30/32d2304ce4ba2c6c60b6fe5d62349b5e.jpg",
  },

  {
    id: 62,
    title: "Puma Sport Black Red",
    description:
      "A sporty Puma sneaker combining a bold color design with a comfortable fit for active everyday use.",
    category: "sneaker",

    price: 22500,
    actualPrice: 28000,
    discountPercentage: 19.64,

    isFlashDeal: false,

    rating: {
      rate: 4.1,
      count: 153,
    },

    stock: 13,

    tags: ["footwear", "sports", "puma", "running"],
    brand: "Puma",
    sku: "SNK-PUM-062",

    weight: 1.2,

    dimensions: {
      width: 18,
      height: 11,
      depth: 30,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44],
    colors: ["Black", "Red", "White"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-22T09:00:00.000Z",
      updatedAt: "2026-08-22T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/1200x/a3/1b/c4/a31bc4d1387b6ec2363f318f0c3f2cec.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/a3/1b/c4/a31bc4d1387b6ec2363f318f0c3f2cec.jpg",
  },

  {
    id: 63,
    title: "Puma Suede Classic Blue",
    description:
      "A classic Puma sneaker with a stylish blue design made for casual outfits and everyday streetwear.",
    category: "sneaker",

    price: 29999,
    actualPrice: 36000,
    discountPercentage: 16.67,

    isFlashDeal: true,

    rating: {
      rate: 4.8,
      count: 367,
    },

    stock: 7,

    tags: ["footwear", "suede", "streetwear", "puma"],
    brand: "Puma",
    sku: "SNK-PUM-063",

    weight: 1.1,

    dimensions: {
      width: 18,
      height: 10,
      depth: 29,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["Blue", "White", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-23T09:00:00.000Z",
      updatedAt: "2026-08-23T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/9e/ba/f3/9ebaf3b7af3a318a2604af7a6dd34dac.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/9e/ba/f3/9ebaf3b7af3a318a2604af7a6dd34dac.jpg",
  },

  {
    id: 64,
    title: "Puma Urban White Black",
    description:
      "A versatile Puma sneaker featuring a clean white and black color combination for everyday casual wear.",
    category: "sneaker",

    price: 39999,
    actualPrice: 47000,
    discountPercentage: 14.89,

    isFlashDeal: false,

    rating: {
      rate: 4.5,
      count: 294,
    },

    stock: 10,

    tags: ["footwear", "urban", "sneakers", "puma"],
    brand: "Puma",
    sku: "SNK-PUM-064",

    weight: 1.2,

    dimensions: {
      width: 18,
      height: 11,
      depth: 30,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["White", "Black", "Grey"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-24T09:00:00.000Z",
      updatedAt: "2026-08-24T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/4e/86/f0/4e86f07e928f9123798ce3e0a1ed4a7a.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/4e/86/f0/4e86f07e928f9123798ce3e0a1ed4a7a.jpg",
  },

  {
    id: 65,
    title: "Puma Running Pro Grey",
    description:
      "A lightweight Puma running-inspired sneaker designed for comfortable everyday movement and casual wear.",
    category: "sneaker",

    price: 45000,
    actualPrice: 54000,
    discountPercentage: 16.67,

    isFlashDeal: true,

    rating: {
      rate: 4.7,
      count: 318,
    },

    stock: 6,

    tags: ["footwear", "running", "sports", "puma"],
    brand: "Puma",
    sku: "SNK-PUM-065",

    weight: 1.1,

    dimensions: {
      width: 18,
      height: 10,
      depth: 30,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44],
    colors: ["Grey", "Black", "White"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-25T09:00:00.000Z",
      updatedAt: "2026-08-25T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/2f/35/30/2f35305332f4452d65eecffeff3ee9f2.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/2f/35/30/2f35305332f4452d65eecffeff3ee9f2.jpg",
  },

  {
    id: 66,
    title: "Puma Rider Sport Green",
    description:
      "A modern Puma sneaker with a sporty silhouette and fresh color combination for casual streetwear.",
    category: "sneaker",

    price: 58000,
    actualPrice: 68000,
    discountPercentage: 14.71,

    isFlashDeal: false,

    rating: {
      rate: 4.4,
      count: 205,
    },

    stock: 14,

    tags: ["footwear", "rider", "sports", "puma"],
    brand: "Puma",
    sku: "SNK-PUM-066",

    weight: 1.2,

    dimensions: {
      width: 19,
      height: 11,
      depth: 30,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["Green", "White", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-26T09:00:00.000Z",
      updatedAt: "2026-08-26T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/1200x/6f/c6/72/6fc67248afba71e516d33dd8a5d3be33.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/6f/c6/72/6fc67248afba71e516d33dd8a5d3be33.jpg",
  },

  {
    id: 67,
    title: "Puma Street Rider Black White",
    description:
      "A bold Puma street sneaker designed with a modern silhouette for casual outfits and everyday use.",
    category: "sneaker",

    price: 72000,
    actualPrice: 82000,
    discountPercentage: 12.2,

    isFlashDeal: true,

    rating: {
      rate: 4.8,
      count: 433,
    },

    stock: 5,

    tags: ["footwear", "streetwear", "rider", "puma"],
    brand: "Puma",
    sku: "SNK-PUM-067",

    weight: 1.3,

    dimensions: {
      width: 19,
      height: 11,
      depth: 30,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["Black", "White", "Grey"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-27T09:00:00.000Z",
      updatedAt: "2026-08-27T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/2d/80/84/2d80846848853711e773db248a197bd8.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/2d/80/84/2d80846848853711e773db248a197bd8.jpg",
  },

  {
    id: 68,
    title: "Puma Future Sport White",
    description:
      "A premium Puma sneaker featuring a clean modern design with a sporty look for everyday wear.",
    category: "sneaker",

    price: 88000,
    actualPrice: 98000,
    discountPercentage: 10.2,

    isFlashDeal: false,

    rating: {
      rate: 4.6,
      count: 276,
    },

    stock: 8,

    tags: ["footwear", "sports", "premium", "puma"],
    brand: "Puma",
    sku: "SNK-PUM-068",

    weight: 1.2,

    dimensions: {
      width: 18,
      height: 11,
      depth: 30,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44],
    colors: ["White", "Black", "Grey"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-28T09:00:00.000Z",
      updatedAt: "2026-08-28T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/ac/d9/2a/acd92a53474a42e566fa5474555634b9.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/ac/d9/2a/acd92a53474a42e566fa5474555634b9.jpg",
  },

  {
    id: 69,
    title: "Puma Premium Street Black",
    description:
      "A premium-looking Puma sneaker with a bold streetwear design created for everyday fashion and casual styling.",
    category: "sneaker",

    price: 115000,
    actualPrice: 135000,
    discountPercentage: 14.81,

    isFlashDeal: true,

    rating: {
      rate: 4.9,
      count: 487,
    },

    stock: 4,

    tags: ["footwear", "streetwear", "premium", "puma"],
    brand: "Puma",
    sku: "SNK-PUM-069",

    weight: 1.3,

    dimensions: {
      width: 19,
      height: 11,
      depth: 31,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["Black", "White", "Grey"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-29T09:00:00.000Z",
      updatedAt: "2026-08-29T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/76/22/c7/7622c7efc0a039f093b8320d61cacbe5.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/76/22/c7/7622c7efc0a039f093b8320d61cacbe5.jpg",
  },

  {
    id: 70,
    title: "Wireless Bluetooth Headphones",
    description:
      "Comfortable wireless headphones with a modern design, suitable for music, videos, gaming, and everyday use.",
    category: "tech",

    price: 18500,
    actualPrice: 23000,
    discountPercentage: 19.57,

    isFlashDeal: true,

    rating: {
      rate: 4.4,
      count: 214,
    },

    stock: 18,

    tags: ["audio", "headphones", "wireless", "bluetooth"],
    brand: "Generic",
    sku: "TECH-AUD-070",

    weight: 0.4,

    dimensions: {
      width: 18,
      height: 20,
      depth: 8,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "White"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-20T09:00:00.000Z",
      updatedAt: "2026-08-20T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/ea/e4/3f/eae43ffb5871992f557ec0340779a4d7.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/ea/e4/3f/eae43ffb5871992f557ec0340779a4d7.jpg",
  },

  {
    id: 71,
    title: "Wireless Gaming Headset",
    description:
      "A stylish wireless gaming headset designed for immersive gaming, music, and everyday entertainment.",
    category: "tech",

    price: 32000,
    actualPrice: 40000,
    discountPercentage: 20,

    isFlashDeal: false,

    rating: {
      rate: 4.6,
      count: 328,
    },

    stock: 12,

    tags: ["gaming", "headset", "wireless", "audio"],
    brand: "Generic",
    sku: "TECH-GAM-071",

    weight: 0.5,

    dimensions: {
      width: 20,
      height: 22,
      depth: 10,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "Blue"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-21T09:00:00.000Z",
      updatedAt: "2026-08-21T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/07/95/77/079577cd1e880a27e38cca57b98e604c.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/07/95/77/079577cd1e880a27e38cca57b98e604c.jpg",
  },

  {
    id: 72,
    title: "Premium Wireless Earbuds",
    description:
      "Compact wireless earbuds with a sleek charging case designed for convenient listening throughout the day.",
    category: "tech",

    price: 14500,
    actualPrice: 19000,
    discountPercentage: 23.68,

    isFlashDeal: true,

    rating: {
      rate: 4.2,
      count: 267,
    },

    stock: 20,

    tags: ["earbuds", "wireless", "bluetooth", "audio"],
    brand: "Generic",
    sku: "TECH-EAR-072",

    weight: 0.08,

    dimensions: {
      width: 5,
      height: 6,
      depth: 3,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["White", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-22T09:00:00.000Z",
      updatedAt: "2026-08-22T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/67/2a/2e/672a2eca2b68c1ab9d960e8a864e3e17.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/67/2a/2e/672a2eca2b68c1ab9d960e8a864e3e17.jpg",
  },

  {
    id: 73,
    title: "Smart Watch Series",
    description:
      "A modern smartwatch designed to complement everyday activities with a clean digital display and useful smart features.",
    category: "tech",

    price: 28000,
    actualPrice: 35000,
    discountPercentage: 20,

    isFlashDeal: false,

    rating: {
      rate: 4.3,
      count: 192,
    },

    stock: 14,

    tags: ["smartwatch", "wearable", "technology", "watch"],
    brand: "Generic",
    sku: "TECH-WAT-073",

    weight: 0.12,

    dimensions: {
      width: 4,
      height: 5,
      depth: 1,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "Silver"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-23T09:00:00.000Z",
      updatedAt: "2026-08-23T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/ae/79/08/ae79083e5ae4dacaedfbc804fadd75c4.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/ae/79/08/ae79083e5ae4dacaedfbc804fadd75c4.jpg",
  },

  {
    id: 74,
    title: "Smartphone Pro Max",
    description:
      "A modern smartphone with a large display and premium design built for communication, entertainment, photography, and everyday productivity.",
    category: "tech",

    price: 185000,
    actualPrice: 215000,
    discountPercentage: 13.95,

    isFlashDeal: true,

    rating: {
      rate: 4.8,
      count: 451,
    },

    stock: 6,

    tags: ["smartphone", "phone", "mobile", "technology"],
    brand: "Generic",
    sku: "TECH-PHO-074",

    weight: 0.22,

    dimensions: {
      width: 8,
      height: 16,
      depth: 1,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "Silver", "Blue"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-24T09:00:00.000Z",
      updatedAt: "2026-08-24T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/1200x/e0/95/bf/e095bf8dfc9e550a9a32f3e26c32bac1.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/e0/95/bf/e095bf8dfc9e550a9a32f3e26c32bac1.jpg",
  },

  {
    id: 75,
    title: "Premium Smartphone",
    description:
      "A premium smartphone designed with a sleek body, large display, and modern features for everyday users.",
    category: "tech",

    price: 245000,
    actualPrice: 280000,
    discountPercentage: 12.5,

    isFlashDeal: false,

    rating: {
      rate: 4.7,
      count: 376,
    },

    stock: 5,

    tags: ["smartphone", "mobile", "premium", "technology"],
    brand: "Generic",
    sku: "TECH-PHO-075",

    weight: 0.21,

    dimensions: {
      width: 8,
      height: 16,
      depth: 1,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "White", "Blue"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-25T09:00:00.000Z",
      updatedAt: "2026-08-25T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/1200x/8e/30/01/8e3001138727068c5850d33a467a83d6.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/8e/30/01/8e3001138727068c5850d33a467a83d6.jpg",
  },

  {
    id: 76,
    title: "Wireless Bluetooth Speaker",
    description:
      "A portable wireless speaker designed for music and entertainment with a compact modern appearance.",
    category: "tech",

    price: 12500,
    actualPrice: 16000,
    discountPercentage: 21.88,

    isFlashDeal: true,

    rating: {
      rate: 4.1,
      count: 173,
    },

    stock: 22,

    tags: ["speaker", "bluetooth", "wireless", "audio"],
    brand: "Generic",
    sku: "TECH-SPK-076",

    weight: 0.7,

    dimensions: {
      width: 10,
      height: 8,
      depth: 10,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "Blue", "Red"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-26T09:00:00.000Z",
      updatedAt: "2026-08-26T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/01/25/11/01251172996a8bb811c24441acbd5df9.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/01/25/11/01251172996a8bb811c24441acbd5df9.jpg",
  },

  {
    id: 77,
    title: "Smartphone Camera Edition",
    description:
      "A stylish smartphone focused on everyday photography, communication, entertainment, and mobile productivity.",
    category: "tech",

    price: 95000,
    actualPrice: 115000,
    discountPercentage: 17.39,

    isFlashDeal: false,

    rating: {
      rate: 4.5,
      count: 286,
    },

    stock: 8,

    tags: ["smartphone", "camera", "mobile", "phone"],
    brand: "Generic",
    sku: "TECH-PHO-077",

    weight: 0.21,

    dimensions: {
      width: 8,
      height: 16,
      depth: 1,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "Blue"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-27T09:00:00.000Z",
      updatedAt: "2026-08-27T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/ac/df/7e/acdf7eb60e5d72b8120be562ddf474b0.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/ac/df/7e/acdf7eb60e5d72b8120be562ddf474b0.jpg",
  },

  {
    id: 78,
    title: "Modern Tablet",
    description:
      "A slim tablet designed for browsing, streaming, studying, reading, and everyday digital activities.",
    category: "tech",

    price: 78000,
    actualPrice: 95000,
    discountPercentage: 17.89,

    isFlashDeal: true,

    rating: {
      rate: 4.4,
      count: 231,
    },

    stock: 10,

    tags: ["tablet", "technology", "mobile", "device"],
    brand: "Generic",
    sku: "TECH-TAB-078",

    weight: 0.5,

    dimensions: {
      width: 17,
      height: 25,
      depth: 1,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Silver", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-28T09:00:00.000Z",
      updatedAt: "2026-08-28T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/be/12/0f/be120fa45b0804706be487ba95b5a582.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/be/12/0f/be120fa45b0804706be487ba95b5a582.jpg",
  },

  {
    id: 79,
    title: "Portable Bluetooth Speaker Pro",
    description:
      "A portable speaker with a stylish design made for music, outdoor entertainment, and everyday listening.",
    category: "tech",

    price: 24500,
    actualPrice: 30000,
    discountPercentage: 18.33,

    isFlashDeal: false,

    rating: {
      rate: 4.4,
      count: 198,
    },

    stock: 16,

    tags: ["speaker", "bluetooth", "portable", "audio"],
    brand: "Generic",
    sku: "TECH-SPK-079",

    weight: 0.8,

    dimensions: {
      width: 12,
      height: 10,
      depth: 12,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "Grey"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-29T09:00:00.000Z",
      updatedAt: "2026-08-29T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/44/ba/07/44ba070e3ce7f45a73634342bf57191f.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/44/ba/07/44ba070e3ce7f45a73634342bf57191f.jpg",
  },

  {
    id: 80,
    title: "Smart Watch Ultra",
    description:
      "A premium smartwatch with a bold design made for everyday wear and modern digital lifestyles.",
    category: "tech",

    price: 42000,
    actualPrice: 52000,
    discountPercentage: 19.23,

    isFlashDeal: true,

    rating: {
      rate: 4.7,
      count: 344,
    },

    stock: 9,

    tags: ["smartwatch", "wearable", "watch", "technology"],
    brand: "Generic",
    sku: "TECH-WAT-080",

    weight: 0.15,

    dimensions: {
      width: 5,
      height: 5,
      depth: 1,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "Orange", "Silver"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-30T09:00:00.000Z",
      updatedAt: "2026-08-30T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/bb/31/c2/bb31c26fcffdf72b62c5895e96d42b7a.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/bb/31/c2/bb31c26fcffdf72b62c5895e96d42b7a.jpg",
  },

  {
    id: 81,
    title: "Modern Wireless Keyboard",
    description:
      "A clean wireless keyboard designed for computers, laptops, workspaces, and everyday typing.",
    category: "tech",

    price: 18000,
    actualPrice: 22000,
    discountPercentage: 18.18,

    isFlashDeal: false,

    rating: {
      rate: 4.4,
      count: 156,
    },

    stock: 19,

    tags: ["keyboard", "wireless", "computer", "accessories"],
    brand: "Generic",
    sku: "TECH-KEY-081",

    weight: 0.6,

    dimensions: {
      width: 14,
      height: 43,
      depth: 3,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "White"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-08-31T09:00:00.000Z",
      updatedAt: "2026-08-31T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/ba/94/0f/ba940f2393bfb0194fdc928cf346d241.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/ba/94/0f/ba940f2393bfb0194fdc928cf346d241.jpg",
  },

  {
    id: 82,
    title: "Premium Laptop",
    description:
      "A modern laptop designed for productivity, studying, browsing, programming, and everyday computing.",
    category: "tech",

    price: 285000,
    actualPrice: 320000,
    discountPercentage: 10.94,

    isFlashDeal: true,

    rating: {
      rate: 4.8,
      count: 412,
    },

    stock: 5,

    tags: ["laptop", "computer", "productivity", "technology"],
    brand: "Generic",
    sku: "TECH-LAP-082",

    weight: 1.5,

    dimensions: {
      width: 23,
      height: 33,
      depth: 2,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 3-5 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Silver", "Black"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-09-01T09:00:00.000Z",
      updatedAt: "2026-09-01T09:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/1200x/d8/61/59/d861596e77d84dd2333181493ab928b5.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/d8/61/59/d861596e77d84dd2333181493ab928b5.jpg",
  },

  {
    id: 83,
    title: "Compact Wireless Mouse",
    description:
      "A compact wireless mouse with a simple modern design for laptops, desktops, offices, and study spaces.",
    category: "tech",

    price: 8500,
    actualPrice: 11000,
    discountPercentage: 22.73,

    isFlashDeal: false,

    rating: {
      rate: 4.3,
      count: 143,
    },

    stock: 25,

    tags: ["mouse", "wireless", "computer", "accessories"],
    brand: "Generic",
    sku: "TECH-MOU-083",

    weight: 0.1,

    dimensions: {
      width: 6,
      height: 4,
      depth: 10,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "White", "Grey"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-09-01T10:00:00.000Z",
      updatedAt: "2026-09-01T10:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/21/5f/e1/215fe14e6544dc1048dd60070037efb4.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/21/5f/e1/215fe14e6544dc1048dd60070037efb4.jpg",
  },

  {
    id: 84,
    title: "Tablet Pro",
    description:
      "A premium tablet designed for entertainment, browsing, studying, reading, and everyday digital tasks.",
    category: "tech",

    price: 110000,
    actualPrice: 130000,
    discountPercentage: 15.38,

    isFlashDeal: true,

    rating: {
      rate: 4.7,
      count: 298,
    },

    stock: 7,

    tags: ["tablet", "technology", "device", "mobile"],
    brand: "Generic",
    sku: "TECH-TAB-084",

    weight: 0.55,

    dimensions: {
      width: 18,
      height: 26,
      depth: 1,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Silver", "Black", "Blue"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-09-01T11:00:00.000Z",
      updatedAt: "2026-09-01T11:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/1200x/50/e8/33/50e833110c432c3acf8ea203450a3371.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/50/e8/33/50e833110c432c3acf8ea203450a3371.jpg",
  },

  {
    id: 85,
    title: "Portable Gaming Console",
    description:
      "A compact gaming device designed for portable entertainment and casual gaming sessions.",
    category: "tech",

    price: 65000,
    actualPrice: 78000,
    discountPercentage: 16.67,

    isFlashDeal: false,

    rating: {
      rate: 4.6,
      count: 235,
    },

    stock: 8,

    tags: ["gaming", "console", "portable", "technology"],
    brand: "Generic",
    sku: "TECH-GAM-085",

    weight: 0.4,

    dimensions: {
      width: 9,
      height: 20,
      depth: 3,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "White"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-09-01T12:00:00.000Z",
      updatedAt: "2026-09-01T12:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/6d/17/6e/6d176e160604ed8bb0a437cb7a5f26ab.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/6d/17/6e/6d176e160604ed8bb0a437cb7a5f26ab.jpg",
  },

  {
    id: 86,
    title: "Premium Gaming Controller",
    description:
      "A modern gaming controller designed for comfortable gameplay and compatibility with popular gaming setups.",
    category: "tech",

    price: 35000,
    actualPrice: 42000,
    discountPercentage: 16.67,

    isFlashDeal: true,

    rating: {
      rate: 4.5,
      count: 187,
    },

    stock: 11,

    tags: ["gaming", "controller", "console", "accessories"],
    brand: "Generic",
    sku: "TECH-GAM-086",

    weight: 0.3,

    dimensions: {
      width: 16,
      height: 10,
      depth: 6,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "White"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-09-01T13:00:00.000Z",
      updatedAt: "2026-09-01T13:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/1200x/35/9d/56/359d56aa296b101094588c7076d87275.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/35/9d/56/359d56aa296b101094588c7076d87275.jpg",
  },

  {
    id: 87,
    title: "Modern Desktop Monitor",
    description:
      "A modern display designed for work, entertainment, gaming, and everyday computer use.",
    category: "tech",

    price: 89000,
    actualPrice: 105000,
    discountPercentage: 15.24,

    isFlashDeal: false,

    rating: {
      rate: 4.6,
      count: 264,
    },

    stock: 9,

    tags: ["monitor", "display", "computer", "technology"],
    brand: "Generic",
    sku: "TECH-MON-087",

    weight: 3.5,

    dimensions: {
      width: 45,
      height: 36,
      depth: 20,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 3-5 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "Silver"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-09-01T14:00:00.000Z",
      updatedAt: "2026-09-01T14:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/736x/b1/45/e3/b145e37390636434c36b9f9f6be0c751.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/b1/45/e3/b145e37390636434c36b9f9f6be0c751.jpg",
  },

  {
    id: 88,
    title: "Premium Smartphone Pro",
    description:
      "A premium smartphone featuring a sleek modern design intended for users who want a powerful everyday mobile device.",
    category: "tech",

    price: 175000,
    actualPrice: 205000,
    discountPercentage: 14.63,

    isFlashDeal: true,

    rating: {
      rate: 4.9,
      count: 521,
    },

    stock: 4,

    tags: ["smartphone", "phone", "premium", "mobile"],
    brand: "Generic",
    sku: "TECH-PHO-088",

    weight: 0.22,

    dimensions: {
      width: 8,
      height: 16,
      depth: 1,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: [],
    colors: ["Black", "Silver", "Blue"],

    reviews: [],

    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-09-01T15:00:00.000Z",
      updatedAt: "2026-09-01T15:00:00.000Z",
    },

    images: [
      "https://i.pinimg.com/1200x/bb/23/d6/bb23d6befc0efe27807a95b03af69f47.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/bb/23/d6/bb23d6befc0efe27807a95b03af69f47.jpg",
  },

  {
    id: 89,
    title: "Luxury Glow Face Serum",
    description:
      "A lightweight facial serum designed to support a smooth, hydrated and naturally glowing appearance.",
    category: "beauty",

    price: 18500,
    actualPrice: 22000,

    discountPercentage: 15.91,

    rating: {
      rate: 4.6,
      count: 184,
    },

    stock: 18,

    tags: ["skincare", "serum", "glow"],
    brand: "Glow Essentials",
    sku: "BEA-GLO-SER-089",

    weight: 0.25,

    dimensions: {
      width: 6,
      height: 12,
      depth: 6,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["30ml", "50ml"],
    colors: ["Clear"],

    reviews: [
      {
        rating: 5,
        comment: "Really nice texture and easy to use.",
        date: "2026-01-15T09:41:02.053Z",
        reviewerName: "Amara James",
        reviewerEmail: "amara@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: true,

    meta: {
      createdAt: "2026-01-15T09:41:02.053Z",
      updatedAt: "2026-01-15T09:41:02.053Z",
      barcode: "8901000000089",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/a0/0e/07/a00e072a1b1288010186291bcf13425d.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/a0/0e/07/a00e072a1b1288010186291bcf13425d.jpg",
  },

  {
    id: 90,
    title: "Hydrating Facial Moisturizer",
    description:
      "A daily moisturizer formulated to help keep the skin feeling soft, comfortable and hydrated.",
    category: "beauty",

    price: 12500,
    actualPrice: 15000,

    discountPercentage: 16.67,

    rating: {
      rate: 4.4,
      count: 126,
    },

    stock: 24,

    tags: ["skincare", "moisturizer", "hydration"],
    brand: "Pure Skin",
    sku: "BEA-PUR-MOI-090",

    weight: 0.3,

    dimensions: {
      width: 7,
      height: 8,
      depth: 7,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["50ml", "100ml"],
    colors: ["White"],

    reviews: [
      {
        rating: 5,
        comment: "Feels light on my skin.",
        date: "2026-01-18T09:41:02.053Z",
        reviewerName: "Blessing Cole",
        reviewerEmail: "blessing@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: false,

    meta: {
      createdAt: "2026-01-18T09:41:02.053Z",
      updatedAt: "2026-01-18T09:41:02.053Z",
      barcode: "8901000000090",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/28/dd/6a/28dd6a1f6a3d6b84a1b5aa112d617972.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/28/dd/6a/28dd6a1f6a3d6b84a1b5aa112d617972.jpg",
  },

  {
    id: 91,
    title: "Vitamin C Brightening Cream",
    description:
      "A nourishing facial cream designed to complement a simple daily skincare routine.",
    category: "beauty",

    price: 22000,
    actualPrice: 28000,

    discountPercentage: 21.43,

    rating: {
      rate: 4.7,
      count: 219,
    },

    stock: 15,

    tags: ["skincare", "vitamin c", "cream"],
    brand: "Radiant Care",
    sku: "BEA-RAD-CRE-091",

    weight: 0.28,

    dimensions: {
      width: 7,
      height: 9,
      depth: 7,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["30ml", "50ml"],
    colors: ["Cream"],

    reviews: [
      {
        rating: 5,
        comment: "Very smooth and easy to apply.",
        date: "2026-02-01T09:41:02.053Z",
        reviewerName: "Dami Wilson",
        reviewerEmail: "dami@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: true,

    meta: {
      createdAt: "2026-02-01T09:41:02.053Z",
      updatedAt: "2026-02-01T09:41:02.053Z",
      barcode: "8901000000091",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/aa/d3/e2/aad3e2cb0ae987a8bd37632a4e198c01.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/aa/d3/e2/aad3e2cb0ae987a8bd37632a4e198c01.jpg",
  },

  {
    id: 92,
    title: "Matte Lipstick Collection",
    description:
      "A stylish collection of creamy matte lip colors suitable for everyday makeup looks.",
    category: "beauty",

    price: 9500,
    actualPrice: 12000,

    discountPercentage: 20.83,

    rating: {
      rate: 4.5,
      count: 173,
    },

    stock: 32,

    tags: ["makeup", "lipstick", "matte"],
    brand: "Velvet Beauty",
    sku: "BEA-VEL-LIP-092",

    weight: 0.15,

    dimensions: {
      width: 5,
      height: 9,
      depth: 5,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["3.5g"],
    colors: ["Red", "Nude", "Pink", "Brown"],

    reviews: [
      {
        rating: 5,
        comment: "The colors are beautiful.",
        date: "2026-02-04T09:41:02.053Z",
        reviewerName: "Tolu Smith",
        reviewerEmail: "tolu@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: false,

    meta: {
      createdAt: "2026-02-04T09:41:02.053Z",
      updatedAt: "2026-02-04T09:41:02.053Z",
      barcode: "8901000000092",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/1200x/3e/97/9e/3e979e954c93e0a0fc641d830e09b136.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/3e/97/9e/3e979e954c93e0a0fc641d830e09b136.jpg",
  },

  {
    id: 93,
    title: "Professional Makeup Brush Set",
    description:
      "A versatile set of makeup brushes designed for applying and blending different makeup products.",
    category: "beauty",

    price: 16500,
    actualPrice: 20000,

    discountPercentage: 17.5,

    rating: {
      rate: 4.6,
      count: 201,
    },

    stock: 21,

    tags: ["makeup", "brushes", "beauty tools"],
    brand: "Beauty Pro",
    sku: "BEA-BEP-BRU-093",

    weight: 0.4,

    dimensions: {
      width: 10,
      height: 20,
      depth: 5,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["8-piece", "12-piece"],
    colors: ["Black", "Pink"],

    reviews: [
      {
        rating: 5,
        comment: "Great brush set for the price.",
        date: "2026-02-08T09:41:02.053Z",
        reviewerName: "Sarah Ade",
        reviewerEmail: "sarah@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: true,

    meta: {
      createdAt: "2026-02-08T09:41:02.053Z",
      updatedAt: "2026-02-08T09:41:02.053Z",
      barcode: "8901000000093",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/d2/0d/e4/d20de4bb9e3d82d4395ba7d863716c5a.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/d2/0d/e4/d20de4bb9e3d82d4395ba7d863716c5a.jpg",
  },

  {
    id: 94,
    title: "Luxury Perfume For Women",
    description:
      "A sophisticated fragrance with a modern scent profile designed for everyday and special occasions.",
    category: "beauty",

    price: 42000,
    actualPrice: 50000,

    discountPercentage: 16,

    rating: {
      rate: 4.8,
      count: 347,
    },

    stock: 12,

    tags: ["perfume", "fragrance", "women"],
    brand: "Aurelia",
    sku: "BEA-AUR-PER-094",

    weight: 0.5,

    dimensions: {
      width: 8,
      height: 15,
      depth: 6,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["50ml", "100ml"],
    colors: ["Gold"],

    reviews: [
      {
        rating: 5,
        comment: "Beautiful fragrance.",
        date: "2026-02-11T09:41:02.053Z",
        reviewerName: "Maya Brown",
        reviewerEmail: "maya@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: false,

    meta: {
      createdAt: "2026-02-11T09:41:02.053Z",
      updatedAt: "2026-02-11T09:41:02.053Z",
      barcode: "8901000000094",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/74/88/d7/7488d7bac79b5bd42e8fb56b5bb62ae9.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/74/88/d7/7488d7bac79b5bd42e8fb56b5bb62ae9.jpg",
  },

  {
    id: 95,
    title: "Hydrating Body Lotion",
    description:
      "A nourishing body lotion designed to leave the skin feeling soft and moisturized.",
    category: "beauty",

    price: 11000,
    actualPrice: 14000,

    discountPercentage: 21.43,

    rating: {
      rate: 4.3,
      count: 142,
    },

    stock: 27,

    tags: ["body care", "lotion", "hydration"],
    brand: "Soft Touch",
    sku: "BEA-SOF-LOT-095",

    weight: 0.5,

    dimensions: {
      width: 8,
      height: 18,
      depth: 6,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["250ml", "500ml"],
    colors: ["White"],

    reviews: [
      {
        rating: 4,
        comment: "Nice and moisturizing.",
        date: "2026-02-15T09:41:02.053Z",
        reviewerName: "Joy Adams",
        reviewerEmail: "joy@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: true,

    meta: {
      createdAt: "2026-02-15T09:41:02.053Z",
      updatedAt: "2026-02-15T09:41:02.053Z",
      barcode: "8901000000095",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/11/7e/6f/117e6f543486b133c73f60ee3f56c423.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/11/7e/6f/117e6f543486b133c73f60ee3f56c423.jpg",
  },

  {
    id: 96,
    title: "Rose Face Mask",
    description:
      "A refreshing facial mask designed as an easy addition to a relaxing skincare routine.",
    category: "beauty",

    price: 7500,
    actualPrice: 9500,

    discountPercentage: 21.05,

    rating: {
      rate: 4.4,
      count: 118,
    },

    stock: 30,

    tags: ["skincare", "face mask", "rose"],
    brand: "Bloom Beauty",
    sku: "BEA-BLO-MAS-096",

    weight: 0.2,

    dimensions: {
      width: 7,
      height: 10,
      depth: 5,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["50g", "100g"],
    colors: ["Pink"],

    reviews: [
      {
        rating: 5,
        comment: "Feels refreshing.",
        date: "2026-02-18T09:41:02.053Z",
        reviewerName: "Nina Paul",
        reviewerEmail: "nina@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: false,

    meta: {
      createdAt: "2026-02-18T09:41:02.053Z",
      updatedAt: "2026-02-18T09:41:02.053Z",
      barcode: "8901000000096",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/74/f8/0d/74f80df7a6f42c85f546adf60c025050.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/74/f8/0d/74f80df7a6f42c85f546adf60c025050.jpg",
  },

  {
    id: 97,
    title: "Complete Makeup Kit",
    description:
      "A convenient makeup collection containing essential products for creating different everyday looks.",
    category: "beauty",

    price: 28500,
    actualPrice: 35000,

    discountPercentage: 18.57,

    rating: {
      rate: 4.7,
      count: 256,
    },

    stock: 14,

    tags: ["makeup", "makeup kit", "cosmetics"],
    brand: "Glam House",
    sku: "BEA-GLA-KIT-097",

    weight: 0.7,

    dimensions: {
      width: 18,
      height: 12,
      depth: 8,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["Standard"],
    colors: ["Multi"],

    reviews: [
      {
        rating: 5,
        comment: "Everything I needed in one kit.",
        date: "2026-02-20T09:41:02.053Z",
        reviewerName: "Ella Green",
        reviewerEmail: "ella@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: true,

    meta: {
      createdAt: "2026-02-20T09:41:02.053Z",
      updatedAt: "2026-02-20T09:41:02.053Z",
      barcode: "8901000000097",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/4c/10/78/4c1078c44bc4a0c4590cd848523ef8ac.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/4c/10/78/4c1078c44bc4a0c4590cd848523ef8ac.jpg",
  },

  {
    id: 98,
    title: "Daily Sunscreen SPF 50",
    description:
      "A lightweight daily sunscreen designed to fit easily into a regular skincare routine.",
    category: "beauty",

    price: 13500,
    actualPrice: 17000,

    discountPercentage: 20.59,

    rating: {
      rate: 4.6,
      count: 193,
    },

    stock: 25,

    tags: ["skincare", "sunscreen", "spf"],
    brand: "Sun Shield",
    sku: "BEA-SUN-SPF-098",

    weight: 0.2,

    dimensions: {
      width: 6,
      height: 14,
      depth: 5,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["30ml", "50ml"],
    colors: ["White"],

    reviews: [
      {
        rating: 5,
        comment: "Lightweight and comfortable.",
        date: "2026-02-22T09:41:02.053Z",
        reviewerName: "Kemi Johnson",
        reviewerEmail: "kemi@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: false,

    meta: {
      createdAt: "2026-02-22T09:41:02.053Z",
      updatedAt: "2026-02-22T09:41:02.053Z",
      barcode: "8901000000098",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/c3/65/0c/c3650c6633a7d8634e1f0a625c1fd2a9.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/c3/65/0c/c3650c6633a7d8634e1f0a625c1fd2a9.jpg",
  },

  {
    id: 99,
    title: "Luxury Eyeshadow Palette",
    description:
      "A versatile eyeshadow palette featuring a selection of shades for creating different makeup styles.",
    category: "beauty",

    price: 19500,
    actualPrice: 24000,

    discountPercentage: 18.75,

    rating: {
      rate: 4.8,
      count: 291,
    },

    stock: 16,

    tags: ["makeup", "eyeshadow", "cosmetics"],
    brand: "Glam House",
    sku: "BEA-GLA-EYE-099",

    weight: 0.35,

    dimensions: {
      width: 12,
      height: 10,
      depth: 2,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["12 shades", "18 shades"],
    colors: ["Brown", "Pink", "Gold"],

    reviews: [
      {
        rating: 5,
        comment: "Beautiful range of colors.",
        date: "2026-02-25T09:41:02.053Z",
        reviewerName: "Lara White",
        reviewerEmail: "lara@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: true,

    meta: {
      createdAt: "2026-02-25T09:41:02.053Z",
      updatedAt: "2026-02-25T09:41:02.053Z",
      barcode: "8901000000099",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/4c/28/85/4c28853279afbfbaad098dab66a55e19.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/4c/28/85/4c28853279afbfbaad098dab66a55e19.jpg",
  },

  {
    id: 100,
    title: "Nourishing Hair Care Set",
    description:
      "A complete hair care set designed to support a simple and refreshing hair care routine.",
    category: "beauty",

    price: 24500,
    actualPrice: 30000,

    discountPercentage: 18.33,

    rating: {
      rate: 4.5,
      count: 164,
    },

    stock: 19,

    tags: ["hair care", "shampoo", "conditioner"],
    brand: "Nature Glow",
    sku: "BEA-NAT-HAI-100",

    weight: 0.9,

    dimensions: {
      width: 15,
      height: 22,
      depth: 8,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["250ml", "500ml"],
    colors: ["Green", "White"],

    reviews: [
      {
        rating: 5,
        comment: "Good value as a set.",
        date: "2026-02-28T09:41:02.053Z",
        reviewerName: "Ife Brown",
        reviewerEmail: "ife@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: false,

    meta: {
      createdAt: "2026-02-28T09:41:02.053Z",
      updatedAt: "2026-02-28T09:41:02.053Z",
      barcode: "8901000000100",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/8d/00/8a/8d008a81d7ec7e65218e4a3d8859e76c.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/8d/00/8a/8d008a81d7ec7e65218e4a3d8859e76c.jpg",
  },

  {
    id: 101,
    title: "Rose Gold Makeup Set",
    description:
      "A stylish collection of everyday makeup essentials presented in a compact beauty set.",
    category: "beauty",

    price: 32000,
    actualPrice: 40000,

    discountPercentage: 20,

    rating: {
      rate: 4.7,
      count: 238,
    },

    stock: 13,

    tags: ["makeup", "beauty set", "cosmetics"],
    brand: "Velvet Beauty",
    sku: "BEA-VEL-SET-101",

    weight: 0.65,

    dimensions: {
      width: 18,
      height: 14,
      depth: 6,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["Standard"],
    colors: ["Rose Gold"],

    reviews: [
      {
        rating: 5,
        comment: "Looks premium and works well.",
        date: "2026-03-01T09:41:02.053Z",
        reviewerName: "Ada King",
        reviewerEmail: "ada@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: true,

    meta: {
      createdAt: "2026-03-01T09:41:02.053Z",
      updatedAt: "2026-03-01T09:41:02.053Z",
      barcode: "8901000000101",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/1200x/a6/3b/20/a63b20b9bb72d2f7fdd411dc321ccb47.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/a6/3b/20/a63b20b9bb72d2f7fdd411dc321ccb47.jpg",
  },

  {
    id: 102,
    title: "Gentle Facial Cleanser",
    description:
      "A gentle facial cleanser made for a simple daily skincare routine.",
    category: "beauty",

    price: 8500,
    actualPrice: 11000,

    discountPercentage: 22.73,

    rating: {
      rate: 4.4,
      count: 151,
    },

    stock: 28,

    tags: ["skincare", "cleanser", "face wash"],
    brand: "Pure Skin",
    sku: "BEA-PUR-CLE-102",

    weight: 0.3,

    dimensions: {
      width: 6,
      height: 16,
      depth: 5,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["150ml", "250ml"],
    colors: ["White"],

    reviews: [
      {
        rating: 5,
        comment: "Gentle and easy to use.",
        date: "2026-03-04T09:41:02.053Z",
        reviewerName: "Mariam Lee",
        reviewerEmail: "mariam@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: false,

    meta: {
      createdAt: "2026-03-04T09:41:02.053Z",
      updatedAt: "2026-03-04T09:41:02.053Z",
      barcode: "8901000000102",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/fb/54/39/fb543907ca76bad97915e893d1caad3c.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/fb/54/39/fb543907ca76bad97915e893d1caad3c.jpg",
  },

  {
    id: 103,
    title: "Premium Facial Care Collection",
    description:
      "A premium collection of facial care products designed to complement a complete skincare routine.",
    category: "beauty",

    price: 46000,
    actualPrice: 55000,

    discountPercentage: 16.36,

    rating: {
      rate: 4.9,
      count: 312,
    },

    stock: 10,

    tags: ["skincare", "facial care", "premium"],
    brand: "Radiant Care",
    sku: "BEA-RAD-COL-103",

    weight: 1,

    dimensions: {
      width: 22,
      height: 18,
      depth: 10,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["Standard"],
    colors: ["White", "Gold"],

    reviews: [
      {
        rating: 5,
        comment: "Feels like a premium collection.",
        date: "2026-03-07T09:41:02.053Z",
        reviewerName: "Rita Young",
        reviewerEmail: "rita@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: true,

    meta: {
      createdAt: "2026-03-07T09:41:02.053Z",
      updatedAt: "2026-03-07T09:41:02.053Z",
      barcode: "8901000000103",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/95/77/98/957798fd49af8580db5d9f39cac75603.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/95/77/98/957798fd49af8580db5d9f39cac75603.jpg",
  },

  {
    id: 104,
    title: "Natural Hair Styling Cream",
    description:
      "A lightweight styling cream designed to help with everyday hair styling and finishing.",
    category: "beauty",

    price: 10500,
    actualPrice: 13000,

    discountPercentage: 19.23,

    rating: {
      rate: 4.3,
      count: 109,
    },

    stock: 22,

    tags: ["hair care", "styling", "hair cream"],
    brand: "Nature Glow",
    sku: "BEA-NAT-STY-104",

    weight: 0.25,

    dimensions: {
      width: 7,
      height: 9,
      depth: 7,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["100g", "200g"],
    colors: ["White"],

    reviews: [
      {
        rating: 4,
        comment: "Works nicely for everyday styling.",
        date: "2026-03-10T09:41:02.053Z",
        reviewerName: "Tina Mark",
        reviewerEmail: "tina@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: false,

    meta: {
      createdAt: "2026-03-10T09:41:02.053Z",
      updatedAt: "2026-03-10T09:41:02.053Z",
      barcode: "8901000000104",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/da/76/38/da7638166d98539321a839dce65a1c41.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/da/76/38/da7638166d98539321a839dce65a1c41.jpg",
  },

  {
    id: 105,
    title: "Elegant Beauty Perfume",
    description:
      "An elegant fragrance designed with a modern profile suitable for everyday wear.",
    category: "beauty",

    price: 38000,
    actualPrice: 45000,

    discountPercentage: 15.56,

    rating: {
      rate: 4.6,
      count: 227,
    },

    stock: 11,

    tags: ["perfume", "fragrance", "beauty"],
    brand: "Aurelia",
    sku: "BEA-AUR-PER-105",

    weight: 0.45,

    dimensions: {
      width: 8,
      height: 15,
      depth: 6,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["50ml", "100ml"],
    colors: ["Pink", "Gold"],

    reviews: [
      {
        rating: 5,
        comment: "Very elegant packaging.",
        date: "2026-03-13T09:41:02.053Z",
        reviewerName: "Grace Kim",
        reviewerEmail: "grace@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: true,

    meta: {
      createdAt: "2026-03-13T09:41:02.053Z",
      updatedAt: "2026-03-13T09:41:02.053Z",
      barcode: "8901000000105",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/69/cc/7d/69cc7dfdc1bae016e5f65fe2effcf411.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/69/cc/7d/69cc7dfdc1bae016e5f65fe2effcf411.jpg",
  },

  {
    id: 106,
    title: "Luxury Makeup Organizer",
    description:
      "A stylish organizer designed to keep makeup and beauty essentials neatly arranged.",
    category: "beauty",

    price: 14500,
    actualPrice: 18000,

    discountPercentage: 19.44,

    rating: {
      rate: 4.5,
      count: 137,
    },

    stock: 17,

    tags: ["beauty tools", "organizer", "makeup"],
    brand: "Beauty Pro",
    sku: "BEA-BEP-ORG-106",

    weight: 0.8,

    dimensions: {
      width: 25,
      height: 15,
      depth: 18,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["Medium", "Large"],
    colors: ["Clear", "Pink"],

    reviews: [
      {
        rating: 5,
        comment: "Very useful for organizing products.",
        date: "2026-03-16T09:41:02.053Z",
        reviewerName: "Lola Ade",
        reviewerEmail: "lola@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: false,

    meta: {
      createdAt: "2026-03-16T09:41:02.053Z",
      updatedAt: "2026-03-16T09:41:02.053Z",
      barcode: "8901000000106",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/ec/9d/0c/ec9d0c390040164b43afdf2f5c1857cd.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/ec/9d/0c/ec9d0c390040164b43afdf2f5c1857cd.jpg",
  },

  {
    id: 107,
    title: "Complete Skincare Starter Kit",
    description:
      "A convenient skincare starter collection containing everyday facial care essentials.",
    category: "beauty",

    price: 35000,
    actualPrice: 42000,

    discountPercentage: 16.67,

    rating: {
      rate: 4.8,
      count: 274,
    },

    stock: 14,

    tags: ["skincare", "starter kit", "beauty"],
    brand: "Glow Essentials",
    sku: "BEA-GLO-KIT-107",

    weight: 0.8,

    dimensions: {
      width: 20,
      height: 18,
      depth: 9,
    },

    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["Standard"],
    colors: ["White", "Pink"],

    reviews: [
      {
        rating: 5,
        comment: "Great starter collection.",
        date: "2026-03-18T09:41:02.053Z",
        reviewerName: "Mimi James",
        reviewerEmail: "mimi@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: true,

    meta: {
      createdAt: "2026-03-18T09:41:02.053Z",
      updatedAt: "2026-03-18T09:41:02.053Z",
      barcode: "8901000000107",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/03/cb/10/03cb10f29ef831f832cdfde437d917c8.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/03/cb/10/03cb10f29ef831f832cdfde437d917c8.jpg",
  },

  {
    id: 108,
    title: "Premium Beauty Essentials Set",
    description:
      "A premium collection of beauty essentials designed for a complete everyday beauty routine.",
    category: "beauty",

    price: 48000,
    actualPrice: 60000,

    discountPercentage: 20,

    rating: {
      rate: 4.9,
      count: 356,
    },

    stock: 9,

    tags: ["beauty", "premium", "cosmetics"],
    brand: "Velvet Beauty",
    sku: "BEA-VEL-PRE-108",

    weight: 1,

    dimensions: {
      width: 24,
      height: 20,
      depth: 10,
    },

    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-3 days",
    availabilityStatus: "In Stock",

    sizes: ["Standard"],
    colors: ["Gold", "Pink", "White"],

    reviews: [
      {
        rating: 5,
        comment: "Beautiful collection and presentation.",
        date: "2026-03-20T09:41:02.053Z",
        reviewerName: "Aisha Brown",
        reviewerEmail: "aisha@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    flashDeal: false,

    meta: {
      createdAt: "2026-03-20T09:41:02.053Z",
      updatedAt: "2026-03-20T09:41:02.053Z",
      barcode: "8901000000108",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/08/69/e3/0869e3f0f456dcb80463987516c85dfe.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/08/69/e3/0869e3f0f456dcb80463987516c85dfe.jpg",
  },

  {
    id: 109,
    title: "Classic Black Casual T-Shirt",
    description:
      "A clean and versatile black casual T-shirt designed for everyday comfort and easy styling.",
    category: "fashion",

    price: 8500,
    actualPrice: 10000,
    discountPercentage: 15,

    rating: {
      rate: 4.5,
      count: 184,
    },

    stock: 18,

    tags: ["fashion", "t-shirt", "casual", "mens-wear"],
    brand: "UrbanStyle",
    sku: "FAS-URB-001",

    weight: 0.3,

    dimensions: {
      width: 30,
      height: 2,
      depth: 25,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],

    flashDeal: true,

    reviews: [
      {
        rating: 5,
        comment: "Very comfortable and fits well.",
        date: "2026-05-10T09:41:02.053Z",
        reviewerName: "Daniel Smith",
        reviewerEmail: "daniel@example.com",
      },
      {
        rating: 4,
        comment: "Good quality for the price.",
        date: "2026-05-15T09:41:02.053Z",
        reviewerName: "James Brown",
        reviewerEmail: "james@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-01T09:41:02.053Z",
      updatedAt: "2026-05-01T09:41:02.053Z",
      barcode: "89000000109",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/7d/20/17/7d2017c9ef0e484e0ae15bdc54f26285.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/7d/20/17/7d2017c9ef0e484e0ae15bdc54f26285.jpg",
  },

  {
    id: 110,
    title: "White Oversized Casual T-Shirt",
    description:
      "A modern oversized white T-shirt with a relaxed fit for casual everyday outfits.",
    category: "fashion",

    price: 12000,
    actualPrice: 15000,
    discountPercentage: 20,

    rating: {
      rate: 4.6,
      count: 231,
    },

    stock: 24,

    tags: ["fashion", "oversized", "t-shirt", "casual"],
    brand: "UrbanStyle",
    sku: "FAS-URB-002",

    weight: 0.35,

    dimensions: {
      width: 32,
      height: 2,
      depth: 27,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],

    flashDeal: false,

    reviews: [
      {
        rating: 5,
        comment: "The oversized fit is really nice.",
        date: "2026-05-12T09:41:02.053Z",
        reviewerName: "Michael Johnson",
        reviewerEmail: "michael@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-02T09:41:02.053Z",
      updatedAt: "2026-05-02T09:41:02.053Z",
      barcode: "89000000110",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/ea/2c/f0/ea2cf073fc9a8daabd8b157cd33b9bbb.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/ea/2c/f0/ea2cf073fc9a8daabd8b157cd33b9bbb.jpg",
  },

  {
    id: 111,
    title: "Premium Beige Casual Shirt",
    description:
      "A premium beige casual shirt with a simple design suitable for relaxed and smart-casual occasions.",
    category: "fashion",

    price: 28000,
    actualPrice: 35000,
    discountPercentage: 20,

    rating: {
      rate: 4.7,
      count: 167,
    },

    stock: 12,

    tags: ["shirt", "casual", "premium", "mens-wear"],
    brand: "ClassicFit",
    sku: "FAS-CLA-003",

    weight: 0.45,

    dimensions: {
      width: 34,
      height: 3,
      depth: 28,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 3-5 days",
    availabilityStatus: "In Stock",

    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Beige"],

    flashDeal: true,

    reviews: [
      {
        rating: 5,
        comment: "Looks premium and feels comfortable.",
        date: "2026-05-14T09:41:02.053Z",
        reviewerName: "Chris Adams",
        reviewerEmail: "chris@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-03T09:41:02.053Z",
      updatedAt: "2026-05-03T09:41:02.053Z",
      barcode: "89000000111",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/1200x/76/a8/ca/76a8ca453c6d0f18972bd99ca27279e5.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/76/a8/ca/76a8ca453c6d0f18972bd99ca27279e5.jpg",
  },

  {
    id: 112,
    title: "Brown Relaxed Fit Shirt",
    description:
      "A relaxed-fit brown shirt designed for comfortable everyday wear with a modern appearance.",
    category: "fashion",

    price: 18500,
    actualPrice: 22000,
    discountPercentage: 15.91,

    rating: {
      rate: 4.3,
      count: 143,
    },

    stock: 15,

    tags: ["shirt", "brown", "casual", "fashion"],
    brand: "ClassicFit",
    sku: "FAS-CLA-004",

    weight: 0.42,

    dimensions: {
      width: 33,
      height: 3,
      depth: 27,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown"],

    flashDeal: false,

    reviews: [
      {
        rating: 4,
        comment: "Nice shirt and good material.",
        date: "2026-05-16T09:41:02.053Z",
        reviewerName: "Alex White",
        reviewerEmail: "alex@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-04T09:41:02.053Z",
      updatedAt: "2026-05-04T09:41:02.053Z",
      barcode: "89000000112",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/d9/6e/36/d96e366c11cc8d390fce2c812e02a503.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/d9/6e/36/d96e366c11cc8d390fce2c812e02a503.jpg",
  },

  {
    id: 113,
    title: "Modern Grey Streetwear Outfit",
    description:
      "A modern grey streetwear outfit combining comfort and contemporary fashion for casual occasions.",
    category: "fashion",

    price: 42000,
    actualPrice: 50000,
    discountPercentage: 16,

    rating: {
      rate: 4.8,
      count: 205,
    },

    stock: 9,

    tags: ["streetwear", "outfit", "grey", "modern"],
    brand: "StreetMode",
    sku: "FAS-STR-005",

    weight: 0.8,

    dimensions: {
      width: 38,
      height: 5,
      depth: 30,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 3-5 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey"],

    flashDeal: true,

    reviews: [
      {
        rating: 5,
        comment: "Great streetwear piece.",
        date: "2026-05-18T09:41:02.053Z",
        reviewerName: "Kevin Wilson",
        reviewerEmail: "kevin@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-05T09:41:02.053Z",
      updatedAt: "2026-05-05T09:41:02.053Z",
      barcode: "89000000113",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/e7/7e/f9/e77ef932bd767eb1cc52494156777700.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/e7/7e/f9/e77ef932bd767eb1cc52494156777700.jpg",
  },

  {
    id: 114,
    title: "Cream Premium Hoodie",
    description:
      "A comfortable cream hoodie featuring a clean design and relaxed fit for everyday wear.",
    category: "fashion",

    price: 35000,
    actualPrice: 45000,
    discountPercentage: 22.22,

    rating: {
      rate: 4.7,
      count: 276,
    },

    stock: 11,

    tags: ["hoodie", "cream", "casual", "streetwear"],
    brand: "StreetMode",
    sku: "FAS-STR-006",

    weight: 0.7,

    dimensions: {
      width: 38,
      height: 5,
      depth: 30,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 3-5 days",
    availabilityStatus: "In Stock",

    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Cream"],

    flashDeal: false,

    reviews: [
      {
        rating: 5,
        comment: "Very comfortable hoodie.",
        date: "2026-05-19T09:41:02.053Z",
        reviewerName: "Ryan Clark",
        reviewerEmail: "ryan@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-06T09:41:02.053Z",
      updatedAt: "2026-05-06T09:41:02.053Z",
      barcode: "89000000114",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/1200x/aa/3c/30/aa3c304a1814fc9b35579e3ccb4459ba.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/aa/3c/30/aa3c304a1814fc9b35579e3ccb4459ba.jpg",
  },

  {
    id: 115,
    title: "Black Minimalist Jacket",
    description:
      "A minimalist black jacket with a clean silhouette suitable for modern casual styling.",
    category: "fashion",

    price: 55000,
    actualPrice: 70000,
    discountPercentage: 21.43,

    rating: {
      rate: 4.6,
      count: 198,
    },

    stock: 8,

    tags: ["jacket", "black", "minimalist", "fashion"],
    brand: "UrbanStyle",
    sku: "FAS-URB-007",

    weight: 0.9,

    dimensions: {
      width: 40,
      height: 6,
      depth: 32,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 3-5 days",
    availabilityStatus: "In Stock",

    sizes: ["M", "L", "XL"],
    colors: ["Black"],

    flashDeal: true,

    reviews: [
      {
        rating: 5,
        comment: "Simple and stylish jacket.",
        date: "2026-05-20T09:41:02.053Z",
        reviewerName: "Samuel Green",
        reviewerEmail: "samuel@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-07T09:41:02.053Z",
      updatedAt: "2026-05-07T09:41:02.053Z",
      barcode: "89000000115",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/70/44/00/7044009ea372580578c53776628be5bf.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/70/44/00/7044009ea372580578c53776628be5bf.jpg",
  },

  {
    id: 116,
    title: "White Long Sleeve Casual Top",
    description:
      "A clean white long-sleeve top designed for simple everyday outfits and layering.",
    category: "fashion",

    price: 15000,
    actualPrice: 18000,
    discountPercentage: 16.67,

    rating: {
      rate: 4.4,
      count: 121,
    },

    stock: 21,

    tags: ["long-sleeve", "white", "casual", "top"],
    brand: "DailyWear",
    sku: "FAS-DAI-008",

    weight: 0.35,

    dimensions: {
      width: 32,
      height: 2,
      depth: 26,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],

    flashDeal: false,

    reviews: [
      {
        rating: 4,
        comment: "Good everyday top.",
        date: "2026-05-21T09:41:02.053Z",
        reviewerName: "David King",
        reviewerEmail: "david@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-08T09:41:02.053Z",
      updatedAt: "2026-05-08T09:41:02.053Z",
      barcode: "89000000116",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/1d/d9/95/1dd9957fc589aee9b767af3ec92abc50.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/1d/d9/95/1dd9957fc589aee9b767af3ec92abc50.jpg",
  },

  {
    id: 117,
    title: "Blue Denim Casual Jacket",
    description:
      "A classic blue denim jacket that works well with casual outfits throughout the year.",
    category: "fashion",

    price: 48000,
    actualPrice: 60000,
    discountPercentage: 20,

    rating: {
      rate: 4.8,
      count: 314,
    },

    stock: 10,

    tags: ["denim", "jacket", "blue", "casual"],
    brand: "DenimWorks",
    sku: "FAS-DEN-009",

    weight: 0.85,

    dimensions: {
      width: 40,
      height: 6,
      depth: 32,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 3-5 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue"],

    flashDeal: true,

    reviews: [
      {
        rating: 5,
        comment: "Excellent denim jacket.",
        date: "2026-05-22T09:41:02.053Z",
        reviewerName: "Mark Allen",
        reviewerEmail: "mark@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-09T09:41:02.053Z",
      updatedAt: "2026-05-09T09:41:02.053Z",
      barcode: "89000000117",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/1d/82/eb/1d82eb2e75bed15755cae36a2aa8f105.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/1d/82/eb/1d82eb2e75bed15755cae36a2aa8f105.jpg",
  },

  {
    id: 118,
    title: "Elegant Black Evening Outfit",
    description:
      "A sophisticated black outfit designed for evening occasions and stylish formal appearances.",
    category: "fashion",

    price: 85000,
    actualPrice: 100000,
    discountPercentage: 15,

    rating: {
      rate: 4.9,
      count: 186,
    },

    stock: 6,

    tags: ["formal", "evening", "black", "premium"],
    brand: "EliteWear",
    sku: "FAS-ELI-010",

    weight: 0.75,

    dimensions: {
      width: 40,
      height: 7,
      depth: 32,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 4-6 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],

    flashDeal: false,

    reviews: [
      {
        rating: 5,
        comment: "Looks elegant and expensive.",
        date: "2026-05-23T09:41:02.053Z",
        reviewerName: "Anthony Cole",
        reviewerEmail: "anthony@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-10T09:41:02.053Z",
      updatedAt: "2026-05-10T09:41:02.053Z",
      barcode: "89000000118",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/1c/3b/ae/1c3bae5e86dfbbb3967757565cc3320b.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/1c/3b/ae/1c3bae5e86dfbbb3967757565cc3320b.jpg",
  },

  {
    id: 119,
    title: "Casual Green Streetwear Set",
    description:
      "A stylish green streetwear set made for comfortable everyday use and modern casual looks.",
    category: "fashion",

    price: 39000,
    actualPrice: 48000,
    discountPercentage: 18.75,

    rating: {
      rate: 4.5,
      count: 159,
    },

    stock: 13,

    tags: ["streetwear", "green", "casual", "set"],
    brand: "StreetMode",
    sku: "FAS-STR-011",

    weight: 0.75,

    dimensions: {
      width: 38,
      height: 5,
      depth: 30,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 3-5 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL"],
    colors: ["Green"],

    flashDeal: true,

    reviews: [
      {
        rating: 5,
        comment: "Nice color and comfortable fit.",
        date: "2026-05-24T09:41:02.053Z",
        reviewerName: "Eric Stone",
        reviewerEmail: "eric@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-11T09:41:02.053Z",
      updatedAt: "2026-05-11T09:41:02.053Z",
      barcode: "89000000119",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/1200x/0c/5d/15/0c5d1592181bfb592cd8dd44367f85b9.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/0c/5d/15/0c5d1592181bfb592cd8dd44367f85b9.jpg",
  },

  {
    id: 120,
    title: "Premium Brown Fashion Coat",
    description:
      "A premium brown coat with a refined appearance designed for stylish outfits and cooler weather.",
    category: "fashion",

    price: 95000,
    actualPrice: 115000,
    discountPercentage: 17.39,

    rating: {
      rate: 4.8,
      count: 174,
    },

    stock: 5,

    tags: ["coat", "brown", "premium", "outerwear"],
    brand: "EliteWear",
    sku: "FAS-ELI-012",

    weight: 1.1,

    dimensions: {
      width: 42,
      height: 8,
      depth: 34,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 4-6 days",
    availabilityStatus: "In Stock",

    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Brown"],

    flashDeal: false,

    reviews: [
      {
        rating: 5,
        comment: "Very good quality coat.",
        date: "2026-05-25T09:41:02.053Z",
        reviewerName: "George Adams",
        reviewerEmail: "george@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-12T09:41:02.053Z",
      updatedAt: "2026-05-12T09:41:02.053Z",
      barcode: "89000000120",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/9b/ba/dd/9bbadda4fcb68e1fb4efb8e433d1f518.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/9b/ba/dd/9bbadda4fcb68e1fb4efb8e433d1f518.jpg",
  },

  {
    id: 121,
    title: "Light Blue Casual Shirt",
    description:
      "A lightweight light-blue casual shirt suitable for relaxed daytime outfits.",
    category: "fashion",

    price: 22000,
    actualPrice: 28000,
    discountPercentage: 21.43,

    rating: {
      rate: 4.4,
      count: 132,
    },

    stock: 17,

    tags: ["shirt", "blue", "casual", "lightweight"],
    brand: "DailyWear",
    sku: "FAS-DAI-013",

    weight: 0.4,

    dimensions: {
      width: 33,
      height: 3,
      depth: 27,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL"],
    colors: ["Light Blue"],

    flashDeal: true,

    reviews: [
      {
        rating: 4,
        comment: "Good shirt for everyday wear.",
        date: "2026-05-26T09:41:02.053Z",
        reviewerName: "Brian Hall",
        reviewerEmail: "brian@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-13T09:41:02.053Z",
      updatedAt: "2026-05-13T09:41:02.053Z",
      barcode: "89000000121",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/65/4e/c5/654ec5f5f4985b7186e62132add9e163.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/65/4e/c5/654ec5f5f4985b7186e62132add9e163.jpg",
  },

  {
    id: 122,
    title: "Modern White Fashion Set",
    description:
      "A clean white fashion set designed with a modern silhouette for casual and semi-formal occasions.",
    category: "fashion",

    price: 45000,
    actualPrice: 55000,
    discountPercentage: 18.18,

    rating: {
      rate: 4.6,
      count: 203,
    },

    stock: 10,

    tags: ["white", "fashion", "set", "modern"],
    brand: "EliteWear",
    sku: "FAS-ELI-014",

    weight: 0.7,

    dimensions: {
      width: 38,
      height: 5,
      depth: 30,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 3-5 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],

    flashDeal: false,

    reviews: [
      {
        rating: 5,
        comment: "Very clean and stylish.",
        date: "2026-05-27T09:41:02.053Z",
        reviewerName: "Jason Reed",
        reviewerEmail: "jason@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-14T09:41:02.053Z",
      updatedAt: "2026-05-14T09:41:02.053Z",
      barcode: "89000000122",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/27/e9/77/27e977edc78108c3391e0f6c68281066.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/27/e9/77/27e977edc78108c3391e0f6c68281066.jpg",
  },

  {
    id: 123,
    title: "Black Premium Streetwear Hoodie",
    description:
      "A premium black hoodie with a modern streetwear aesthetic and comfortable relaxed fit.",
    category: "fashion",

    price: 52000,
    actualPrice: 65000,
    discountPercentage: 20,

    rating: {
      rate: 4.7,
      count: 267,
    },

    stock: 8,

    tags: ["hoodie", "black", "streetwear", "premium"],
    brand: "StreetMode",
    sku: "FAS-STR-015",

    weight: 0.75,

    dimensions: {
      width: 39,
      height: 5,
      depth: 31,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 3-5 days",
    availabilityStatus: "In Stock",

    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black"],

    flashDeal: true,

    reviews: [
      {
        rating: 5,
        comment: "Great hoodie and very comfortable.",
        date: "2026-05-28T09:41:02.053Z",
        reviewerName: "Tom Harris",
        reviewerEmail: "tom@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-15T09:41:02.053Z",
      updatedAt: "2026-05-15T09:41:02.053Z",
      barcode: "89000000123",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/1e/ca/d7/1ecad7fa91ba8a4f693d314952e80312.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/1e/ca/d7/1ecad7fa91ba8a4f693d314952e80312.jpg",
  },

  {
    id: 124,
    title: "Cream Casual Fashion Shirt",
    description:
      "A soft cream casual shirt with a simple design suitable for everyday styling.",
    category: "fashion",

    price: 19500,
    actualPrice: 24000,
    discountPercentage: 18.75,

    rating: {
      rate: 4.5,
      count: 146,
    },

    stock: 19,

    tags: ["cream", "shirt", "casual", "fashion"],
    brand: "DailyWear",
    sku: "FAS-DAI-016",

    weight: 0.4,

    dimensions: {
      width: 33,
      height: 3,
      depth: 27,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream"],

    flashDeal: false,

    reviews: [
      {
        rating: 4,
        comment: "Simple and comfortable.",
        date: "2026-05-29T09:41:02.053Z",
        reviewerName: "Adam Young",
        reviewerEmail: "adam@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-16T09:41:02.053Z",
      updatedAt: "2026-05-16T09:41:02.053Z",
      barcode: "89000000124",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/1200x/43/63/f2/4363f208b410102ef3c90582eb23c7af.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/43/63/f2/4363f208b410102ef3c90582eb23c7af.jpg",
  },

  {
    id: 125,
    title: "Dark Grey Oversized Sweatshirt",
    description:
      "A dark grey oversized sweatshirt designed for relaxed everyday outfits and comfortable streetwear styling.",
    category: "fashion",

    price: 30000,
    actualPrice: 38000,
    discountPercentage: 21.05,

    rating: {
      rate: 4.6,
      count: 228,
    },

    stock: 14,

    tags: ["sweatshirt", "grey", "oversized", "streetwear"],
    brand: "UrbanStyle",
    sku: "FAS-URB-017",

    weight: 0.65,

    dimensions: {
      width: 38,
      height: 5,
      depth: 30,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 3-5 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Dark Grey"],

    flashDeal: true,

    reviews: [
      {
        rating: 5,
        comment: "Perfect oversized fit.",
        date: "2026-05-30T09:41:02.053Z",
        reviewerName: "Luke Martin",
        reviewerEmail: "luke@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-17T09:41:02.053Z",
      updatedAt: "2026-05-17T09:41:02.053Z",
      barcode: "89000000125",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/8d/2f/3f/8d2f3f3d73e4cbbb89270c18c41b9a66.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/8d/2f/3f/8d2f3f3d73e4cbbb89270c18c41b9a66.jpg",
  },

  {
    id: 126,
    title: "Luxury Navy Blue Blazer",
    description:
      "A sophisticated navy blue blazer designed for smart-casual and formal occasions.",
    category: "fashion",

    price: 78000,
    actualPrice: 95000,
    discountPercentage: 17.89,

    rating: {
      rate: 4.9,
      count: 154,
    },

    stock: 7,

    tags: ["blazer", "navy", "formal", "luxury"],
    brand: "EliteWear",
    sku: "FAS-ELI-018",

    weight: 0.9,

    dimensions: {
      width: 42,
      height: 7,
      depth: 33,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 4-6 days",
    availabilityStatus: "In Stock",

    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Navy Blue"],

    flashDeal: false,

    reviews: [
      {
        rating: 5,
        comment: "Excellent blazer.",
        date: "2026-05-31T09:41:02.053Z",
        reviewerName: "Frank James",
        reviewerEmail: "frank@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-18T09:41:02.053Z",
      updatedAt: "2026-05-18T09:41:02.053Z",
      barcode: "89000000126",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/1200x/29/7b/bb/297bbbd77fcf7bbac870aa19e813e8e8.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/29/7b/bb/297bbbd77fcf7bbac870aa19e813e8e8.jpg",
  },

  {
    id: 127,
    title: "Casual Black Cargo Pants",
    description:
      "Modern black cargo pants with a relaxed fit and practical pocket design for everyday streetwear.",
    category: "fashion",

    price: 26000,
    actualPrice: 32000,
    discountPercentage: 18.75,

    rating: {
      rate: 4.5,
      count: 189,
    },

    stock: 16,

    tags: ["cargo", "pants", "black", "streetwear"],
    brand: "StreetMode",
    sku: "FAS-STR-019",

    weight: 0.6,

    dimensions: {
      width: 35,
      height: 5,
      depth: 29,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 3-5 days",
    availabilityStatus: "In Stock",

    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Black"],

    flashDeal: true,

    reviews: [
      {
        rating: 5,
        comment: "Good quality cargo pants.",
        date: "2026-06-01T09:41:02.053Z",
        reviewerName: "Henry Scott",
        reviewerEmail: "henry@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-19T09:41:02.053Z",
      updatedAt: "2026-05-19T09:41:02.053Z",
      barcode: "89000000127",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/736x/b8/3f/08/b83f0833956a171c1793d0e7327a642a.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/736x/b8/3f/08/b83f0833956a171c1793d0e7327a642a.jpg",
  },

  {
    id: 128,
    title: "Premium White Formal Shirt",
    description:
      "A premium white formal shirt designed for professional outfits, events, and smart occasions.",
    category: "fashion",

    price: 34000,
    actualPrice: 42000,
    discountPercentage: 19.05,

    rating: {
      rate: 4.8,
      count: 241,
    },

    stock: 13,

    tags: ["formal", "shirt", "white", "premium"],
    brand: "ClassicFit",
    sku: "FAS-CLA-020",

    weight: 0.4,

    dimensions: {
      width: 34,
      height: 3,
      depth: 28,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 2-4 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White"],

    flashDeal: false,

    reviews: [
      {
        rating: 5,
        comment: "Excellent formal shirt.",
        date: "2026-06-02T09:41:02.053Z",
        reviewerName: "Robert Lee",
        reviewerEmail: "robert@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-20T09:41:02.053Z",
      updatedAt: "2026-05-20T09:41:02.053Z",
      barcode: "89000000128",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/1200x/c9/16/75/c91675bce20f20f7534e0a6c502ffa90.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/c9/16/75/c91675bce20f20f7534e0a6c502ffa90.jpg",
  },

  {
    id: 129,
    title: "Modern Black Casual Outfit",
    description:
      "A modern black casual outfit combining a clean design with a relaxed fit for everyday fashion.",
    category: "fashion",

    price: 44000,
    actualPrice: 55000,
    discountPercentage: 20,

    rating: {
      rate: 4.7,
      count: 219,
    },

    stock: 10,

    tags: ["black", "casual", "outfit", "modern"],
    brand: "UrbanStyle",
    sku: "FAS-URB-021",

    weight: 0.75,

    dimensions: {
      width: 38,
      height: 5,
      depth: 30,
    },

    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 3-5 days",
    availabilityStatus: "In Stock",

    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],

    flashDeal: true,

    reviews: [
      {
        rating: 5,
        comment: "Really nice casual outfit.",
        date: "2026-06-03T09:41:02.053Z",
        reviewerName: "Steven Moore",
        reviewerEmail: "steven@example.com",
      },
    ],

    returnPolicy: "14 days return policy",
    minimumOrderQuantity: 1,

    meta: {
      createdAt: "2026-05-21T09:41:02.053Z",
      updatedAt: "2026-05-21T09:41:02.053Z",
      barcode: "89000000129",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },

    images: [
      "https://i.pinimg.com/1200x/1c/32/68/1c326856475e03c8efec8b59b8b0aef6.jpg",
    ],

    thumbnail:
      "https://i.pinimg.com/1200x/1c/32/68/1c326856475e03c8efec8b59b8b0aef6.jpg",
  },
];

export default products;
