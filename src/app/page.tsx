"use client"

import { BarraLateral } from "@/components/BarraLateral";
import { Cabecalho } from "@/components/Cabecalho";
import { ChatGeral } from "@/components/ChatGeral";
import { RodapeDaPagina } from "@/components/RodapeDaPagina";
import { Chat } from "@/types/Chat";
import { v4 as idV4 } from 'uuid'
import { useEffect, useState } from "react";
import { openai } from "@/utils/openai";

const Page = () => {
  const [barraLateralAberta, abrirBarraLateral] = useState(false);
  const [CarregandoResposta, botRespondendo] = useState(false);
  const [chatAtual, selecionarChat] = useState<Chat>();

  useEffect(() => {
    if (CarregandoResposta) {
      pegarRespostaBot();
    }
  }, [CarregandoResposta]);

  const pegarRespostaBot = async () => {
    if (chatAtual) {
      const converterMensagens = openai.transformarMensagens(chatAtual.mensagens);
      const retorno = await openai.generate(converterMensagens);

      if (retorno) {
        chatAtual.mensagens.push({
          id: idV4(), author: 'bot', body: retorno
        });
      }
    }

    botRespondendo(false);

  }

  const comandoAbrirBarraLateral = () => {
    abrirBarraLateral(true)

  }
  const fecharBarraLateral = () => {
    abrirBarraLateral(false);
  }

  
  const limparConversa = () => {
    if (CarregandoResposta) {
      return;
    }

    selecionarChat(undefined);
  }

  const enviarMensagem = (mensagem: string) => {
    if (chatAtual === undefined) {
      selecionarChat({
        id: idV4(),
        mensagens: [
          { id: idV4(), 
            author: 'usuario', 
            body: mensagem }
        ]
      });
    } else {
      chatAtual?.mensagens.push({
        id: idV4(), 
        author: 'usuario', 
        body: mensagem
      });
    }

    botRespondendo(true);

  }


  return (
    <main className="flex min-h-screen bg-[#747c84]">

      <BarraLateral
        open={barraLateralAberta}
        fecharBarraLateral={fecharBarraLateral}
        limpar={limparConversa}
        pesquisaRapida={enviarMensagem}
      >

      </BarraLateral>

      <section className="flex flex-col w-full text-white">
        <Cabecalho
          abrirBarraLateral={comandoAbrirBarraLateral}
        />

        <ChatGeral chat={chatAtual} carregando={CarregandoResposta} />

        <RodapeDaPagina
          conversandoNoChat={enviarMensagem}
          desabilitado={CarregandoResposta}
        />
      </section>
    </main>
  );
}

export default Page;