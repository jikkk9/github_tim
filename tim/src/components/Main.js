import React from 'react'
import MainList from './MainList'
function Main({ data }) {
  return (
    <>
      <section className='Main inner'>

        <MainList data={data}></MainList>

      </section>
    </>
  )
}

export default Main