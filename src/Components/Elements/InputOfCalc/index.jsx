import React from 'react'
import './index.css'

export default function InputOfCalc({value}) {
  return (
    <>
    <input onChange={e => e.target.value} id='inputers' value={value} className='numbersInputs'/>
    </>
  )
}
