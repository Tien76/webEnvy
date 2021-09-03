import { useState } from "react";
import Layout, { Header } from "antd/lib/layout/layout";
import Slider from "react-slick";
import { Button } from "antd";
import ShoppingCart from "./ShoppingCart.js";
import "./envyShop.scss";

// import logoEnvy from "./logoEnvy.png";
// TODO: map, forEch

function EnvyShop() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 1,
      src: "https://product.hstatic.net/1000163008/product/11_9c8797db852142dcaaebe74e765ee1a5_large.jpg",
      name: "San pham 1",
      price: 1232,
      number: 0,
    },

    {
      id: 2,
      src: "https://product.hstatic.net/1000163008/product/11_9c8797db852142dcaaebe74e765ee1a5_large.jpg",
      name: "San pham 222",
      price: 5654,
      number: 0,
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const addToCart = (idx) => {
    setCount(count + 1);

    let newProducts = [...products]; // spread operation.. copy array in nodejs
    newProducts[idx].number += 1;
    setProducts(newProducts);
  };

  return (
    <div className="EnvyShop">
      <Layout style={{ minHeight: "100vh" }}>
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
            <nav className="bar">
              <div>SHIRT</div>
              <div>PANTS & SKIRTS</div>
              <div>UNDERWEAR</div>
              <div>STORE</div>
              <div>SEWING WORKSHOP</div>
              <div>ABOUT ENVY SHOP</div>
              <div>FEEDBACK</div>
              <div>ORDER LOOKUP</div>
              <div>MORE</div>
            </nav>
            <Slider {...settings}>
              <div>
                <h3>
                  <img
                    className="display-top-body-header"
                    src="https://theme.hstatic.net/1000163008/1000348202/14/slide_5.jpg?v=493"
                    alt="display"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    className="display-top-body-header"
                    src="https://theme.hstatic.net/1000163008/1000348202/14/slide_4.jpg?v=493"
                    alt="display"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    className="display-top-body-header"
                    src="https://theme.hstatic.net/1000163008/1000348202/14/slide_2.jpg?v=493"
                    alt="display"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    className="display-top-body-header"
                    src="https://theme.hstatic.net/1000163008/1000348202/14/slide_3.jpg?v=493"
                    alt="display"
                  />
                </h3>
              </div>
            </Slider>
            <div className="border-to-product" />
            <div className="text-block">NEW PRODUCT</div>
            <div className="new-item">
              <div className="block-new-item">
                {products.map((product, index) => (
                  <div>
                    <div>
                      <img
                        className="product-img"
                        src={product.src}
                        alt="item1"
                      />
                    </div>
                    <div className="text-item-product">
                      <div className="text-item">{product.name}</div>
                      <div className="text-price">{product.price} VND</div>
                      <Button onClick={() => addToCart(index)}>
                        Thêm vô giỏ hàng
                      </Button>
                      <div>Số lượng: {product.number}</div>
                    </div>
                  </div>
                ))}

                <div>
                  <div>
                    <img
                      className="product-img"
                      src="https://product.hstatic.net/1000163008/product/11_2be96180c70342cb93029f39f7b3c678_large.jpg"
                      alt="item1"
                    />
                  </div>
                  <div className="text-item-product">
                    <div className="text-item">Moon Strap Tops</div>
                    <div className="text-price">105,000 VND</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      className="product-img"
                      src="https://product.hstatic.net/1000163008/product/11_93e5782a88094407a76c8124e26f6c69_large.jpg"
                      alt="item1"
                    />
                  </div>
                  <div className="text-item-product">
                    <div className="text-item">Floral Dress With Bow</div>
                    <div className="text-price">270,000 VND</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      className="product-img"
                      src="https://product.hstatic.net/1000163008/product/22_bc702e93a14f416bb6f0af12e192c4e1_large.jpg"
                      alt="item1"
                    />
                  </div>
                  <div className="text-item-product">
                    <div className="text-item">Style Shirts</div>
                    <div className="text-price">205,000 VND</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-to-product" />
            <div className="text-block">HOT PRODUCT</div>
            <div className="new-item">
              <div className="block-new-item">
                <div>
                  <div>
                    <img
                      className="product-img"
                      src="https://product.hstatic.net/1000163008/product/11_036f24068fc7411ea82975e24d2829f8_large.jpg"
                      alt="item1"
                    />
                  </div>
                  <div className="text-item-product">
                    <div className="text-item">Baggy pants</div>
                    <div className="text-price">180,000 VND</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      className="product-img"
                      src="https://product.hstatic.net/1000163008/product/1_781b05627c4f47e5b49809a1b8bd413d_large.jpg"
                      alt="item1"
                    />
                  </div>
                  <div className="text-item-product">
                    <div className="text-item">Pineapple vest collar shirt</div>
                    <div className="text-price">165,000 VND</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      className="product-img"
                      src="https://product.hstatic.net/1000163008/product/33_07c08aed14c847dfbb23f1e3040dc418_large.jpg"
                      alt="item1"
                    />
                  </div>
                  <div className="text-item-product">
                    <div className="text-item">Wool Coats</div>
                    <div className="text-price">220,000 VND</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      className="product-img"
                      src="https://product.hstatic.net/1000163008/product/120148304_2749107755358168_3532179987884275783_o_aedde039fd6d49aa8b2a13577a043419_large.jpg"
                      alt="item1"
                    />
                  </div>
                  <div className="text-item-product">
                    <div className="text-item">Cotton Baggy Trousers</div>
                    <div className="text-price">205,000 VND</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      className="product-img"
                      src="https://product.hstatic.net/1000163008/product/5_1b3f24d2c01941fe838357f5999ce880_large.jpg"
                      alt="item1"
                    />
                  </div>
                  <div className="text-item-product">
                    <div className="text-item">Traditional shirt</div>
                    <div className="text-price">155,000 VND</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      className="product-img"
                      src="https://product.hstatic.net/1000163008/product/1_781b05627c4f47e5b49809a1b8bd413d_large.jpg"
                      alt="item1"
                    />
                  </div>
                  <div className="text-item-product">
                    <div className="text-item">Wool Jacket</div>
                    <div className="text-price">190,000 VND</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      className="product-img"
                      src="https://product.hstatic.net/1000163008/product/31ffc43cb5ba41308c54526d992842b6_9b507e28606e4bbb82079ef2421f07a7_large.jpg"
                      alt="item1"
                    />
                  </div>
                  <div className="text-item-product">
                    <div className="text-item">Floating Checkered</div>
                    <div className="text-price">240,000 VND</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      className="product-img"
                      src="https://product.hstatic.net/1000163008/product/1_da7537446534480f922f0ec69faefc0a_large.jpg"
                      alt="item1"
                    />
                  </div>
                  <div className="text-item-product">
                    <div className="text-item">Linen Shirt</div>
                    <div className="text-price">195,000 VND</div>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </div>
      </Layout>
    </div>
  );
}
export default EnvyShop;
