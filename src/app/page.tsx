"use client"

import { BarraLateral } from "@/components/BarraLateral";
import { Cabecalho } from "@/components/Cabecalho";
import { ChatGeral } from "@/components/ChatGeral";
import { RodapeDaPagina } from "@/components/RodapeDaPagina";
import { Chat } from "@/types/Chat";
import { useState } from "react";

const Page = () => {
  const [barraLateralAberta, abrirBarraLateral] = useState(false);
  const [CarregandoResposta, botRespondendo] = useState(false);
  const [chatAtual, selecionarChat] = useState<Chat>({
    id: '123',
    titulo: 'Teste',
    mensagens: [
      { id: '99', author: 'usuario', body: 'Opa, tudo certo?' },
      { id: '100', author: 'bot', body: 'Tudo sim, e com você?' },
    ]
  });

  const comandoAbrirBarraLateral = () => {
    abrirBarraLateral(true)
  }
  const fecharBarraLateral = () => {
    abrirBarraLateral(false);
  }
  const abrirNovoChat = () => {

  }
  const limparHistorico = () => {

  }

  const enviarMensagem = () => {

  }

  return (
    <main className="flex min-h-screen bg-[#747c84]">

      <BarraLateral
        open={barraLateralAberta}
        fecharBarraLateral={fecharBarraLateral}
        limpar={limparHistorico}
        novoChat={abrirNovoChat}
      >

      </BarraLateral>

      <section className="flex flex-col w-full text-white">
        <Cabecalho
          abrirBarraLateral={comandoAbrirBarraLateral}
        />

        <ChatGeral chat={chatAtual} />

        <RodapeDaPagina
          conversandoNoChat={enviarMensagem}
          desabilitado={CarregandoResposta}
        />
      </section>
    </main>
  );
}

export default Page;