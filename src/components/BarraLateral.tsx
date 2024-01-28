import { ReactNode } from "react"
import IconCloseCircle from "./icons/IconeDeFechar";
import IconArrowBarLeft from "./icons/IconeDeFechar";
import { BotaoDeApagar } from "./BotaoDeApagar";
import { Limelight } from "next/font/google";
import IconTrash from "./icons/IconeDeLixeira";

type Props = {
    children: ReactNode;
    open: boolean;
    fecharBarraLateral: () => void;
    limpar: () => void;
    novoChat: () => void;

}

export const BarraLateral = ({ open, fecharBarraLateral, limpar, children, novoChat }: Props) => {
    return (
        <section className={`fixed left-0 top-0 bottom-0 text-black ${open ? 'w-screen bg-[#747c84]' : 'w-0'} md:w-64 md:static`}>

            <div className={`transition-all duration-200 flex h-screen ${open ? 'ml-0' : '-ml-96'} md:ml-0`}>

                <div className="flex flex-col w-128 bg-[#942c44] p-1 text-white">

                    <button style={{ fontSize: '14px' }} onClick={novoChat} className="p-3 rounded-md border border-white hover:bg-gray-900/20">
                        Novo Chat
                    </button>

                    <nav className="flex-1 pt-2 overflow-y-auto">
                        {children}
                    </nav>

                    <div className="border-t border-white-700 pt-2 ">
                        <BotaoDeApagar
                            conteudo="=>Limpar histórico de conversas"
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