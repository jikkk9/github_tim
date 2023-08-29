import React, { useEffect, useState } from "react"; // useEffect 추가

function Section04_List({ data, selectedCategory }) {
  // 이미지에 대한 조건부 스타일
  const imageStyle =
    selectedCategory === "books" ? { objectFit: "contain" } : {};

  const [dataList, setDataList] = useState([data]);
  useEffect(() => {
    setDataList(data); // data prop이 변경될 때마다 dataList 상태 업데이트
  }, [data]);

  return (
    <>
      <section className="Section04_List">
        <ul className="Section04_List_UL">
          {dataList.map((item) => (
            <li className="list" key={item._id}>
              {/* <h3>ID : {item.category}</h3> */}
              <b>
                <img
                  style={imageStyle}
                  src={`${process.env.PUBLIC_URL}/img/section04/${item.img} `}
                ></img>
              </b>

              <h2>{item.title}</h2>
              <p className="listSubTitle">{item.subTitle}</p>
              <p className="listPrice">{item.price}</p>
              <p>{item.test1}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Section04_List;
