import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Resume } from "./components/Resume";
import Global from "./styles/global";
import { typeTransaction } from "./types/typeTransaction";



function App() {

  const data = localStorage.getItem("transactions");

  const [transactionsList, setTransactionsList] = useState<typeTransaction[]>(data ? JSON.parse(data) : []);
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const [total, seTotal] = useState('');

  useEffect(() => {
    const amountExpense = transactionsList
      .filter(item => item.expense)
      .map(transaction => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter(item => item.expense === false)
      .map(transaction => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)

    const total = Math.abs(Number(income) - Number(expense)).toFixed(2)

    setIncome(`R$ ${(income)}`);
    setExpense(`R$ ${(expense)}`);
    seTotal(`R$ ${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);

  }, [transactionsList]);

  const handleAdd = (transaction: typeTransaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
  }

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionList={transactionsList} setTransactionList={setTransactionsList} />
      <Global />
    </>

  );
}

export default App;
