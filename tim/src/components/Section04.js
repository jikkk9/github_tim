import React, { useState } from 'react';
import Section04_List from './Section04_List';

function Section04({ data }) {
  const [dataList, setDataList] = useState(data.filter(item => item.category === 'retiringroom'));

  const handleSortChange = (e) => {
    const category = e.target.value;

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

  return (
    <div className='Section04 inner'>
      <div className='left'>
        <div>
          <h2>지금 </h2>
          <select onChange={handleSortChange}>
            <option value="retiringroom">휴식공간</option>
            <option value="meetingroom">회의실</option>
            <option value="office">사무실</option>
            <option value="retiringroom">휴식공간</option>
            <option value="books">도서관</option>
          </select>
          <h2>은</h2>
        </div>
        <h2>온비즈 오피스 입니다</h2>
      </div>
      <div className='right'>
        <Section04_List data={dataList} />
      </div>
    </div>
  );
}

export default Section04;
