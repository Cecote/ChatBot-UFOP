import { Mensagens } from "@/types/Mensagens";
import IconPersonCheck from "./icons/IconeDeUsuario";
import IconRobot from "./icons/IconeDeBot";
import { Avatar } from "@nextui-org/avatar";
import IconPersonCircle from "./icons/IconeDeUsuario";

type Props = {
    item: Mensagens;
}

export const MensagemDoChat = ({ item }: Props) => {
    return (
        <div className={`py-5 ${item.author === 'bot' && 'bg-gray-600/50'}`}>
            <div className="max-w-4xl m-auto flex">
                <div className="w-10 h-10 flex justify-center items-center mx-4 md:ml-0 rounded">
                    {item.author === 'usuario' && <IconPersonCircle width={45} height={45} />}
                    {item.author === 'bot' && <Avatar src="https://minha.ufop.br/minhaufop/assets/bootstrap/img/logo-minhaufop.png" size="lg" />}
                </div>

                <div className="flex-1 text-base whitespace-pre-wrap">
                    {item.body}
                </div>
            </div>
        </div>
    );
}