import React from 'react'

function Header(props) {
  return (
    <div>
      <h2>내용을 변경 해보겠습니다</h2>
      <p>{props.title}</p>
    </div>
  )
}
  export default Header