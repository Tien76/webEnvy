import React from "react";
import Slider from "react-slick";
import "./listBarPicture.scss";

function ListBarPicture() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const arrBarPicture = [
    {
      src: "https://theme.hstatic.net/1000163008/1000348202/14/slide_5.jpg?v=493",
      alt: "display",
    },
    {
      src: "https://theme.hstatic.net/1000163008/1000348202/14/slide_4.jpg?v=493",
      alt: "display",
    },
    {
      src: "https://theme.hstatic.net/1000163008/1000348202/14/slide_2.jpg?v=493",
      alt: "display",
    },
    {
      src: "https://theme.hstatic.net/1000163008/1000348202/14/slide_3.jpg?v=493",
      alt: "display",
    },
  ];
  return (
    <div className="list-bar-picture">
      <Slider {...settings}>
        {arrBarPicture.map((arrBarPicture, index) => (
          <div key={`image__${String(index)}`}>
            <img src={arrBarPicture.src} alt={arrBarPicture.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default ListBarPicture;
