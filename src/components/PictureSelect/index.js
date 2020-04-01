import React, { useState } from 'react'
import Item from './Item'

import './index.scss'

export default (props) => {
  const { pictures=[], value, onChange } = props
  const [picArr, setPicArr] = useState([])
  const [bool, setBool] = useState(false)
  const [len, setLen] = useState(0)

  const arr = []
  pictures.forEach(e => {
    arr.push({[e.id]: false})
  })
  if(picArr.join('') !== arr.join('')) {
    setPicArr([...arr])
    arr.length=0
  }

  const filterArr = (arr) => {
    setPicArr([...arr])
    const _arr =  arr.filter((i)=>{
      return Object.values(i)[0] === true
    })
    onChange(Object.keys(_arr))
    setLen(_arr.length)
  }
  const clickHandle = (idData,idxs) => {
    if(idData) {
      const arr=[...picArr]
      arr[idData[0]][idData[1]] = !arr[idData[0]][idData[1]]
      filterArr(arr)
    }
    if(idxs===true || idxs===false) {
      const arr = []
      pictures.forEach(e => {
        arr.push({[e.id]: idxs})
      })
      filterArr(arr)
    }
    
  }

  return (
    <div className="wrap">
      <div className="top">
        <label htmlFor="">
          <input
            type="checkbox"
            checked={bool}
            onChange={(e)=> {
              setBool(!bool)
              clickHandle(null, !bool)
            }} 
          />
          已选中{len}个文件,id是 [{value.join(',')}]
        </label>
      </div>

      <div className="main">
        {
          pictures.map((item, index) => (
            <Item 
              picData={item}
              idx={index}
              picArr={picArr}
              clickHandle={clickHandle}
              key={index+item} />
          ))
        }
      </div>
    </div>
  )
}