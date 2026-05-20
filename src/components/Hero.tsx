import { ShieldAlert, HelpCircle, ArrowDown, Sparkles } from 'lucide-react';
// Import the generated image asset path
import judgmentalCatBanner from '../assets/images/judgmental_cat_banner_1779294815249.png';

interface HeroProps {
  onScrollToSection: (id: string) => void;
  onOpenAdoptionModal: () => void;
}

export default function Hero({ onScrollToSection, onOpenAdoptionModal }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#F5EFE6] to-[#FAF6F0] px-6 py-12 md:py-20 lg:py-24">
      {/* Background blobs for aesthetic rhythm */}
      <div className="absolute top-1/4 left-10 h-64 w-64 rounded-full bg-[#C85C50]/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#E8C26E]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-6 lg:col-span-6 animate-slideIn">
          <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-[#EADCC9] bg-[#FFF] px-3.5 py-1.5 font-sans text-xs font-semibold text-[#C85C50] shadow-sm">
            <ShieldAlert className="h-4 w-4 text-[#C85C50]" />
            Alerta de Utilidade Pública: Perigo Iminente 🚨
          </div>

          <h1 className="font-sans text-4xl font-extrabold tracking-tight text-[#2C2A29] sm:text-5xl lg:text-6xl cursor-default">
            Pensando em adotar <br />
            um gato? <br />
            <span className="relative inline-block text-[#C85C50] mt-2">
              Pense duas vezes!
              <span className="absolute -bottom-2 left-0 h-1.5 w-full bg-[#EADCC9] rounded-full" />
            </span>
          </h1>

          <p className="font-sans text-base leading-relaxed text-[#5C554F] md:text-lg max-w-2xl">
            Antes de assinar os termos de <span className="font-semibold text-[#2C2A29]">rendição incondicional</span> do seu travesseiro, das suas louças e de todo o seu tempo produtivo a um soberano felino, conheça a real e sombria verdade sobre as regras domésticas escritas por garras invisíveis.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button
              onClick={() => onScrollToSection('perigos')}
              className="group inline-flex items-center gap-2 rounded-xl bg-[#2C2A29] px-6 py-3.5 font-sans text-base font-bold text-[#FAF6F0] shadow-lg hover:bg-[#3E3A38] transition-all hover:translate-y-[-2px]"
              id="cta-perigos"
            >
              Ver os Perigos 
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </button>
            <button
              onClick={onOpenAdoptionModal}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[#C85C50] bg-transparent px-6 py-3 font-sans text-base font-bold text-[#C85C50] hover:bg-[#C85C50] hover:text-[#FAF6F0] transition-colors"
              id="cta-hero-adopt"
            >
              Ignorar os avisos e Adotar ❤️
            </button>
          </div>

          {/* Quick Sarcastic Stats Panel */}
          <div className="grid grid-cols-3 gap-4 border-t border-[#EADCC9] pt-8 mt-4">
            <div className="flex flex-col">
              <span className="font-mono text-2xl font-bold text-[#C85C50] sm:text-3xl">99.8%</span>
              <span className="font-sans text-xs font-semibold text-[#5C554F] uppercase tracking-wider">Metros Conquistados</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-2xl font-bold text-[#2C2A29] sm:text-3xl">12.4M</span>
              <span className="font-sans text-xs font-semibold text-[#5C554F] uppercase tracking-wider">Copos Quebrados/Dia</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-2xl font-bold text-[#E8C26E] sm:text-3xl">100%</span>
              <span className="font-sans text-xs font-semibold text-[#5C554F] uppercase tracking-wider">De Julgamento</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image Card */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="relative max-w-md md:max-w-xl w-full translate-y-0 hover:translate-y-[-6px] transition-transform duration-500">
            {/* Main Picture Wrapper */}
            <div className="overflow-hidden rounded-3xl border-4 border-[#FFF] bg-[#FFF] p-3 shadow-2xl relative">
              <img
                src={judgmentalCatBanner}
                alt="A judgmental crown cat"
                className="rounded-2xl w-full object-cover aspect-video"
                referrerPolicy="no-referrer"
              />
              <div className="absolute right-6 top-6 bg-[#C85C50] text-[#FAF6F0] text-xs font-bold font-sans uppercase tracking-widest px-3 py-1 rounded-full shadow-md animate-pulse">
                Soberano Felino 👑
              </div>
            </div>

            {/* Float bubble over picture */}
            <div className="absolute -bottom-6 -left-6 z-20 max-w-xs rounded-2xl bg-[#FFF] p-4 shadow-xl border border-[#EADCC9] hidden sm:block">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#E8C26E]/20 p-2 text-[#E8C26E]">
                  <Sparkles className="h-5 w-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-[#2C2A29]">Pensamento do dia:</h4>
                  <p className="font-sans text-xs italic text-[#5C554F] mt-1">
                    "Gostei do tapete. Seus fios soltos serão perfeitos para o meu estômago amanhã."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
