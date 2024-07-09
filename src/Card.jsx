/* eslint-disable react/prop-types */
import React from 'react'

export const Card = ({count, person, text, setText}) => {
  return (
    <div onClick={() => setText('Hello all')}>Card {person[1].name} {text} {count}</div>
  )
}
