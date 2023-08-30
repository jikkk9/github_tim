import React from 'react'
import { useLocation } from 'react-router-dom';
function Footer() {
  const location = useLocation();

  // /about 경로인 경우 푸터를 숨김
  if (location.pathname === '/about') {
    return null;
  }

  return (
    <div className='Footer'>
      <div className='top  inner'>
        <span><a href='#none'>가맹정모집</a></span>
        <span><a href='#none'>고객센터</a></span>
        <span><a href='#none'>임대신청온비즈</a></span>
        <span><a href='#none'>오피스가이드</a></span>
      </div>
      <div className='bot  inner'>
        <ul>
          <li>
            <div>
              <h2>Onbiz Office</h2>
              <p>010-4429-3013</p>
            </div>
            <p>(주)이비즈네트웍스</p>
            <p>대표이사 : 박기범</p>
            <p>주소 : 서울특별시 강남구 테헤란로82길 15, (대치동, 디아이타워)</p>
            <p>사업자등록번호 : 220-87-30865</p>
          </li>
          <li>
            <div>
              <h2>문의</h2>
              <p></p>
            </div>
            <p>고객상담 : 010-4429-3013</p>
            <p>E-mail 문의 onbiz@ebiznetworks.co.kr</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer