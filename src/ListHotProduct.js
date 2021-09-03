import React from "react";
import "./ListHotProduct.scss";

function ListHotProduct() {
  const listHotProduct = [
    {
      id: "H001",
      src: "https://product.hstatic.net/1000163008/product/11_036f24068fc7411ea82975e24d2829f8_large.jpg",
      name: "Baggy pants",
      price: "180,000 VND",
      number: 0,
    },
    {
      id: "H002",
      src: "https://product.hstatic.net/1000163008/product/33_f3426118432c4d3da7f361fa6c1005fb_large.jpg",
      name: "Chocolate T-shirt",
      price: "149,000 VND",
      number: 0,
    },
    {
      id: "H003",
      src: "https://product.hstatic.net/1000163008/product/33_07c08aed14c847dfbb23f1e3040dc418_large.jpg",
      name: "Wool Coats",
      price: "220,000 VND",
      number: 0,
    },
    {
      id: "H004",
      src: "https://product.hstatic.net/1000163008/product/120148304_2749107755358168_3532179987884275783_o_aedde039fd6d49aa8b2a13577a043419_large.jpg",
      name: "Cotton Baggy Trousers",
      price: "205,000 VND",
      number: 0,
    },
    {
      id: "H005",
      src: "https://product.hstatic.net/1000163008/product/5_1b3f24d2c01941fe838357f5999ce880_large.jpg",
      name: "Traditional shirt",
      price: "155,000 VND",
      number: 0,
    },
    {
      id: "H006",
      src: "https://product.hstatic.net/1000163008/product/1_781b05627c4f47e5b49809a1b8bd413d_large.jpg",
      name: "Wool Jacket",
      price: "190,000 VND",
      number: 0,
    },
    {
      id: "H007",
      src: "https://product.hstatic.net/1000163008/product/31ffc43cb5ba41308c54526d992842b6_9b507e28606e4bbb82079ef2421f07a7_large.jpg",
      name: "Floating Checkered",
      price: "240,000 VND",
      number: 0,
    },
    {
      id: "H008",
      src: "https://product.hstatic.net/1000163008/product/1_da7537446534480f922f0ec69faefc0a_large.jpg",
      name: "Linen Shirt",
      price: "195,000 VND",
      number: 0,
    },
  ];

  return (
    <div className="list-hot-product">
      {listHotProduct.map((listHotProduct, index) => (
        <div>
          <div>
            <img
              className="product-img"
              src={listHotProduct.src}
              alt="item-hot"
            />
          </div>
          <div className="text-item-product">
            <div className="text-item">{listHotProduct.name}</div>
            <div className="text-price">{listHotProduct.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ListHotProduct;
