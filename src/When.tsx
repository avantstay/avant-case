import React from 'react'

export type ReturnElement = () => JSX.Element

export interface WhenProps {
  is: boolean
  render: ReturnElement
}

function When({ is, render }: WhenProps) {
  return is ? render() : null
}

export default When
