import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

const data = {
  users: [
    {
      name: "Ananya",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John Doe",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: "Nike Slim shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg", // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      // _id: '2',
      name: "Adidas Fit Shirt",
      slug: "adidas-fit-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 250,
      countInStock: 0,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: '3',
      name: "Nike Slim Pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      // _id: '4',
      name: "Adidas Fit Pant",
      slug: "adidas-fit-pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};

const __dirname = path.resolve();
let dataset = fs.readFileSync(path.resolve(__dirname, "dataset.json"), {
  encoding: "utf8",
  flag: "r",
});

dataset = JSON.parse(dataset);

dataset.forEach((item, idx) => {
  let label = item.annotation[0].label[0];
  data.products.push({
    name: "Nice " + label ?? "Item" + " " + idx,
    slug: "item-" + idx + "-" + Date.now(),
    category: label,
    image: "/images/p" + (Math.floor(Math.random() * 3) + 1) + ".jpg",
    price: Math.floor(Math.random() * 100) + 10,
    countInStock: 5,
    brand: "Puma",
    rating: Math.floor(Math.random() * 4) + 0.5,
    numReviews: Math.floor(Math.random() * 100),
    description: "high quality product",
  });
});

export default data;
