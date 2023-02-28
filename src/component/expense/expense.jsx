import React,{useState, useEffect, useRef } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import './expense.css'

const Expense=(props)=>{
    const {expense}=props;
    const [enterDate,setEnterDate]=useState('')
    const [fromDate, setFromDate] = useState(new Date('2022'))
  const [ToDate, setToDate] = useState(new Date('2023'))
const date = useRef();
const focus=()=>{
  console.log("focus",date);
   date.current.type='date'
}
const blur=()=>{
  console.log("focus",date);
   date.current.type='text'
}



// const dateChange=(event)=>{
// props.onDateChange(fromDate,ToDate)
// setFromDate(event.target.value);onChange={dateChange} 
// }
        return (
          <div className="expenses">
            <div className="new-expense__controll">
              <div ><label>From</label><input  ref={date} type="text" name="date" placeholder="20/12/2022" value={fromDate} onFocus={focus} onBlur={blur}/></div>
            <div><label>To</label><input type="date" name="date" id="date"  /></div>
            </div>
            {expense.map((single_expense)=>{
              return<ExpenseItem  title={single_expense.title}
              amount={single_expense.amount}
              date={single_expense.date}
              key={single_expense.Id}/>
              
})}
          {
          /* <ExpenseItem title={expense[0].title}
          amount={expense[0].amount}
          date={expense[0].date}
          />
          <ExpenseItem title={expense[1].title}
          amount={expense[1].amount}
          date={expense[1].date}
          />
          <ExpenseItem title={expense[2].title}
          amount={expense[2].amount}
          date={expense[2].date}
          />
          <ExpenseItem title={expense[3].title}
          amount={expense[3].amount}
          date={expense[3].date}
          />
          <ExpenseItem/>
       */
       }
          
       </div> 
       );
   
}

export default Expense;