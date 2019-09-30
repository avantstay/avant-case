import * as React from 'react'
import {WhenProps} from "./When";

export type CaseProps = {
  children: React.ReactElement<WhenProps> | React.ReactElement<WhenProps>[]
  nonExclusive?: boolean
}

function getFirstTruthyElement(children: React.ReactElement<WhenProps>[]) {
  return children.find(it => it.props.is) || null
}

function getAllTruthyElements(children: React.ReactElement<WhenProps>[]) {
  return children.filter(it => it.props.is)
}

function Case({ children, nonExclusive }: CaseProps) {
  const childrenArray = React.Children.toArray(children)
  const truthyElements = nonExclusive
    ? getAllTruthyElements(childrenArray)
    : getFirstTruthyElement(childrenArray)

  return <>{truthyElements}</> || null
}

export default Case
