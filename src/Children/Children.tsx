import React, { memo } from "react";

const ChildrenReact: React.FC<{ children: React.ReactNode }> = memo((props) => {
  const { children } = props

  const a = React.Children.toArray(children)

  console.log('ducnh a', a);



  return (
    <div>React.Children</div>
  )
})

const ParentReact = () => {
  return <ChildrenReact>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </ChildrenReact>
}

export default memo(ParentReact)