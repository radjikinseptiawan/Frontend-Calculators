import React from 'react'
import './index.css'

export default function ButtonsCalc({children,buttonFunction,keyButton}) {
  return (
    <div className='buttonsNumber' onClick={buttonFunction} onKeyDown={keyButton}>{children}</div>
  )
}
