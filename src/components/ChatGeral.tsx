import { Chat } from "@/types/Chat";
import { ChatVazio } from "./ChatVazio";
import { MensagemDoChat } from "./MensagemDoChat";
import { CarregandoRetornoBot } from "./CarregandoRetornoBot";

type Props = {
    chat: Chat | undefined;
    carregando: boolean;
}

export const ChatGeral = ({ chat, carregando }: Props) => {
    return (
        <section className="flex-auto h-0 overflow-y-scroll pl-3">
            {!chat && <ChatVazio />}
            {chat && chat.mensagens.map(item => (
                <MensagemDoChat
                    key={item.id}
                    item={item}
                />
            ))}
            {carregando && <CarregandoRetornoBot />}
        </section>
    );
}