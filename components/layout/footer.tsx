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
    <footer className="relative border-t bg-slate-900 py-4">
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
          <div className="z-10 space-y-3 border border-dashed border-white/30 bg-slate-900 py-3 text-center">
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
                href="tel:+5541997851998"
                className="hover:text-accent flex items-center justify-center gap-2 text-sm text-white transition-colors"
              >
                <Phone className="text-accent size-4" />
                <span>+55 (41) 99785-1998</span>
              </Link>
              <Link
                href="mailto:comercial@profillsdobrasil.com.br"
                className="hover:text-accent flex items-center justify-center gap-2 text-sm text-white transition-colors"
              >
                <Mail className="text-accent size-4" />
                <span>comercial@profillsdobrasil.com.br</span>
              </Link>
            </div>
          </div>

          {/* Support and Technical Assistance */}
          <div className="z-10 space-y-3 border border-dashed border-white/30 bg-slate-900 py-3 text-center">
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
          <div className="z-10 space-y-3 border border-dashed border-white/30 bg-slate-900 py-3 text-center">
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
                href="tel:+554197695013"
                className="hover:text-accent flex items-center justify-center gap-2 text-sm text-white transition-colors"
              >
                <Phone className="text-accent size-4" />
                <span>+55 (41) 9769-5013</span>
              </Link>
              <Link
                href="mailto:compras@profillsdobrasil.com.br"
                className="hover:text-accent flex items-center justify-center gap-2 text-sm text-white transition-colors"
              >
                <Mail className="text-accent size-4" />
                <span>compras@profillsdobrasil.com.br</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-10 pt-5 pb-8">
          <Link
            href="https://www.facebook.com/profillsbrasil/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-accent text-white transition-colors"
          >
            <Facebook className="size-10" />
          </Link>
          <Link
            href="https://www.instagram.com/profillsdobrasil/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-accent text-white transition-colors"
          >
            <Instagram className="size-10" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/profillsdobrasil/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent text-white transition-colors"
          >
            <Linkedin className="size-10" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCQhaNOzqbkYnZlknSd79zEw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-accent text-white transition-colors"
          >
            <Youtube className="size-10" />
          </Link>
        </div>

        {/* Google Maps */}
        <div className="mb-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7206.5151991491575!2d-49.265868!3d-25.42965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46cbe8fffff%3A0xd40a29c07a52e3d1!2sR.%20Mal.%20Deodoro%2C%20717%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080020-320!5e0!3m2!1spt-BR!2sbr!4v1756731227044!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>
      </div>
    </footer>
  );
}
