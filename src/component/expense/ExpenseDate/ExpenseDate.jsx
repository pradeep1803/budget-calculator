import React from "react";
import './ExpenseDate.css';

const ExpenseDate=(props)=>{
    const dateValue=props.date
    const month= new Date(dateValue).toLocaleString("en-us", {month: 'long'})
    const year= new Date(dateValue).getUTCFullYear().toString()
    const date= new Date(dateValue).toLocaleString("en-us",{day:'2-digit'})

    console.log(year)
return <div className="expense-date">
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__date">{date}</div>
    <div className="expense-date__day">{year}</div>
    </div>
}

export  default ExpenseDate;