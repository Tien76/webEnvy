import { useState } from "react";
import Layout, { Header } from "antd/lib/layout/layout";
// import Slider from "react-slick";
import { Button } from "antd";
import ListBarPicture from "./listBarPicture.js";
import ShoppingCart from "./ShoppingCart.js";
import ListNewProduct from "./ListNewProduct.js";
import ListHotProduct from "./ListHotProduct.js";
import BarHeader from "./BarHeader.js";
import "./envyShop.scss";

// import logoEnvy from "./logoEnvy.png";
// TODO: map, forEch

function EnvyShop() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   arrows: false,
  // };
  const [count, setCount] = useState(0);
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     src: "https://product.hstatic.net/1000163008/product/11_9c8797db852142dcaaebe74e765ee1a5_large.jpg",
  //     name: "San pham 1",
  //     price: 1232,
  //     number: 0,
  //   },

  //   {
  //     id: 2,
  //     src: "https://product.hstatic.net/1000163008/product/11_9c8797db852142dcaaebe74e765ee1a5_large.jpg",
  //     name: "San pham 222",
  //     price: 5654,
  //     number: 0,
  //   },
  // ]);

  // const addToCart = (idx) => {
  //   setCount(count + 1);

  //   let newProducts = [...products]; // spread operation.. copy array in nodejs
  //   newProducts[idx].number += 1;
  //   setProducts(newProducts);
  // };

  return (
    <div className="EnvyShop">
      <Layout>
        <div className="main">
          <Header className="header">
            <div className="logoEnvy">
              <img
                className="header-img-logo"
                src="http://theme.hstatic.net/1000163008/1000348202/14/logo.png?v=493"
                alt="logoEnvy"
              />
            </div>
            <div className="header-login-logout">
              <div className="login-logout">
                <div className="text-bold">Login</div>
                <div>or</div>
                <div className="text-bold">Create an account</div>
              </div>
              <div className="search-and-cart">
                <div className="search">
                  <div className="search-text">What are you looking for?</div>
                </div>
                <div className="cart">
                  <div class="cart-name">Cart</div>
                </div>
                <div>
                  <ShoppingCart count={count} />
                </div>
              </div>
            </div>
          </Header>
          <body className="main-body">
            <div className="display-bar-header">
              <BarHeader />
            </div>
            <div className="display-top-body-header">
              <ListBarPicture />
            </div>
            <div className="border-to-product" />
            <div className="text-block">NEW PRODUCT</div>
            <div className="new-item">
              <div className="block-new-item">
                <ListNewProduct />
              </div>
            </div>
            <div className="border-to-product" />
            <div className="text-block">HOT PRODUCT</div>
            <div className="new-item">
              <div className="block-new-item">
                <ListHotProduct />
              </div>
            </div>
          </body>
        </div>
      </Layout>
    </div>
  );
}
export default EnvyShop;
