import React, { useState } from "react";

const Artikel = () => {
  const [images, setImages] = useState([
    {
      image: "https://dagodreampark.co.id/images/ke_2.jpg",
      title: "Article 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      image:
        "https://i2.wp.com/blog.tripcetera.com/id/wp-content/uploads/2020/10/Danau-Toba-edited.jpg",
      title: "Article 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      image:
        "https://c4.wallpaperflare.com/wallpaper/776/248/857/mountain-pass-mountain-view-colorful-pegunungan-pemandangan-hd-wallpaper-preview.jpg",
      title: "Article 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      image:
        "https://p4.wallpaperbetter.com/wallpaper/773/567/742/for-desktop-nature-scenes-beautiful-scenery-1920x1080-wallpaper-preview.jpg",
      title: "Article 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      image:
        "https://divedigital.id/wp-content/uploads/2020/06/seljalandsfoss-air-terjun-islandia-1024x619.jpg",
      title: "Article 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      image:
        "https://winpreso.com/wp-content/uploads/2021/01/wallpaper-desktop-windows-10-pemandangan-pegunungan_02_2560x1440.jpg",
      title: "Article 6",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ]);
  return (
    <div className="uk-padding uk-text-left">
      <h3>Article</h3>
      <div className="uk-column-1-3 uk-child-width-expand@s" uk-grid>
        <div>
          {images.length !== 0 ? (
            images.map((data, index) => {
              const { image, title, content } = data;
              return (
                <div className="uk-card uk-card-default uk-border-rounded" key={index}>
                  <div className="uk-card-media-top">
                    <img src={image} className="img-sizing-article uk-border-rounded" />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title uk-text-bold">{title}</h3>
                    <p>{content}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Artikel;
