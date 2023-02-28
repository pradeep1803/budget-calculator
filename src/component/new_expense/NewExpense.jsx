import React from "react";
import './NewExpense.css';
import NewExpenseForm from "./new_expense_form/NewExpenseForm";

const NewExpense=(props)=>{
    return(
        <div className="new-expense">
<NewExpenseForm onSave={props.onSave}/>
        </div>
    );
}

export default NewExpense