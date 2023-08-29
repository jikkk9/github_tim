import React, { useState, useEffect, useRef } from "react";

function Section02() {
  const stickerRef1 = useRef(null);
  const stickerRef2 = useRef(null);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imgStyle = {
    transform: `translateY(${-scrollY * 0.1}px)`,
    transition: "transform 0.3s"
  };

  return (
    <div className="Section02 inner">
      <div className="title">
        <span className="titleSticker">
          <img src="/img/section02/gliter.png" alt="" />
        </span>
        <h2>시작을 위한 최고의 선택</h2>
        <h2>Onbiz Office</h2>
        <span className="line"></span>
      </div>
      <div className="sectionBoxWrap">
        <div className="sectionBox box01">
          <div className="imgBox">
            <h2>01</h2>
            <span className="sticker" ref={stickerRef1}>
              <img style={imgStyle} src="/img/section02/icon1.png" alt="" />
            </span>
            <div className="imgBoxCon">
              <img src="/img/section02/boxImg2.png" alt="" />
            </div>
          </div>
          <div className="textBox">
            <h2>
              비상주 오피스에 <br /> 관한 텍스트 첨부
            </h2>
            <p>
              비상주 오피스에 관한 설명을 첨부합니다. <br />
              관련된 가벼운 설명을 합니다
            </p>
            <button>자세히 보기</button>
          </div>
        </div>
        <div className="sectionBox2 box02">
          <div className="textBox">
            <h2>
              상주 오피스에 <br /> 관한 텍스트 첨부
            </h2>
            <p>
              상주 오피스에 관한 설명을 첨부합니다. <br />
              관련된 가벼운 설명을 합니다
            </p>
            <button>자세히 보기</button>
          </div>
          <div className="imgBox">
            <h2>02</h2>
            <span className="sticker2" ref={stickerRef2}>
              <img style={imgStyle} src="/img/section02/icon2.png" alt="" />
            </span>
            <div className="imgBoxCon">
              <img src="/img/section02/boxImg1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section02;
