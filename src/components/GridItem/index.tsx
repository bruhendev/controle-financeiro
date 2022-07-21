import * as C from './styles';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from 'react-icons/fa'
import { typeTransaction } from '../../types/typeTransaction';

interface Props {
    item: typeTransaction;
    onDelete: (item: number | undefined ) => void
}

export function GridItem({ item, onDelete }: Props) {
    return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{item.amount}</C.Td>
            <C.Td alignCenter>
                {
                    item.expense ?
                        <FaRegArrowAltCircleDown color="red" /> :
                        <FaRegArrowAltCircleUp color="green"/>
                }
            </C.Td>
            <C.Td>
                <FaTrash onClick={() => onDelete(item.id)}/>
            </C.Td>
        </C.Tr>
    )
}