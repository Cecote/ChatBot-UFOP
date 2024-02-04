import { Avatar } from "@nextui-org/avatar";
import IconSearchLoading from "./icons/IconeDeCarregamento";


export const CarregandoRetornoBot = () => {
    return (
        <div className="py-5 bg-gray-600/50">
            <div className="max-w-4xl m-auto flex items-center">
                <div className="w-10 h-10 flex justify-center items-center mx-4 md:ml-0 rounded">
                    <Avatar src="https://minha.ufop.br/minhaufop/assets/bootstrap/img/logo-minhaufop.png" size="lg" />
                </div>
                <div className="flex-1 text-base whitespace-pre-wrap">
                    <IconSearchLoading width={28} height={28} color="white" />
                </div>
            </div>
        </div>
    );
}