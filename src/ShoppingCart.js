import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import cart from "./cart-shopping.png";
import "./ShoppingCart.scss";

// items = [{id:1, count: 2}, {id:2, count: 0}]
// S= [1,2,3,4,5] => for(int i=0;i<6; i++) sum+= i;
function ShoppingCart({ count }) {
  //   const [sumCount, setSumCount] = useState(0);
  //   useEffect(() => {
  //     let sum = 0;
  //     // TODO: forEach -> tinh tong count trong tung phan tu
  //     items.forEach((product) => {
  //       sum += product.count;
  //     });

  //     setSumCount(sum);
  //   }, [items]);

  return (
    <div className="box-img-shopping">
      <img src={cart} alt="cart" />
      <div className="box-number-shopping">{count}</div>
    </div>
  );
}

export default ShoppingCart;
