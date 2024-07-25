import React from 'react'
import style from './ParentComponent.module.css';
export default function ParentComponent({children}) {
  return (
    <>
    <div className={style.parent}>
      {children}
    </div>
    </>
  )
}
