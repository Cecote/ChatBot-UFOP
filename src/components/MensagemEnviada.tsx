import IconMailSendLine from "./icons/IconeDeEnviado";
import { KeyboardEvent, useRef, useState } from "react";

type Props = {
    desabilitado: boolean;
    enviar: (mensagem: string) => void;
}

export const MensagemEnviada = ({ desabilitado, enviar }: Props) => {

    const textoEl = useRef<HTMLTextAreaElement>(null);

    const [texto, selecionarTexto] = useState('');

    const enviarMensagem = () => {
        if (!desabilitado && texto.trim() !== '') {
            enviar(texto);
            selecionarTexto('');
        }
    }

    const enviarMensagemPeloTeclado = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.code.toLowerCase() === 'enter' && !event.shiftKey) {
            event.preventDefault();
            enviarMensagem();
        }
    }

    return (
        <div className={`flex border border-white bg-[#747c84] p-2 rounded-md ${desabilitado && 'opacity-50'}`}>
            <textarea
                ref={textoEl}
                className="flex-1 borde-0 bg-transparent resize-none outline-none h-7 max-h-48 overflow-y-auto"
                placeholder="Digite uma mensagem"
                value={texto}
                onChange={e => selecionarTexto(e.target.value)}
                onKeyUp={enviarMensagemPeloTeclado}
                disabled={desabilitado}
            ></textarea>

            <div onClick={enviarMensagem} className="">
                <IconMailSendLine width={14} height={14} />
            </div>
        </div>
    );
}