import React, { useEffect, useState } from 'react' // useEffect 추가



function Section04_List({ data }) {

  const [dataList, setDataList] = useState([data]);
  useEffect(() => {
    setDataList(data);  // data prop이 변경될 때마다 dataList 상태 업데이트
  }, [data]);

  return (
    <>
      <section className=''>
        <ul className='Section04_List'>
          {dataList.map((item) => (
            <li className='list' key={item._id}>
              <h3>ID : {item.category}</h3>
              <b>
                <img src={`${process.env.PUBLIC_URL}/img/section04/${item.img} `}></img>
              </b>

              <h2>{item.title}</h2>
              <p>{item.subTitle}</p>
              <p>{item.price}(단위)</p>
              <p>{item.test1}</p>



            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Section04_List