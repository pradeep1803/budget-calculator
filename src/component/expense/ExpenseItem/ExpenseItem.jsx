// import React, {useState} from "react";
import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from "../ExpenseDate/ExpenseDate";


const ExpenseItem=(props)=>{
    let{
        title='',
        amount=0,
        date=new Date()
    }=props

    // const [title, setTitle]=useState(props.title)
    // const buttonClick=()=>{
    //   setTitle('updat')
    // } //used to change title

return <div className="expense-item">
    <div><ExpenseDate date={date}/></div>
    <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs.{amount}</div>
    </div>
     </div>
}

export  default ExpenseItem;