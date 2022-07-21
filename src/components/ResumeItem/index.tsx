import { IconType } from 'react-icons';
import * as C from './styles';

interface Props {
    title: string;
    Icon: IconType;
    value: string
}

export function ResumoItem({ title, Icon, value }: Props) {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{title}</C.HeaderTitle>
                <Icon />
            </C.Header>
            <C.Total>{value}</C.Total>
        </C.Container>
    );
}