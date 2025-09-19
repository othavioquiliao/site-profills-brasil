import { AnimatedContainer } from "@/components/AnimatedContainer";
import Image from "next/image";
import { useState } from "react";
import { MaquinaData } from "./maquinasData";

interface MaquinaCardProps {
  maquina: MaquinaData;
  index: number; // Para delay escalonado
}

export default function MaquinaCard({ maquina, index }: MaquinaCardProps) {
  // Padronização: todos os cards com mesmas dimensões externas
  // e mesma proporção de conteúdo/rodapé para evitar desalinhamentos

  const [imgLoaded, setImgLoaded] = useState(false);
  const [pkgLoaded, setPkgLoaded] = useState(false);

  // Delay escalonado para animação suave (máximo 0.6s para os últimos cards)
  const animationDelay = Math.min(index * 0.05, 0.6);

  return (
    <AnimatedContainer
      delay={animationDelay}
      trigger="inView"
      once={true}
      amount={0.1} // Dispara quando 10% do elemento está visível
      className={`border-border/20 group hover:border-accent/30 flex h-[28rem] w-full flex-col overflow-hidden rounded-xs border bg-slate-900 text-white md:h-[32rem]`}
    >
      <div className={`relative h-[86%] w-full px-2`}>
        <Image
          src={maquina.imgMaquina}
          alt="Máquina"
          width={400}
          height={300}
          loading={index < 6 ? "eager" : "lazy"} // Primeiras 6 imagens carregam imediatamente
          onLoadingComplete={() => setImgLoaded(true)}
          className={`${
            maquina.imgMaquinaClassName || "h-full w-full object-contain"
          } transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
        />
        <Image
          src={maquina.imgEmbalagem}
          alt="Embalagem"
          width={200}
          height={150}
          loading={index < 6 ? "eager" : "lazy"} // Primeiras 6 imagens carregam imediatamente
          onLoadingComplete={() => setPkgLoaded(true)}
          className={`${
            maquina.imgEmbalagemClassName ||
            "absolute right-3 bottom-0 h-1/2 w-1/2 object-cover"
          } transition-opacity duration-300 ${pkgLoaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>
      <div
        className={`flex h-[14%] w-full flex-col items-center justify-center bg-slate-800`}
      >
        <h1 className="group-hover:text-accent text-base font-bold md:text-lg">
          {maquina.name}
        </h1>
        <p className="text-xs font-light md:text-sm">{maquina.descricao}</p>
      </div>
    </AnimatedContainer>
  );
}
