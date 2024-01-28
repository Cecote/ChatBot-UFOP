import { Mensagens } from "./Mensagens";

export type Chat = {
    id: string;
    titulo: string;
    mensagens: Mensagens[];
}