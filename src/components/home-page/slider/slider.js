import React, { useState } from "react";
const SliderImage = () => {
  const [images, setImages] = useState([
    {
      image: "https://dagodreampark.co.id/images/ke_2.jpg",
      title: "Mountain"
    },
    {
      image:
        "https://i2.wp.com/blog.tripcetera.com/id/wp-content/uploads/2020/10/Danau-Toba-edited.jpg",
      title: "Sunset in a Village"
    },
    {
      image: "https://preview.redd.it/nhk8jg3psng71.jpg?auto=webp&s=0614423637af7440921c3932759d8a90a24981fb",
      title: "Moonlight Lake"
    },
    {
      image:
        "https://p4.wallpaperbetter.com/wallpaper/859/458/405/beautiful-yellow-chrysanthemum-flowers-wallpaper-hd-with-high-quality-1920%C3%971080-wallpaper-preview.jpg",
      title: "Krisan Flower"
    },
    {
      image: "https://p4.wallpaperbetter.com/wallpaper/554/396/874/different-flowers-1080p-yellow-and-red-tulips-wallpaper-preview.jpg",
      title: "Field of Tulips"
    },
  ]);
  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider="sets: true, autoplay: true"
    >
      <ul className="uk-slider-items uk-grid uk-card uk-card-default">
        {images.length !== 0 ? (
          images.map((data, index) => {
            const { image, title } = data;
            return (
              <div className="uk-padding-small" key={index}>
                <div className="uk-card-header">
                  <h3 className="uk-card-title uk-text-center">{title}</h3>
                </div>
                <div className="uk-card-body">
                  <img
                    className="img-sizing"
                    src={image}
                    width="400"
                    height="300"
                    alt=""
                  />
                </div>
              </div>
              // <li className="">
              //   <div className="uk-card-body">
              //   </div>
              // </li>
            );
          })
        ) : (
          <div></div>
        )}
      </ul>
    </div>
  );
};

export default SliderImage;
