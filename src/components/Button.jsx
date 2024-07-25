import React from 'react'
import styles from './Button.module.css'

export default function Button({btnClick}) {
    let btn=['1','2','3','+','4','5','6','-','7','8','9','*','.','0','=','/','<x','AC','%'];
   // function cSelect({val}){
//   if(val==='+'||val==='-'||val==='*'||val==='/'){
//     return styles.calcubtn
//   }else if(val==='AC'){
//     return styles.clearbtn
//   }
//   else{
//     return styles.calbtn
//   }
// }
  return (
    <div>
          {btn.map((val,index)=><button className={val==='AC'?styles.clearbtn:val==='+'||val==='-'||val==='*'||val==='/'?styles.calcubtn:val==='%'?styles.modulbtn:val==='<x'?styles.cutbtn:styles.calbtn }onClick={()=>btnClick(val)}  key={index}>{val}</button>)}
    </div>
  )
}


// val==='AC'?styles.clearbtn:styles.calbtn






