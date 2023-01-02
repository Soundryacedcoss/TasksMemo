import React from 'react'
import { memo } from "react";
 const ChildComponent = () => {
  return (
    <div>ChildComponent</div>
  )
}
export default memo(ChildComponent);