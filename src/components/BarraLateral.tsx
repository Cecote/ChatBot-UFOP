import { ReactNode } from "react"
import IconArrowBarLeft from "./icons/IconeDeFechar";
import { BotaoDeApagar } from "./BotaoDeApagar";
import { Limelight } from "next/font/google";
import IconTrash from "./icons/IconeDeLixeira";
import { PesquisasRapidas } from "./PesquisasRapidas";
import IconTag from "./icons/IconeDeTag";

type Props = {
    children: ReactNode;
    open: boolean;
    fecharBarraLateral: () => void;
    limpar: () => void;
    pesquisaRapida: (mensagem: string) => void;

}

export const BarraLateral = ({ open, fecharBarraLateral, limpar, children, pesquisaRapida }: Props) => {
    return (
        <section className={`fixed left-0 top-0 bottom-0 text-black ${open ? 'w-screen bg-[#747c84]' : 'w-0'} md:w-64 md:static`}>

            <div className={`transition-all duration-200 flex h-screen ${open ? 'mr-0' : '-ml-96'} md:ml-0`}>

                <div className="flex flex-col w-128 bg-[#942c44] p-1 text-white" style={{ maxWidth: '268px' }}>

                    <div className="border-b border-white-700 pb-3 pr-2 ">
                        <img
                            style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                            src="https://ufop.br/sites/default/files//site_logo_ufop_txtwte_0.png"
                        />
                    </div>

                    <div className="flex justify-center font-bold pt-3 ">
                        Pesquisas rápidas:
                    </div>

                    <div className="flex justify-center pt-3">
                        <PesquisasRapidas
                            conteudo="Quando foi fundada a ufop?"
                            icone={<IconTag width={16} height={16} />}
                            pesquisaRapida={pesquisaRapida}
                        />
                    </div>

                    <div className="flex justify-center pt-3">
                        <PesquisasRapidas
                            conteudo="Como entrar no site principal da ufop ?"
                            icone={<IconTag width={16} height={16} />}
                            pesquisaRapida={pesquisaRapida}
                        />
                    </div>

                    <div className="flex justify-center pt-3">
                        <PesquisasRapidas
                            conteudo="Como obter meu histórico escolar?"
                            icone={<IconTag width={16} height={16} />}
                            pesquisaRapida={pesquisaRapida}
                        />
                    </div>

                    <div className="flex justify-center pt-3">
                        <PesquisasRapidas
                            conteudo="Como entrar no moodle presencial ?"
                            icone={<IconTag width={16} height={16} />}
                            pesquisaRapida={pesquisaRapida}
                        />
                    </div>

                    <div className="flex justify-center pt-3">
                        <PesquisasRapidas
                            conteudo="Como obter meu atestado de matricula?"
                            icone={<IconTag width={16} height={16} />}
                            pesquisaRapida={pesquisaRapida}
                        />
                    </div>

                    <div className="flex justify-center pt-3">
                        <PesquisasRapidas
                            conteudo="Quantos cursos existem na ufop atualmente?"
                            icone={<IconTag width={16} height={16} />}
                            pesquisaRapida={pesquisaRapida}
                        />
                    </div>

                    <nav className="flex-1 pt-2 overflow-y-auto">
                        {children}
                    </nav>

                    <div className="border-t border-white-700 pt-2 ">
                        <BotaoDeApagar
                            conteudo="=> Limpar conversa"
                            icone={<IconTrash width={16} height={16} />}
                            onClick={limpar}
                        />
                    </div>

                </div>

                <div onClick={fecharBarraLateral} className="flex justify-center items-center w-8 h-8 cursor-pointer md:hidden">
                    <IconArrowBarLeft width={24} height={24} color="white" />
                </div>

            </div>
        </section>
    );
}