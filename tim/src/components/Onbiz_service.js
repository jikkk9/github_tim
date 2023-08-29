import React from 'react'

export const Onbiz_service = () => {
  const services = [
    { id: 1, name: "Ellipse 21", description: "쾌적한 환경" },
    { id: 2, name: "Ellipse 22", description: "카페테리아" },
    { id: 3, name: "Ellipse 23", description: "도서관" },
    { id: 3, name: "Ellipse 24", description: "스튜디오" },
    { id: 3, name: "Ellipse 25", description: "지문인식" },
    { id: 3, name: "Ellipse 26", description: "택배" },
    // ... 여기에 추가적인 서비스 항목들을 넣을 수 있습니다.
  ];
  const Onbiz_services = [
    { id: 1, number: "1인사무실", title: "서울강남점 0613호", sub_title: "강남점 | 0613호", img: "Rectangle 92", description: "계약완료" },

    { id: 2, number: "3인사무실", title: "서울 성수점 4111호", sub_title: "성수점 | 4111호", img: "Rectangle 93", description: "비었음" },

    { id: 3, number: "5인사무실", title: "서울 강남점 1115호", sub_title: "강남점 | 0613호", img: "Rectangle 94", description: "비었음" },

  ];

  return (
    <div className='Onbiz_service'>
      <div className='img_box'>
        <img
          src={`${process.env.PUBLIC_URL}/img/Onbiz_service/Rectangle 87.png`}
        ></img>
      </div>
      <div className='Onbiz_service_box inner'>
        <h2>온비즈 오피스 제공 서비스</h2>
        <ul>
          {services.map(service => (
            <li key={service.id}>
              <div><img src={`${process.env.PUBLIC_URL}/img/Onbiz_service/${service.name}.png`}></img></div>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='Onbiz_service_box inner'>
        <h2>온비즈 오피스 사무실</h2>
        <ul className='Onbiz_list'>
          {Onbiz_services.map(Onbiz_services => (
            <li key={Onbiz_services.id}>
              <span className='Onbiz_number'>{Onbiz_services.number}</span>
              <h2>{Onbiz_services.title}</h2>
              <h4>{Onbiz_services.sub_title}</h4>
              <div><img src={`${process.env.PUBLIC_URL}/img/Onbiz_service/${Onbiz_services.img}.png`}></img></div>
              <p>{Onbiz_services.description}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className='Onbiz_service_box inner'>
        <h2>온비즈 오피스 사무실</h2>
        <ul className='Onbiz_list'>
          {Onbiz_services.map(Onbiz_services => (
            <li key={Onbiz_services.id}>
              <span className='Onbiz_number'>{Onbiz_services.number}</span>
              <h2>{Onbiz_services.title}</h2>
              <h4>{Onbiz_services.sub_title}</h4>
              <div><img src={`${process.env.PUBLIC_URL}/img/Onbiz_service/${Onbiz_services.img}.png`}></img></div>
              <p>{Onbiz_services.description}</p>
            </li>
          ))}
        </ul>
      </div> */}

    </div>
  )
}

export default Onbiz_service;
