import IconMailSendLine from "./icons/IconeDeEnviado";
import { KeyboardEvent, useEffect, useRef, useState } from "react";


type Props = {
    desabilitado: boolean;
    enviar: (mensagem: string) => void;
}

export const MensagemEnviada = ({ desabilitado, enviar }: Props) => {

    const [texto, selecionarTexto] = useState('');
    const caixaDeTextoAdaptativa = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (caixaDeTextoAdaptativa.current) {
            caixaDeTextoAdaptativa.current.style.height = '0px';
            let scrollHeight = caixaDeTextoAdaptativa.current.scrollHeight;
            caixaDeTextoAdaptativa.current.style.height = scrollHeight + 'px';
        }
    }, [texto, caixaDeTextoAdaptativa]);

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
                ref={caixaDeTextoAdaptativa}
                className="flex-1 borde-0 bg-transparent resize-none outline-none h-7 max-h-48 overflow-y-auto"
                placeholder="Digite uma mensagem"
                value={texto}
                onChange={e => selecionarTexto(e.target.value)}
                onKeyUp={enviarMensagemPeloTeclado}
                disabled={desabilitado}
            ></textarea>

            <div onClick={enviarMensagem} className={`self-end p-1 cursor-pointer rounded ${texto.length ? 'opacity-100 hover:bg-black/20' : 'opacity-20'}`}>
                <IconMailSendLine width={20} height={20} />
            </div>
        </div>
    );
}