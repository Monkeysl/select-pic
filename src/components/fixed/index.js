import React, { useState } from 'react'

import './index.scss'


export default (props) => {
  const { pictures, setPictures } = props
  const [arr, setArr] = useState(pictures)
  console.log(arr)
  return (
    <div className='fixed'>
      <textarea name="" id="" cols="30" rows="10" placeholder='请输入数据pictures' value={JSON.stringify(arr)}
        onChange={ (e)=>{ setArr(e.target.innerHTML) } }>
      
      </textarea>
      <button>确定</button>
    </div>
  )
}