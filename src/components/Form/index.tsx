import { useState } from 'react';
import { typeTransaction } from '../../types/typeTransaction';
import { Grid } from '../Grid';
import * as C from './styles';


interface Props {
    handleAdd: (transaction: typeTransaction) => void;
    transactionList: typeTransaction[];
    setTransactionList: (item: typeTransaction[]) => void;
}

export function Form({ handleAdd, transactionList, setTransactionList }: Props) {

    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState(0);
    const [isExpense, setExpense] = useState(false);

    function genereteID(): number {
        return Math.round(Math.random() * 1000)
    }

    function handleSave() {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor");
            return
        } else if (amount < 1) {
            alert("O valor tem que ser positivo");
            return
        }

        const transaction: typeTransaction = {
            id: genereteID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        console.log(transaction)

        handleAdd(transaction);

        setDesc('');
        setAmount(0);
    }

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input value={amount} type="number" onChange={(e) => setAmount(Number(e.target.value))} />
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                    <C.Input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label htmlFor="rExpenses">Saída</C.Label>
                </C.RadioGroup>
                <C.Button onClick={handleSave}>Adicionar</C.Button>
            </C.Container>
            <Grid itens={transactionList} setItens={setTransactionList}/>
        </>
    )
}