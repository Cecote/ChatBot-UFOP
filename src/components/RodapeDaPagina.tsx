type Props = {
    desabilitado: boolean;
    conversandoNoChat: (desabilitado, message: string) => void;
}

export const RodapeDaPagina = ({ conversandoNoChat }: Props) => {
    return (
        <footer className="w-full border-t border-t-white p-2">
            <div className="max-w-4xl m-auto">
                <MensagemEnviada
                    desabilitado={desabilitado}
                    onSend={conversandoNoChat}
                />
            </div>
        </footer>
    );
}