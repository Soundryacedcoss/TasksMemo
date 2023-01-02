import React, { useState } from 'react'
import img1 from './image/images.png'
export const Task3 = () => {
    const fromOPtion=["USD🇺🇸"]
    const ToOption=["INDe🇮🇳"]
    const[Amount,setAmount]=useState("")
    const[fromSelect,setFromSelect]=useState("")
    const[ToSelect,setToSelect]=useState("")
    const[Output,setOutput]=useState("")
    const[left,setLeft]=useState("")
    const[right,setRight]=useState("")
    var Amount1=parseInt(Amount)
    const AmountHandler=(e)=>{
        setAmount(e.target.value)
    }
    const FromSelectHandler=(e)=>{
        setFromSelect(e.target.value)
    }
    const ToSelectHandler=(e)=>{
        setToSelect(e.target.value)
    }
    const ExchangeButtonHandler=()=>{
        if(Amount===""){
            alert("Please Enter Some Amount")
        }
        else if(fromSelect==="USD" && ToSelect==="IND"){
            setOutput(Amount1*81.91)
        }
        else if(fromSelect==="IND" && ToSelect==="USD"){
            setOutput(Amount1/81.91)
        }
        console.log(Output);
        
    }
    const ExchangeContryHandler=()=>{
        console.log('hiii');
        // setLeft([...fromOPtion])
        // setRight([...fromOPtion])
        setFromSelect([...fromOPtion])
        setToSelect([...fromOPtion])
    }
  return (
    
    <div >
        <h2>Task3</h2>
        <b>Q3 Make a Currency Converter as shown here</b>
        <div className='CurrencyConvertor'>
        <h1>Currency Converter</h1>
        <label htmlFor=""><b>Enter Amount</b> </label>
        <input type="text" onChange={AmountHandler} />
        <br /><br />
        <div value={left}>
        <select name="" id="" onClick={FromSelectHandler}>
        <option value="">Choose</option>
            <option value="USD">USD🇺🇸</option>
        </select>
        </div>
       {""}
        <a onClick={ExchangeContryHandler}><img className='ExchangeLogo' src={img1} alt="" /></a> {""}
        <div value={right}>
        <select name="" id="" onClick={ToSelectHandler}>
            <option value="">Choose</option>
            <option value="IND">IND🇮🇳</option>
        </select>
        </div>
        <br /><br />
        <p>{Output}</p>
        <br /><br />
        <button className='button' onClick={ExchangeButtonHandler}>Get Exchange</button>
        </div>
    </div>
  )
}
