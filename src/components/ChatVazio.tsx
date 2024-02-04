import IconBook from "./icons/IconeDeLivro";

export const ChatVazio = () => {
    return (
        <div className="m-5">
            <h3 className="text-4xl font-bold text-center my-8">Chatbot-UFOP</h3>

            <div className="flex flex-col justify-center md:flex-row gap-5 m-auto mb-8 md:max-w-4xl">
                <div>
                    <div className="flex justify-center items-center text-lg mb-3">
                        <IconBook width={24} height={24} className="mr-3" />
                        Exemplo
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
                        "Exemplo do que pode ser pesquisado"
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
                        "Alguma curiosidade interessante sobre a universidade"
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
                        "Possíveis eventos que estão com datas próximas"
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
                        "Etc Etc Etc..."
                    </div>
                </div>
            </div>
        </div>
    );
}