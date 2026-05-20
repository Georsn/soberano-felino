import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReasonsGallery from './components/ReasonsGallery';
import Quiz from './components/Quiz';
import Testimonials from './components/Testimonials';
import AdoptionSection from './components/AdoptionSection';
import { Cat, Heart, HeartHandshake, Info, ArrowUp, AlertTriangle } from 'lucide-react';

export default function App() {
  const [isAdoptionModalOpen, setIsAdoptionModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor screen scroll to represent progress and show top scrolling button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C2A29] selection:bg-[#C85C50]/20 selection:text-[#C85C50] flex flex-col font-sans">
      
      {/* Header component */}
      <Header 
        onOpenAdoptionModal={() => setIsAdoptionModalOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onScrollToSection={handleScrollToSection}
          onOpenAdoptionModal={() => setIsAdoptionModalOpen(true)}
        />

        {/* Humorous announcement rail / public bulletin (Architectural Honesty / No SLOP) */}
        <div className="bg-[#2C2A29] py-3.5 px-4 sm:px-6 text-[#FAF6F0] overflow-hidden" id="bulletin-bar">
  <div className="mx-auto max-w-7xl flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold font-mono tracking-wide">

    {/* Esquerda */}
    <div className="flex items-center gap-2 shrink-0">
      <AlertTriangle className="h-4 w-4 text-[#E8C26E]" />
      <span>ATENÇÃO:</span>
    </div>

    {/* Centro (marquee) */}
    <div className="flex-1 min-w-0 marquee-text-container select-none">
      A soberania felina já domina 43 mil lares brasileiros hoje. Força, resistência doméstica! 🐾
    </div>

    {/* Direita */}
    <div className="w-full sm:w-auto flex justify-between sm:justify-end gap-4 opacity-75">
      <span>Status: Alerta Laranja 🍊</span>
      <span className="hidden sm:inline">Protejam os copos d'água</span>
    </div>

  </div>
</div>
        {/* Dynamic reasons section with interactive filter options */}
        <ReasonsGallery />

        {/* Interactive Percentage calculator Quiz */}
        <Quiz />

        {/* Humorous Relatos/Testimonials section */}
        <Testimonials />

        {/* Beautiful adoption motivational footer segment */}
        <section className="bg-[#2C2A29] text-[#FAF6F0] px-6 py-16 border-t border-[#EADCC9]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#C85C50]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#E8C26E]/5 blur-3xl" />

          <div className="mx-auto max-w-4xl text-center relative z-10 flex flex-col items-center gap-6">
            <div className="rounded-full bg-[#C85C50] p-4 text-[#FAF6F0] shadow-xl hover:rotate-12 transition-transform cursor-pointer">
              <Cat className="h-8 w-8 stroke-[1.8]" />
            </div>

            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E8C26E]">
              O Caminho Sem Volta do Amor
            </span>

            <h2 className="font-sans text-3xl font-black text-[#FFF] sm:text-4xl max-w-xl leading-tight">
              Brincadeiras à parte, eles salvam vidas (incluindo a sua)
            </h2>

            <p className="font-sans text-sm md:text-base text-[#EADCC9] leading-relaxed max-w-2xl">
              Gatos de abrigo por todo o Brasil aguardam pacientemente um humano de estimação confiável para assumir a limpeza da caixinha de areia em troca de muito amor silencioso. Quer dar uma chance verdadeira de vida e receber carinho incondicional?
            </p>

            <button
              onClick={() => setIsAdoptionModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#C85C50] hover:bg-[#B34E43] px-8 py-4 font-sans text-base font-bold text-[#FAF6F0] shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              id="footer-cta-action"
            >
              Adote Mesmo Assim! <Heart className="h-4.5 w-4.5 fill-current animate-pulse" />
            </button>
          </div>
        </section>
      </main>

      {/* Persistent Beautiful Footer */}
      <footer className="bg-[#1C1A1A] border-t border-[#2C2A29] py-12 px-6 text-[#A19D99] font-sans">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2" id="footer-logo">
            <div className="rounded-lg bg-[#C85C50]/20 p-2 text-[#C85C50]">
              <Cat className="h-5 w-5" />
            </div>
            <span className="font-sans text-md font-bold tracking-tight text-[#FAF6F0]">
              Guia do <span className="text-[#C85C50]">Soberano Felino</span>
            </span>
          </div>

          <p className="font-sans text-xs text-center md:text-right max-w-md">
            Desenvolvido com carinho, sarcasmo e sachês gourmet. Todos os direitos sobre sua poltrona pertencem legalmente ao gato mais próximo. Pratique a adoção responsável e ame os felinos com telas seguras nas janelas! 🛋️✨
          </p>

        </div>
        <div className="mx-auto max-w-7xl border-t border-[#2C2A29] mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] uppercase font-mono tracking-widest gap-2">
          <span>© 2026 Aliança pela Rendição Felina</span>
          <span>Amigos dos Pets & Adoção Responsável ❤️</span>
        </div>
      </footer>

      {/* Adoption Details Modal Trigger */}
      <AdoptionSection 
        isOpen={isAdoptionModalOpen}
        onClose={() => setIsAdoptionModalOpen(false)}
      />

      {/* Safe Scroll back to Top trigger button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 rounded-full bg-[#2C2A29] hover:bg-[#C85C50] text-[#FAF6F0] p-3 shadow-lg transition-all hover:scale-110 cursor-pointer border border-[#EADCC9]/20"
          id="btn-scroll-top"
          aria-label="Ir para o topo"
        >
          <ArrowUp className="h-5 w-5 stroke-[2.5]" />
        </button>
      )}

    </div>
  );
}
