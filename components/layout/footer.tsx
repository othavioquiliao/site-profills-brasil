import { Highlighter } from "@/components/magicui/highlighter";
import logoProfills from "@/public/logo-branco.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GridPattern } from "./gridPatternBg";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 pt-4">
      <GridPattern />
      <div className="mx-auto max-w-6xl">
        {/* Logo and Company Description */}
        <div className="text-center">
          <Link
            href="/"
            aria-label="Profills Brasil"
            className="inline-block py-6"
          >
            <Image
              src={logoProfills}
              alt="Logo Profills"
              className="mx-auto h-14 w-auto"
            />
          </Link>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white">
            A Profills é uma empresa jovem e arrojada, que produz Máquinas
            Envasadoras para produtos líquidos, pastosos e sólidos. Utilizamos
            tecnologia de ponta e os melhores componentes.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid gap-8 pt-8 md:grid-cols-3">
          {/* Sales/Parts */}
          <div className="hover:border-accent/50 z-10 space-y-3 border border-dashed border-white/30 bg-slate-900 py-5 text-center">
            <Highlighter
              action="underline"
              color="#2d62ef"
              animationDuration={4000}
              textColor="text-lg font-semibold text-white mb-3"
            >
              Vendas/Peças
            </Highlighter>
            <div className="space-y-2">
              <Link
                href="mailto:comercial@profillsdobrasil.com.br"
                className="hover:text-accent flex items-center justify-center gap-2 text-sm text-white transition-colors"
              >
                <Mail className="text-accent size-4" />
                <span>comercial@profillsdobrasil.com.br</span>
              </Link>
              <Link
                href="tel:+5541997851998"
                className="hover:text-accent flex items-center justify-center gap-2 text-sm text-white transition-colors"
              >
                <Phone className="text-accent size-4" />
                <span>+55 (41) 99785-1998</span>
              </Link>
            </div>
          </div>

          {/* Support and Technical Assistance */}
          <div className="hover:border-accent/50 z-10 space-y-3 border border-dashed border-white/30 bg-slate-900 py-5 text-center">
            <Highlighter
              action="underline"
              color="#2d62ef"
              animationDuration={4000}
              textColor="text-lg font-semibold text-white mb-3"
            >
              Suporte e Assistência Técnica
            </Highlighter>
            <div className="space-y-2">
              <Link
                href="mailto:suporte@profillsdobrasil.com.br"
                className="hover:text-accent flex items-center justify-center gap-2 text-sm text-white transition-colors"
              >
                <Mail className="text-accent size-4" />
                <span>suporte@profillsdobrasil.com.br</span>
              </Link>
            </div>
          </div>

          {/* Purchases (Suppliers) */}
          <div className="hover:border-accent/50 z-10 space-y-3 border border-dashed border-white/30 bg-slate-900 py-5 text-center">
            <Highlighter
              action="underline"
              color="#2d62ef"
              animationDuration={4000}
              textColor="text-lg font-semibold text-white mb-3"
            >
              Compras (Fornecedores)
            </Highlighter>
            <div className="space-y-2">
              <Link
                href="mailto:compras@profillsdobrasil.com.br"
                className="hover:text-accent flex items-center justify-center gap-2 text-sm text-white transition-colors"
              >
                <Mail className="text-accent size-4" />
                <span>compras@profillsdobrasil.com.br</span>
              </Link>
              <Link
                href="tel:+554197695013"
                className="hover:text-accent flex items-center justify-center gap-2 text-sm text-white transition-colors"
              >
                <Phone className="text-accent size-4" />
                <span>+55 (41) 9769-5013</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-10 pt-10 pb-8">
          <Link
            href="https://www.facebook.com/profillsbrasil/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-accent text-white transition-colors hover:scale-110"
          >
            <Facebook className="size-8" />
          </Link>
          <Link
            href="https://www.instagram.com/profillsdobrasil/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-accent text-white transition-colors hover:scale-110"
          >
            <Instagram className="size-8" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/profillsdobrasil/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent text-white transition-colors hover:scale-110"
          >
            <Linkedin className="size-8" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCQhaNOzqbkYnZlknSd79zEw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-accent text-white transition-colors hover:scale-110"
          >
            <Youtube className="size-8" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
