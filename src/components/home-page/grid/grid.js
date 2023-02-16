import React, { useState } from "react";

const GridImage = () => {
  const [images, setImages] = useState([
    {
      image: "https://dagodreampark.co.id/images/ke_2.jpg",
    },
    {
      image:
        "https://i2.wp.com/blog.tripcetera.com/id/wp-content/uploads/2020/10/Danau-Toba-edited.jpg",
    },
    {
      image: "https://c4.wallpaperflare.com/wallpaper/776/248/857/mountain-pass-mountain-view-colorful-pegunungan-pemandangan-hd-wallpaper-preview.jpg",
    },
    {
      image:
        "https://p4.wallpaperbetter.com/wallpaper/773/567/742/for-desktop-nature-scenes-beautiful-scenery-1920x1080-wallpaper-preview.jpg",
    },
    {
      image:
        "https://divedigital.id/wp-content/uploads/2020/06/seljalandsfoss-air-terjun-islandia-1024x619.jpg",
    },
    {
      image:
        "https://winpreso.com/wp-content/uploads/2021/01/wallpaper-desktop-windows-10-pemandangan-pegunungan_02_2560x1440.jpg",
    },
  ]);
  return (
    <>
      <div className="uk-column-1-3@l uk-padding uk-text-center " uk-grid>
        <div>
          {images.length !== 0 ? (
            images.map((data, index) => {
              const { image } = data;
              return (
                <div className="uk-card uk-padding-small" key={index}>
                  <img
                    className="img-sizing"
                    src={image}
                    width="300"
                    height="400"
                    alt=""
                  />
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default GridImage;
