import { typeTransaction } from "../../types/typeTransaction"
import { GridItem } from "../GridItem"
import * as C from "./styles"

interface Props {
    itens: typeTransaction[];
    setItens: (item: typeTransaction[]) => void
}

export function Grid({ itens, setItens }: Props) {

    const onDelete = (id: number | undefined) => {
        const newArray = itens.filter((transaction) => transaction.id !== id);
        setItens(newArray);
        localStorage.setItem("transactinos", JSON.stringify(newArray))
    }

    return (
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th width={40}>Descrição</C.Th>
                    <C.Th width={40}>Valor</C.Th>
                    <C.Th width={10} alignCenter>Tipo</C.Th>
                    <C.Th width={10}></C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete}/>
                ))}
            </C.Tbody>
        </C.Table>
    );
}