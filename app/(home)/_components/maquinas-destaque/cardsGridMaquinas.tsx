"use client";

import {
  maquinasData,
  type MaquinaData,
} from "@/app/maquinas/_components/cardMaquinas/maquinasData";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ArrowRight, Package, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

// Seleciona as 5 máquinas principais para destaque
const featuredMachines = maquinasData.filter((machine) =>
  [1, 2, 16, 22, 27].includes(machine.id),
);

export type FeatureCardProps = React.ComponentProps<"div"> & {
  machine: MaquinaData;
};

export default function CardGridSket() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        {/* Large card - spans 2 columns */}
        <AnimatedContainer delay={0} className="md:col-span-2 md:row-span-1">
          <FeatureCard machine={featuredMachines[2]} className="h-full" />
        </AnimatedContainer>

        {/* Medium card - spans 1 column */}
        <AnimatedContainer delay={0.1} className="md:col-span-1 md:row-span-1">
          <FeatureCard machine={featuredMachines[0]} className="h-full" />
        </AnimatedContainer>

        {/* Bottom 3 cards - equal columns */}
        <AnimatedContainer delay={0.2} className="md:col-span-1">
          <FeatureCard machine={featuredMachines[1]} className="h-full" />
        </AnimatedContainer>

        <AnimatedContainer delay={0.3} className="md:col-span-1">
          <FeatureCard machine={featuredMachines[4]} className="h-full" />
        </AnimatedContainer>

        <AnimatedContainer delay={0.4} className="md:col-span-1">
          <FeatureCard machine={featuredMachines[3]} className="h-full" />
        </AnimatedContainer>
      </div>

      <AnimatedContainer delay={0.3} className="flex justify-center pt-4">
        <Link href="/maquinas" className="z-10">
          <Button
            variant="outline"
            size="lg"
            className="group border-border !bg-background hover:border-accent/30 hover:bg-accent/10 hover:text-accent z-10 rounded-sm border font-semibold shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            Ver catálogo completo
            <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </AnimatedContainer>
    </div>
  );
}

export function FeatureCard({
  machine,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Link href={`/maquinas/${machine.id}`} className="block">
      <div
        className={cn(
          "group bg-background relative z-10 flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-sm border shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
          className,
        )}
        {...props}
      >
        <Carousel className="relative flex-1">
          <CarouselContent className="h-full">
            <CarouselItem className="flex items-center justify-center p-4">
              <div className="relative h-56 w-full">
                <Image
                  src={machine.imgMaquina}
                  alt={machine.name}
                  fill
                  className={cn(
                    "h-full w-full rounded-sm object-contain transition-transform duration-500",
                    machine.imgMaquinaClassName,
                  )}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center p-4">
              <div className="relative h-56 w-full">
                <Image
                  src={machine.imgEmbalagem}
                  alt={`Embalagem ${machine.name}`}
                  fill
                  className={cn(
                    "h-full w-full rounded-sm !object-contain transition-transform duration-500",
                    machine.imgEmbalagemClassName,
                  )}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="space-y-3 border-t p-4">
          <div className="flex items-center justify-start">
            <h3 className="text-base font-semibold tracking-wide">
              {machine.name}
            </h3>
          </div>

          <p className="text-muted-foreground line-clamp-2 text-sm">
            {machine.descricao}
          </p>

          {machine.unidadeMaxima && (
            <div className="text-muted-foreground flex items-center gap-2 text-xs">
              <Zap className="h-3 w-3" />
              <span>
                Até {machine.unidadeMaxima.toLocaleString("pt-BR")} un/h
              </span>
            </div>
          )}

          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <Package className="h-3 w-3" />
            <span>{machine.embalagensCompativeis.join(", ")}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
