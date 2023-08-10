import React from 'react'
import { useState, useEffect } from "react";


function TestuseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //브라우저 API를 사용하여 document의 title을 업데이트 합니다.
    document.title = `document => ${count}`;
  }, [count]);
  return (
    <>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </>
  )
}

export default TestuseEffect