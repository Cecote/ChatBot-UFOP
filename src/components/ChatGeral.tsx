import { Chat } from "@/types/Chat";
import { ChatVazio } from "./ChatVazio";
import { MensagemDoChat } from "./MensagemDoChat";

type Props = {
    chat: Chat | undefined;
}

export const ChatGeral = ({ chat }: Props) => {
    return (
        <section className="flex-auto h-0 overflow-y-scroll pl-3">
            {!chat && <ChatVazio />}
            {chat && chat.mensagens.map(item => (
                <MensagemDoChat
                    key={item.id}
                    item={item}
                />
            ))}
        </section>
    );
}