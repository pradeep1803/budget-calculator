import React ,{useState}from "react";
import './NewExpenseForm.css'
const NewExpenseForm=(props)=>{
    const [enterTitle,setEnterTitle]=useState('')
    const [enterAmount,setEnterAmount]=useState('')
    const [enterDate,setEnterDate]=useState('')
    const onTitleChanged=(event)=>{
        setEnterTitle(event.target.value);
    }
    const onAmountChanged=(event)=>{
        setEnterAmount(event.target.value);
    }
    const onDateChanged=(event)=>{
        setEnterDate(event.target.value);
    }
    const onSubmit=(event)=>{
        event.preventDefault()
       const new_expense={title :enterTitle,
        amount:enterAmount,
        date:new Date(enterDate)}
        props.onSave(new_expense)
        setEnterTitle('')
        setEnterAmount('')
        setEnterDate('')
    }
    
    return(
            <form action="" onSubmit={onSubmit}>
                <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="expense_title" id="title" onChange={onTitleChanged} value={enterTitle} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="expense_amount" id="amount" min="0" onChange={onAmountChanged} value={enterAmount}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="expense_date" id="date" onChange={onDateChanged} value={enterDate}/>
                </div>
                </div>
                <div className="new-expense__actions">
                <button type="reset">Cancel</button>
                <button type="submit">Add Expense</button>
                </div>
            </form>
       
    );
}

export default NewExpenseForm