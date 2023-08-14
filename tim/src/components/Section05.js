import React from 'react'
import List from '../data/section05Data';

function Section05({ data }) {
  return (
    < >
      <div className="wave-container">
        <div className="wave">
          <img src={`${process.env.PUBLIC_URL}/img/icon/wave.png`} />
          <img className='wave2' src={`${process.env.PUBLIC_URL}/img/icon/wave.png`} />

        </div>
      </div>

      <h2 className='Section05_H2'><b>편의시설</b></h2>
      <div className='Section05 inner'>
        {List.map(item => (
          <div key={item._id}>
            <img src={`${process.env.PUBLIC_URL}/img/icon/${item.img}.png`} className="staticImage"></img>

            <img src={`${process.env.PUBLIC_URL}/img/icon/${item.img}.gif`} className="gifImage"></img>
            <img src=''></img>
            <h3>{item.title}</h3>



          </div>
        ))}
      </div>
    </>
  )
}

export default Section05