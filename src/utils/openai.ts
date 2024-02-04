import { Mensagens } from '@/types/Mensagens';
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
});

const api = new OpenAIApi(config);

export const openai = {
    generate: async (mensagens: ChatCompletionRequestMessage[]) => {
        try {
            const resposta = await api.createChatCompletion({
                model: "gpt-3.5-turbo",
                temperature: 0.6,
                messages: mensagens
            });
            return resposta.data.choices[0]?.message?.content;
        } catch (error) {
            return undefined;
        }
    },
    transformarMensagens: (mensagens: Mensagens[]) => {
        let reqMensagens: ChatCompletionRequestMessage[] = [];

        for (let i in mensagens) {
            reqMensagens.push({
                role: mensagens[i].author === 'usuario' ? 'user' : 'assistant',
                content: mensagens[i].body
            });
        }

        return reqMensagens;
    }
}