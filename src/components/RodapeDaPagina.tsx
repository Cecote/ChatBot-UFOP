import { MensagemEnviada } from "./MensagemEnviada";

type Props = {
    desabilitado: boolean;
    conversandoNoChat: (message: string) => void;
}

export const RodapeDaPagina = ({ desabilitado, conversandoNoChat }: Props) => {
    return (
        <footer className="w-full p-2">
            <div className="max-w-4xl m-auto">
                <MensagemEnviada
                    desabilitado={desabilitado}
                    enviar={conversandoNoChat}
                />
            </div>
        </footer>
    );
}