import React, { useEffect } from 'react';

function Section07() {
  useEffect(() => {
    var copy1 = document.querySelector('.logos-slide1').cloneNode(true);
    document.querySelector(".logos1").appendChild(copy1);

    var copy2 = document.querySelector('.logos-slide2').cloneNode(true);
    document.querySelector(".logos2").appendChild(copy2);

    var copy3 = document.querySelector('.logos-slide3').cloneNode(true);
    document.querySelector(".logos3").appendChild(copy3);
  }, []);


  const images = [
    "/img/section07/image (1).png",
    "/img/section07/image (2).png",
    "/img/section07/image (3).png",
    "/img/section07/image (4).png",
    "/img/section07/image (5).png",
    "/img/section07/image (6).png",
    "/img/section07/image (7).png",
    "/img/section07/image (8).png",
    "/img/section07/image (9).png",
    "/img/section07/image (10).png",
  ];

  const images01 = [
    "/img/section07/image (11).png",
    "/img/section07/image (12).png",
    "/img/section07/image (13).png",
    "/img/section07/image (14).png",
    "/img/section07/image (15).png",
    "/img/section07/image (16).png",
    "/img/section07/image (17).png",
    "/img/section07/image (18).png",
    "/img/section07/image (19).png",
    "/img/section07/image (20).png",
  ];

  const images02 = [
    "/img/section07/image (21).png",
    "/img/section07/image (22).png",
    "/img/section07/image (23).png",
    "/img/section07/image (24).png",
    "/img/section07/image (25).png",
    "/img/section07/image (26).png",
    "/img/section07/image (27).png",
    "/img/section07/image (28).png",
    "/img/section07/image (29).png",
    "/img/section07/image (30).png",
  ];


  return (
    <div className='Section07'>
      <div className="logos1">
        <div className="logos-slide1">
          {images.map((img, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}${img}`}
              className="staticImage"
              alt={`Static Image ${index}`}
            />
          ))}
        </div>
      </div>

      <div className="logos2">
        <div className="logos-slide2">
          {images01.map((img, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}${img}`}
              className="staticImage02"
              alt={`Static Image ${index}`}
            />
          ))}
        </div>
      </div>

      <div className="logos3">
        <div className="logos-slide3">
          {images02.map((img, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}${img}`}
              className="staticImage03"
              alt={`Static Image ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section07;
