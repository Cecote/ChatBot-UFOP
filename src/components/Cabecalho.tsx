import IconArrowBarRight from "./icons/IconeDeAbrir";

type Props = {
    abrirBarraLateral: () => void;
}

export const Cabecalho = ({ abrirBarraLateral }: Props) => {
    return (
        <header className="flex justify-between items-center w-full border-b-white p-2 md:hidden">
            <div onClick={abrirBarraLateral}>
                <IconArrowBarRight width={24} height={24} color="white" />
            </div>
        </header>
    );
}