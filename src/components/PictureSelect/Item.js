import React from 'react'

const Item = (props) => {
  const {picData, idx, picArr, clickHandle} = props
  const index = picData.url.lastIndexOf('/')

  return (
    <div>
      <input type="checkbox" 
        checked={Object.values(picArr[idx])[0]}
        onChange={()=>{
          clickHandle([idx,picData.id])
        }}
      />
      <img src={picData.url} alt=""/>
      <span className="title">{picData.url.slice(index+1,picData.url.length)}.jpg</span>
    </div>
  )
}

export default Item
