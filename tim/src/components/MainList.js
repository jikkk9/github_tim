import React from 'react'

function MainList({ data }) {
  return (
    <section className='MainList'>
      {
        data.map(item => (
          <div key={item._id}>
            <img src={`${process.env.PUBLIC_URL}/img/retiringroom/${item.img}`} alt={item.title} />
            <h2 className='title'>{item.title}</h2>
            <p className='MainList_subTitle'>{item.subTitle}</p>
            <p className='MainList_price'>{item.price}</p>
            <p className='MainList_test1'>{item.test1}</p>
          </div>
        ))
      }
    </section>

  )
}

export default MainList