const { urlencoded } = require("express");

const javahut = [
  {
    id: 1,
    name: "House Coffee",
    img: urlencoded(
      "https://globalassets.starbucks.com/assets/041502ea2476446ba1118a7fe18d4dcb.jpg?impolicy=1by1_wide_topcrop_630"
    ),
    price: "$4.99",
    description: "True North Blend Blonde Roast",
  },
  {
    id: 2,
    name: "Espresso",
    img: urlencoded(
      "https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_topcrop_630"
    ),
    price: "$4.99",
    description: "Espresso",
  },
  {
    id: 3,
    name: "Latte",
    img: urlencoded(
      "https://globalassets.starbucks.com/assets/284e1571faa748f2889d0b566b71d578.jpg?impolicy=1by1_wide_topcrop_630"
    ),
    price: "$4.99",
    description: "Cinnamon Dolce Latte",
  },
  {
    id: 4,
    name: "Cold Coffe",
    img: urlencoded(
      "https://globalassets.starbucks.com/assets/103b2b745f4848f884b793696a4573b6.jpg?impolicy=1by1_wide_topcrop_630"
    ),
    price: "$4.99",
    description: "Cold Brew Coffee",
  },
  {
    id: 5,
    name: "Iced Latte",
    img: urlencoded(
      "https://globalassets.starbucks.com/assets/b5ee0554cdd64959a86530922cea7991.jpg?impolicy=1by1_wide_topcrop_630"
    ),
    price: "$4.99",
    description: "Iced Cinnamon Dolce",
  },
  {
    id: 6,
    name: "Iced Mocha",
    img: urlencoded(
      "https://globalassets.starbucks.com/assets/c71ba8397a184c10ab8cb54ef9545c5b.jpg?impolicy=1by1_wide_topcrop_630"
    ),
    price: "$4.99",
    description: "ICed Caffè Mocha",
  },
  {
    id: 7,
    name: "Chocolate Cookie",
    img: urlencoded(
      "https://globalassets.starbucks.com/assets/3665372e07d04c9bb9ee87af493be1bb.jpg?impolicy=1by1_medium_630"
    ),
    price: "$3.99",
    description: "Chocolate Chunk Cookie",
  },
  {
    id: 8,
    name: "Chocolate Brownie",
    img: urlencoded(
      "https://globalassets.starbucks.com/assets/bba99de9ec2e4588829808173b051fb3.jpg?impolicy=1by1_medium_630"
    ),
    price: "$3.99",
    description: "Double Chocolate Chunk Brownie",
  },
  {
    id: 9,
    name: "Cheese Danish",
    img: urlencoded(
      "https://globalassets.starbucks.com/assets/c6eb8f0c53924ebc9d2f388d9fc90e69.jpg?impolicy=1by1_medium_630"
    ),
    price: "$2.99",
    description: "Cheese Danish",
  },
  {
    id: 10,
    name: "Banana Loaf",
    img: urlencoded(
      "https://globalassets.starbucks.com/assets/267726a222614a75afc344274c0b7434.jpg?impolicy=1by1_medium_630"
    ),
    price: "$3.99",
    description: "Banana Loaf",
  },
  {
    id: 11,
    name: "Blueberry Muffin",
    img: urlencoded(
      "https://globalassets.starbucks.com/assets/d29f86c5b44f4c719aca0d677a23c657.jpg?impolicy=1by1_medium_630"
    ),
    price: "$3.99",
    description: "Blueberry Muffin with Yogurt & Honey",
  },
  {
    id: 12,
    name: "Butter Croissant",
    img: urlencoded(
      "https://globalassets.starbucks.com/assets/69c037c0a13741f79917262fd5439637.jpg?impolicy=1by1_medium_630"
    ),
    price: "$2.99",
    description: "Butter Croissant",
  },
];

function getAll() {
  return javahut;
}

function getOne(id) {
  const product = javahut.find((i) => i.id === parseInt(id));
  return product;
}
exports.module = {
  getAll,
  getOne,
};
