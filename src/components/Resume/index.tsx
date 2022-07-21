import { ResumoItem } from '../ResumeItem';
import * as C from './styles';

import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'

interface Props {
    income: string;
    expense: string;
    total: string
}

export function Resume({income, expense, total}: Props) {
    return (
        <C.Container>
            <ResumoItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
            <ResumoItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
            <ResumoItem title="Total" Icon={FaDollarSign} value={total} />
        </C.Container>
    )
}