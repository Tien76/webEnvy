import React from "react";
import "./ListNewProduct.scss";

function ListNewProduct() {
  const listNewProduct = [
    {
      id: "N001",
      src: "https://product.hstatic.net/1000163008/product/11_2be96180c70342cb93029f39f7b3c678_large.jpg",
      name: "Brown Bear T-shirt",
      price: "139,000 VND",
      number: 0,
    },
    {
      id: "N002",
      src: "https://product.hstatic.net/1000163008/product/11_93e5782a88094407a76c8124e26f6c69_large.jpg",
      name: "Floral Dress With Bow",
      price: "270,000 VND",
      number: 0,
    },
    {
      id: "N003",
      src: "https://product.hstatic.net/1000163008/product/22_bc702e93a14f416bb6f0af12e192c4e1_large.jpg",
      name: "Style Shirts",
      price: "205,000 VND",
      number: 0,
    },
    {
      id: "N004",
      src: "https://product.hstatic.net/1000163008/product/11_9c8797db852142dcaaebe74e765ee1a5_large.jpg",
      name: "Moon Strap Tops",
      price: "105,000 VND",
      number: 0,
    },
  ];
  return (
    <div className="list-new-product">
      {listNewProduct.map((listNewProduct, index) => (
        <div>
          <div>
            <img className="product-img" src={listNewProduct.src} alt="item1" />
          </div>
          <div className="text-item-product">
            <div className="text-item">{listNewProduct.name}</div>
            <div className="text-price">{listNewProduct.price} VND</div>
            {/* <Button onClick={() => addToCart(index)}>Thêm vô giỏ hàng</Button>
            <div>Số lượng: {listNewProduct.number}</div> */}
          </div>
        </div>
      ))}
    </div>
  );
}
export default ListNewProduct;
