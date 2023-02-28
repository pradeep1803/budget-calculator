
import { useState, useEffect } from 'react';
import './App.css';
import Expense from './component/expense/expense';
import NewExpense from './component/new_expense/NewExpense';
import axios from 'axios';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  let flag=0;
  const [dummy, setDummy] = useState(DUMMY_DATA)
  const [isLoading, setLoading] = useState(true)
  const [fromDate, setFromDate] = useState(new Date('2022'))
  const [ToDate, setToDate] = useState(new Date('2023'))
  useEffect(() => {
    console.log(fromDate,ToDate);
    let link=('http://localhost:8080/api/v1/expensesTracker/'+fromDate+'/'+ToDate).toString()
    console.log(link);
    fetch('http://localhost:8080/api/v1/expenseTracker/')
      .then(Response => Response.json())
      .then((expense) => {
        console.log(expense);
        setDummy(expense.data)
        setLoading(false)

      })

      
  }, [])
  const onSave = (new_expense = {}) => {
    
    const expense = {
      ...new_expense
    }
    console.log(expense)

    const requestOptions = {
      method: 'POST',
      body: expense
  };
  console.log(requestOptions);
  axios.post('http://localhost:8080/api/v1/expenseTracker',new_expense)
      .then(Response => Response.json())
      .then((expense) => {
        console.log(expense);
      })
    setDummy((previous_list) => { return [...previous_list, new_expense] })
    DUMMY_DATA.push(expense)
    console.log(DUMMY_DATA);
  }

  const onDateChange = (from=new Date(),to=new Date()) => {
    setFromDate(()=>{
      return from
    })
    setToDate(()=>{
      return to
    })
  }

  return (

    <> <NewExpense onSave={onSave} />
      <Expense expense={dummy} isListLoading={isLoading} onDateChange={onDateChange} />
    </>
  );
}

export default App;
