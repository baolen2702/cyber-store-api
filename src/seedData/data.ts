import { faker } from '@faker-js/faker';
export const seedCategories = [
  {
    name: 'Vegetables',
    slug: 'vegetables',
    image: 'https://ik.imagekit.io/ngnp3wo0m/category-1.jpg',
    description:
      "Discover the freshest and tastiest vegetables at our online store! Our vegetable category offers a wide range of farm-fresh produce sourced directly from trusted growers. From crisp lettuce to vibrant bell peppers, our selection ensures quality and flavor in every bite. Whether you're looking for everyday staples or unique and exotic options, we have you covered. With convenient online ordering and prompt delivery, you can easily stock your fridge with nutritious and delicious vegetables. Explore our user-friendly website, read helpful descriptions, and make your selections with confidence. Elevate your meals with the goodness of our vegetables and experience the joy of healthy eating",
  },
  {
    name: 'Fruit',
    slug: 'fruit',
    image: 'https://ik.imagekit.io/ngnp3wo0m/category-2.jpg',
    description:
      "Welcome to our online store's fruit category! Explore a delightful assortment of fresh and juicy fruits sourced from trusted orchards and farmers. From succulent berries to tropical delights, our selection offers a burst of flavors and vibrant colors. Whether you're craving the sweetness of ripe mangoes or the refreshing tang of citrus, our fruits are handpicked for their exceptional quality and taste. With our easy-to-navigate website, you can quickly find your favorites, read detailed descriptions, and add them to your cart. Enjoy the convenience of doorstep delivery, bringing nature's finest and healthiest treats right to your doorstep.",
  },
  {
    name: 'Dried',
    slug: 'dried',
    image: 'https://ik.imagekit.io/ngnp3wo0m/category-4.jpg',
    description:
      "Welcome to our online store's dried category! Discover a delectable array of dried fruits, nuts, and seeds that are perfect for snacking, baking, or adding a nutritious twist to your meals. Our dried category offers a variety of flavorful options, including chewy dried mangoes, crunchy almonds, and nutrient-packed chia seeds. Each item is carefully sourced and dried to preserve its natural goodness and taste. Whether you're looking for a convenient on-the-go snack or ingredients for your culinary creations, our dried category has you covered. Enjoy the convenience of ordering online and have these wholesome delights delivered straight to your doorstep.",
  },
  {
    name: 'Juices',
    slug: 'juices',
    image: 'https://ik.imagekit.io/ngnp3wo0m/category-3.jpg',
    description:
      "Welcome to our online store's juices category! Quench your thirst and indulge in a refreshing variety of premium juices that are sure to tantalize your taste buds. From tropical blends to zesty citrus concoctions, our juices are crafted with the finest fruits and ingredients. Savor the natural flavors and vibrant colors as you sip on our carefully curated selection. Whether you're in need of a boost of vitamins or simply seeking a flavorful beverage, our juices are the perfect choice. With the convenience of online ordering, you can have these delicious and nutritious juices delivered right to your doorstep, ensuring a delightful and convenient experience.",
  },
];

