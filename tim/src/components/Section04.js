import React, { useState } from 'react';
import Section04_List from './Section04_List';

function Section04({ data }) {

  const [dataList, setDataList] = useState(data);

  const handleSortChange = (e) => {
    const sortMethod = e.target.value;

    switch (sortMethod) {
      case 'default':
        setDataList([...data]);
        break;
      case 'lowestPrice':
        setDataList([...data].sort((a, b) => a.price - b.price));
        break;
      case 'highestPrice':
        setDataList([...data].sort((a, b) => b.price - a.price));
        break;
      case 'highestDiscount':
        setDataList([...data].sort((a, b) => b.discount - a.discount));
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
            <option value="default">사무실</option>
            <option value="lowestPrice">회의공간</option>
            <option value="highestPrice">높은가격</option>
            <option value="highestDiscount">높은할인율</option>
          </select>
          <h2>은</h2>
        </div>
        <h2>온비즈 오피스 입니다</h2>
      </div>
      <div className='right'>
        <Section04_List data={dataList} />
      </div>
    </div>
  )
}

export default Section04;
