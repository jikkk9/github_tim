import React, { useState } from 'react';
import Section04_List from './Section04_List';

function Section04({ data }) {
  const [dataList, setDataList] = useState(data.filter(item => item.category === 'retiringroom'));

  const [selectedCategory, setSelectedCategory] = useState('retiringroom');

  const handleSortChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    switch (category) {
      case 'meetingroom':
        setDataList(data.filter(item => item.category === 'meetingroom'));
        break;
      case 'office':
        setDataList(data.filter(item => item.category === 'office'));
        break;
      case 'retiringroom':
        setDataList(data.filter(item => item.category === 'retiringroom'));
        break;
      case 'books':
        setDataList(data.filter(item => item.category === 'books'));
        break;
      default:
        setDataList([...data]);
        break;
    }
  };

  // 조건부 스타일링을 위한 객체
  const booksStyle = {
    // 다른 스타일 속성 추가 가능
    objectFit: 'contain',
    objectPosition: 'left center',
  };


  return (

    <div className='Section04 inner' style={selectedCategory === 'books' ? booksStyle : {}}>
      <div className='left'>
        <div>
          <h2>지금 </h2>

          <div className="select-wrapper">
            <select className="select" onChange={handleSortChange}>
              <option value="retiringroom">휴식공간</option>
              <option value="meetingroom">회의실</option>
              <option value="office">사무실</option>
              <option value="retiringroom">휴식공간</option>
              <option value="books">도서관</option>
            </select>
          </div>

          <h2>은</h2>
        </div>
        <h2>온비즈 오피스 입니다</h2>
        <span>
          <img src={`${process.env.PUBLIC_URL}/img/section04_img/bg.png`}></img>
        </span>

      </div>
      <div className='right'>
        <Section04_List data={dataList} selectedCategory={selectedCategory} />
        <p className='right_p'>
          <span>더보기 +</span>

        </p>
      </div>

    </div>
  );
}

export default Section04;
