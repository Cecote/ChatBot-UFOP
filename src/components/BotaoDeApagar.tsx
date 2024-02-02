import { ReactNode } from "react";

type Props = {
    onClick: () => void;
    icone: ReactNode;
    conteudo: string;
}

export const BotaoDeApagar = ({ onClick, icone, conteudo }: Props) => {
    return (
        <div onClick={onClick} className="flex items-center cursor-pointer rounded-md p-3 text-sm hover:bg-gray-900/20" style={{ minWidth: '260px' }}>
            <div className="mr-1">
                {icone}
            </div>
            <div className="flex-1 truncate">
                {conteudo}
            </div>
        </div>
    );
}