export const seedProducts = [
  {
    name: 'Red Bell Pepper',
    slug: 'red-bell-pepper',
    description:
      'Vibrant and flavorful red bell pepper, perfect for adding color and taste to your dishes.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-23.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 4,
  },
  {
    name: 'Spinach Leaves',
    slug: 'spinach-leaves',
    description:
      'Fresh and nutritious spinach leaves, packed with vitamins and minerals.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-22.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 4,
  },
  {
    name: 'Sweet Corn Kernels',
    slug: 'sweet-corn-kernels',
    description:
      'Tender and sweet corn kernels, ideal for salads, soups, or as a side dish.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-21.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 4,
  },
  {
    name: 'Green Beans',
    slug: 'green-beans',
    description:
      'Crunchy and vibrant green beans, a versatile vegetable that complements various recipes.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-20.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 4,
  },
  {
    name: 'Cauliflower Florets',
    slug: 'cauliflower-florets',
    description:
      'Delicious and versatile cauliflower florets, perfect for roasting, steaming, or stir-frying.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-19.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 4,
  },
  {
    name: 'Zucchini Squash',
    slug: 'zucchini-squash',
    description:
      'Mild and tender zucchini squash, a versatile ingredient for both savory and sweet dishes.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-18.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 3,
  },
  {
    name: 'Cherry Tomatoes',
    slug: 'cherry-tomatoes',
    description:
      'Juicy and flavorful cherry tomatoes, great for salads, pasta dishes, or snacking.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-1.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 3,
  },
  {
    name: 'Baby Carrots',
    slug: 'baby-carrots',
    description:
      'Tender and sweet baby carrots, perfect for snacking, roasting, or adding to stews.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-16.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 3,
  },
  {
    name: 'Yellow Squash',
    slug: 'yellow-squash',
    description:
      'Mild and buttery yellow squash, a versatile vegetable that can be cooked in various ways.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-15.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 3,
  },
  {
    name: 'Brussels Sprouts',
    slug: 'brussels-sprouts',
    description:
      'Nutty and flavorful Brussels sprouts, delicious when roasted, sautéed, or added to salads.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-14.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 3,
  },
  {
    name: 'Purple Cabbage',
    slug: 'purple-cabbage',
    description:
      'Colorful and crunchy purple cabbage, great for salads, slaws, or stir-fries.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-12.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 2,
  },
  {
    name: 'Asparagus Spears',
    slug: 'asparagus-spears',
    description:
      'Tender and nutritious asparagus spears, delicious when grilled, roasted, or steamed.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-11.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 2,
  },
  {
    name: 'Butternut Squash',
    slug: 'butternut-squash',
    description:
      'Sweet and creamy butternut squash, perfect for soups, stews, or roasted as a side dish.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-10.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 2,
  },
  {
    name: 'Broccoli Florets',
    slug: 'broccoli-florets',
    description:
      'Nutritious and versatile broccoli florets, great for stir-fries, steaming, or adding to pasta dishes.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-9.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 2,
  },
  {
    name: 'Eggplant',
    slug: 'eggplant',
    description:
      'Versatile and meaty eggplant, ideal for grilling, roasting, or using in dishes like moussaka or ratatouille.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-8.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 2,
  },
  {
    name: 'Snow Peas',
    slug: 'snow-peas',
    description:
      'Sweet and crunchy snow peas, delicious when stir-fried, added to salads, or used in Asian-inspired dishes.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-7.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 1,
  },
  {
    name: 'Artichoke Hearts',
    slug: 'artichoke-hearts',
    description:
      'Tender and flavorful artichoke hearts, perfect for salads, dips, or adding to pasta dishes.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-5.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 1,
  },
  {
    name: 'Cucumber Slices',
    slug: 'cucumber-slices',
    description:
      'Refreshing and crisp cucumber slices, great for adding to salads, sandwiches, or as a healthy snack.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-3.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 1,
  },
  {
    name: 'Romaine Lettuce',
    slug: 'romaine-lettuce',
    description:
      'Crisp and flavorful romaine lettuce, perfect for salads, wraps, or as a base for sandwiches.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-2.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 1,
  },
  {
    name: 'Radishes',
    slug: 'radishes',
    description:
      'Peppery and crunchy radishes, great for salads, pickling, or adding a burst of flavor to dishes.',
    image: 'https://ik.imagekit.io/ngnp3wo0m/product-6.jpg',
    isActive: true,
    price: faker.number.int({ min: 5, max: 15 }),
    categoryId: 1,
  },
];

