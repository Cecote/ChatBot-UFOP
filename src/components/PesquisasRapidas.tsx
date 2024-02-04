import { ReactNode } from "react";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

type Props = {
    icone: ReactNode;
    conteudo: string;
    pesquisaRapida: (message: string) => void;
}


export const PesquisasRapidas = ({ icone, pesquisaRapida, conteudo }: Props) => {
    const enviarMensagem = () => {
        pesquisaRapida(conteudo)
    }

    return (
        <div onClick={enviarMensagem} className="flex items-center cursor-pointer rounded-md p-3 text-sm hover:bg-gray-900/20" style={{ minWidth: '260px' }}>
            <div className="mr-3">
                {icone}
            </div>
            <div className="flex-1">
                {conteudo}
            </div>
        </div>
    );
}