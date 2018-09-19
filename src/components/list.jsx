import React from 'react'
const List = (props) => {
  console.log(props.data)
  return (
    props.data.map((ele, i) => {
      return (
        <div className='item' key={i}>
          <h2>{ele.nombre}</h2>
          <br />
          <p>{ele.nacionalidad}</p>
        </div>
      )
    })
  )
}

export default List