export const seedProductOptions = [
  {
    id: 1,
    name: 'Organic',
    productId: 1,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 2,
    name: 'Organic',
    productId: 2,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 3,
    name: 'Organic',
    productId: 3,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 4,
    name: 'Organic',
    productId: 4,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 5,
    name: 'Organic',
    productId: 5,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 6,
    name: 'Organic',
    productId: 6,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 7,
    name: 'Organic',
    productId: 7,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 8,
    name: 'Organic',
    productId: 8,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 9,
    name: 'Organic',
    productId: 9,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 10,
    name: 'Organic',
    productId: 10,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 11,
    name: 'Organic',
    productId: 11,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 12,
    name: 'Organic',
    productId: 12,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 13,
    name: 'Organic',
    productId: 13,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 14,
    name: 'Organic',
    productId: 14,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 15,
    name: 'Organic',
    productId: 15,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 16,
    name: 'Organic',
    productId: 16,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 17,
    name: 'Organic',
    productId: 17,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 18,
    name: 'Organic',
    productId: 18,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 19,
    name: 'Organic',
    productId: 19,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 20,
    name: 'Organic',
    productId: 20,
    createdAt: '2024-01-22T07:35:42.718Z',
  },
  {
    id: 21,
    name: 'Package size',
    productId: 1,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 22,
    name: 'Package size',
    productId: 2,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 23,
    name: 'Package size',
    productId: 3,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 24,
    name: 'Package size',
    productId: 4,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 25,
    name: 'Package size',
    productId: 5,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 26,
    name: 'Package size',
    productId: 6,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 27,
    name: 'Package size',
    productId: 7,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 28,
    name: 'Package size',
    productId: 8,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 29,
    name: 'Package size',
    productId: 9,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 30,
    name: 'Package size',
    productId: 10,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 31,
    name: 'Package size',
    productId: 11,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 32,
    name: 'Package size',
    productId: 12,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 33,
    name: 'Package size',
    productId: 13,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 34,
    name: 'Package size',
    productId: 14,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 35,
    name: 'Package size',
    productId: 15,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 36,
    name: 'Package size',
    productId: 16,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 37,
    name: 'Package size',
    productId: 17,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 38,
    name: 'Package size',
    productId: 18,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 39,
    name: 'Package size',
    productId: 19,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 40,
    name: 'Package size',
    productId: 20,
    createdAt: '2024-01-22T07:36:25.913Z',
  },
  {
    id: 41,
    name: 'Origin',
    productId: 1,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 42,
    name: 'Origin',
    productId: 2,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 43,
    name: 'Origin',
    productId: 3,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 44,
    name: 'Origin',
    productId: 4,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 45,
    name: 'Origin',
    productId: 5,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 46,
    name: 'Origin',
    productId: 6,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 47,
    name: 'Origin',
    productId: 7,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 48,
    name: 'Origin',
    productId: 8,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 49,
    name: 'Origin',
    productId: 9,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 50,
    name: 'Origin',
    productId: 10,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 51,
    name: 'Origin',
    productId: 11,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 52,
    name: 'Origin',
    productId: 12,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 53,
    name: 'Origin',
    productId: 13,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 54,
    name: 'Origin',
    productId: 14,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 55,
    name: 'Origin',
    productId: 15,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 56,
    name: 'Origin',
    productId: 16,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 57,
    name: 'Origin',
    productId: 17,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 58,
    name: 'Origin',
    productId: 18,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 59,
    name: 'Origin',
    productId: 19,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
  {
    id: 60,
    name: 'Origin',
    productId: 20,
    createdAt: '2024-01-22T07:38:55.492Z',
  },
];
export const seedProductVariants = [
  {
    id: 1,
    sku: 'f0cdd264-65f7-43b0-8c58-7d7a865ef51a',
    productId: 1,
    quantity: 21,
  },
  {
    id: 2,
    sku: 'f883ddab-197d-4419-8ef9-a2478430c43a',
    productId: 2,
    quantity: 14,
  },
  {
    id: 3,
    sku: '0b5898a7-f24d-4fc9-94cf-0e67e25ef9d7',
    productId: 3,
    quantity: 28,
  },
  {
    id: 4,
    sku: '43e14815-acdb-4e2e-beff-ca226872c3ff',
    productId: 4,
    quantity: 7,
  },
  {
    id: 5,
    sku: '1880e870-58d1-4224-9688-3b74a3777e3c',
    productId: 5,
    quantity: 26,
  },
  {
    id: 6,
    sku: '2b838b5d-c2fc-41df-ad64-27c0ee71782a',
    productId: 6,
    quantity: 21,
  },
  {
    id: 7,
    sku: '5148bfb8-4df6-4ea9-a972-f2e312ec0b55',
    productId: 7,
    quantity: 23,
  },
  {
    id: 8,
    sku: '143e8bd1-8357-44b2-aeca-e4e6540f0ca8',
    productId: 8,
    quantity: 25,
  },
  {
    id: 9,
    sku: '2ceff295-d1dc-491c-a1d5-74c1cd38a58c',
    productId: 9,
    quantity: 16,
  },
  {
    id: 10,
    sku: '64f44c8d-7243-409a-beee-e941355e2920',
    productId: 10,
    quantity: 27,
  },
  {
    id: 11,
    sku: '9fb2b308-544c-4334-a631-9f8f7f259aea',
    productId: 11,
    quantity: 11,
  },
  {
    id: 12,
    sku: '0e935d34-2404-45e5-a94b-b7a512a2b241',
    productId: 12,
    quantity: 3,
  },
  {
    id: 13,
    sku: 'd2abef0f-2049-46fc-8d8f-d3f1a7943178',
    productId: 13,
    quantity: 14,
  },
  {
    id: 14,
    sku: '3831143d-fc12-4fa5-b8da-b4ee1a98fb04',
    productId: 14,
    quantity: 5,
  },
  {
    id: 15,
    sku: 'eb32934c-1752-467a-b336-af0631119fe0',
    productId: 15,
    quantity: 18,
  },
  {
    id: 16,
    sku: '5c23749c-5de2-40c2-915f-1b4e4cdb339f',
    productId: 16,
    quantity: 1,
  },
  {
    id: 17,
    sku: 'fa9fd92c-e344-4799-b745-32c7c6b95886',
    productId: 17,
    quantity: 17,
  },
  {
    id: 18,
    sku: '7fae4777-6825-4f09-a8cc-38b6d574ed5e',
    productId: 18,
    quantity: 12,
  },
  {
    id: 19,
    sku: '30b6af27-ca49-4e2d-b748-38bb0eea0b98',
    productId: 19,
    quantity: 6,
  },
  {
    id: 20,
    sku: 'a9c50d64-e106-41c9-a448-50e32e5619e9',
    productId: 20,
    quantity: 20,
  },
  {
    id: 21,
    sku: 'f292da63-6e2c-45d4-8618-011a7e084c94',
    productId: 1,
    quantity: 23,
  },
  {
    id: 22,
    sku: 'badf7acb-5931-4930-823e-ddc53ee48318',
    productId: 2,
    quantity: 24,
  },
  {
    id: 23,
    sku: '2cc75edb-21b4-42ec-80f5-9c4b0755f5c4',
    productId: 3,
    quantity: 17,
  },
  {
    id: 24,
    sku: '24bc33a4-2456-4ca6-9c38-f5bc0a49f75d',
    productId: 4,
    quantity: 18,
  },
  {
    id: 25,
    sku: '26d7b224-deea-4d30-9bae-da8420b75447',
    productId: 5,
    quantity: 12,
  },
  {
    id: 26,
    sku: 'e13d17c7-2d3b-48ee-81fc-44b4c1b58d8c',
    productId: 6,
    quantity: 7,
  },
  {
    id: 27,
    sku: 'b89025a6-0ace-49bb-965d-adc6b2d48b64',
    productId: 7,
    quantity: 29,
  },
  {
    id: 28,
    sku: '8f4692b4-8860-4991-a9fa-92fecee73897',
    productId: 8,
    quantity: 12,
  },
  {
    id: 29,
    sku: 'dcc56342-a390-436a-bf99-2e74bdb60585',
    productId: 9,
    quantity: 30,
  },
  {
    id: 30,
    sku: '9d4c530a-7958-428e-9870-42918511fbb8',
    productId: 10,
    quantity: 2,
  },
  {
    id: 31,
    sku: '4e4c1e5d-9d63-410c-9b88-fc4095f7ea88',
    productId: 11,
    quantity: 3,
  },
  {
    id: 32,
    sku: '1f26a8cb-5198-4ab2-a346-1607892f0fba',
    productId: 12,
    quantity: 21,
  },
  {
    id: 33,
    sku: 'f7395c33-20dc-48a4-9339-2b735ce0d242',
    productId: 13,
    quantity: 27,
  },
  {
    id: 34,
    sku: 'd5272047-6463-4943-bf16-5220546812b0',
    productId: 14,
    quantity: 11,
  },
  {
    id: 35,
    sku: '143ee699-5301-45c9-8df3-d4b5a5fb175b',
    productId: 15,
    quantity: 28,
  },
  {
    id: 36,
    sku: '2d2f05bc-3b88-4700-8fb3-dfa4f6793889',
    productId: 16,
    quantity: 17,
  },
  {
    id: 37,
    sku: '2a98235e-ccc5-4ac0-8324-07ecc0d1c4ca',
    productId: 17,
    quantity: 24,
  },
  {
    id: 38,
    sku: '3f498606-5c10-4c6d-8072-80016ffb7efa',
    productId: 18,
    quantity: 3,
  },
  {
    id: 39,
    sku: '8531656c-33f5-4157-b1c0-974adf3cda83',
    productId: 19,
    quantity: 2,
  },
  {
    id: 40,
    sku: 'baf440ba-a52e-474e-8d57-e5adf9c1f986',
    productId: 20,
    quantity: 28,
  },
  {
    id: 41,
    sku: 'ebcb1928-f669-41cf-bbb1-5cdd2fcf80a7',
    productId: 1,
    quantity: 28,
  },
  {
    id: 42,
    sku: '1edd7189-d068-4a0d-96a6-2e527bdc8133',
    productId: 2,
    quantity: 25,
  },
  {
    id: 43,
    sku: '27813159-b134-4b4e-ada8-07e9bf87add2',
    productId: 3,
    quantity: 19,
  },
  {
    id: 44,
    sku: 'a904caab-57e9-487f-af98-12c456697435',
    productId: 4,
    quantity: 11,
  },
  {
    id: 45,
    sku: '58a4a5bb-2f9d-4745-ba2e-5fae3e9347fd',
    productId: 5,
    quantity: 22,
  },
  {
    id: 46,
    sku: '3f784585-75e5-47d7-b680-3e82a1490e62',
    productId: 6,
    quantity: 23,
  },
  {
    id: 47,
    sku: '30606727-6715-461c-8dd2-37c2893af18b',
    productId: 7,
    quantity: 2,
  },
  {
    id: 48,
    sku: '3cba2f2b-ddda-4cd3-82b4-83e98dec5784',
    productId: 8,
    quantity: 16,
  },
  {
    id: 49,
    sku: '6f393c1f-d01c-4491-8e0e-e6d9dbddec34',
    productId: 9,
    quantity: 6,
  },
  {
    id: 50,
    sku: '0bbea6d6-6c31-4cf6-b061-9b0dd7f7c69d',
    productId: 10,
    quantity: 13,
  },
  {
    id: 51,
    sku: '95c677f8-443d-493c-9fd7-010d6a8e85b2',
    productId: 11,
    quantity: 12,
  },
  {
    id: 52,
    sku: '86ef87e0-ad7a-48de-85f6-58b422d999e0',
    productId: 12,
    quantity: 14,
  },
  {
    id: 53,
    sku: 'd010eca2-0557-48d6-8263-875e40994113',
    productId: 13,
    quantity: 9,
  },
  {
    id: 54,
    sku: 'ae2d8dbb-4757-4980-9a39-e3e786f11c8e',
    productId: 14,
    quantity: 12,
  },
  {
    id: 55,
    sku: '23acb560-6c5f-4560-a2fa-40d8283ab663',
    productId: 15,
    quantity: 30,
  },
  {
    id: 56,
    sku: '0dbc2e00-0f54-4fab-9f05-59609299c33e',
    productId: 16,
    quantity: 25,
  },
  {
    id: 57,
    sku: '9700be3f-c18c-47cf-aa05-ae4f19b053a4',
    productId: 17,
    quantity: 8,
  },
  {
    id: 58,
    sku: '45e65643-6b67-4ef0-b6a6-ba744fca915c',
    productId: 18,
    quantity: 9,
  },
  {
    id: 59,
    sku: '2573d53f-f9e6-465f-ab98-c06be0b02acf',
    productId: 19,
    quantity: 27,
  },
  {
    id: 60,
    sku: 'debc1cf2-007d-4ecd-9f9e-a66b3838c2ad',
    productId: 20,
    quantity: 16,
  },
];

export const seedProductOptionValues = seedProductOptions
  .map((option, index) => {
    if (option.id <= 20) {
      return {
        name: '100%',
        optionId: option.id,
        productId: option.productId,
        variantId: seedProductVariants[index].id,
      };
    } else if (option.id <= 40) {
      return {
        name: 'Small',
        optionId: option.id,
        productId: option.productId,
        variantId: seedProductVariants[index].id,
      };
    } else {
      return {
        name: 'India',
        optionId: option.id,
        productId: option.productId,
        variantId: seedProductVariants[index].id,
      };
    }
  })
  .concat(
    seedProductOptions.map((option, index) => {
      if (option.id <= 20) {
        return {
          name: 'Non-organic',
          optionId: option.id,
          productId: option.productId,
          variantId: seedProductVariants[index].id,
        };
      } else if (option.id <= 40) {
        return {
          name: 'Medium',
          optionId: option.id,
          productId: option.productId,
          variantId: seedProductVariants[index].id,
        };
      } else {
        return {
          name: 'Japan',
          optionId: option.id,
          productId: option.productId,
          variantId: seedProductVariants[index].id,
        };
      }
    }),
  )
  .concat(
    seedProductOptions.map((option, index) => {
      if (option.id <= 20) {
        return {
          name: 'Mixed',
          optionId: option.id,
          productId: option.productId,
          variantId: seedProductVariants[index].id,
        };
      } else if (option.id <= 40) {
        return {
          name: 'Large',
          optionId: option.id,
          productId: option.productId,
          variantId: seedProductVariants[index].id,
        };
      } else {
        return {
          name: 'Korea',
          optionId: option.id,
          productId: option.productId,
          variantId: seedProductVariants[index].id,
        };
      }
    }),
  );
