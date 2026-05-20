import { X, Heart, Shield, CheckCircle2, Award, HeartHandshake } from 'lucide-react';
// Import the cheeky kitty avatar
import cheekyKittyAvatar from '../assets/images/cheeky_kitty_avatar_1779294834986.png';

interface AdoptionSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdoptionSection({ isOpen, onClose }: AdoptionSectionProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C2A29]/70 backdrop-blur-sm animate-fadeIn">
      {/* Container Card */}
      <div 
        className="relative w-full max-w-2xl bg-[#FFF] rounded-3xl border border-[#EADCC9] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-slideZoom"
        onClick={(e) => e.stopPropagation()}
        id="adoption-modal"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-[#FAF6F0] p-2 text-[#5C554F] hover:bg-[#C85C50] hover:text-[#FAF6F0] transition-colors cursor-pointer z-10"
          id="btn-close-modal"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 flex flex-col gap-6">
          
          {/* Decorative Top header with Cheeky Mascot */}
          <div className="flex flex-col items-center text-center gap-4 bg-[#FAF6F0] rounded-2xl p-6 border border-[#EADCC9]/50 relative">
            <div className="w-24 h-24 rounded-full border-4 border-[#FFF] overflow-hidden shadow-md">
              <img 
                src={cheekyKittyAvatar} 
                alt="A guilty cat mascot showing no remorse" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold text-[#C85C50] uppercase tracking-widest bg-[#C85C50]/10 px-2 py-0.5 rounded-full">
                O Guardião do Veredito 🛡️
              </span>
              <h3 className="font-sans text-2xl font-black text-[#2C2A29] mt-2">
                A Grande Verdade que Eles Escondem...
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5C554F] italic max-w-lg mx-auto mt-1">
                "Sim, nós mandamos na casa, escolhemos as caixas e quebramos copos de vez em quando. Mas fazemos tudo isso para manter vocês, humanos, humildes e infinitamente amados."
              </p>
            </div>
          </div>

          {/* Emotional Pitch */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-lg font-bold text-[#C85C50] flex items-center gap-2">
              <Heart className="h-5 w-5 fill-[#C85C50]" /> Por que eles valem absolutamente a pena:
            </h4>
            
            <p className="font-sans text-sm leading-relaxed text-[#5C554F]">
              Atrás de cada zoomie incompreensível de madrugada e cada olhar estrábico de julgamento implacável, existe um companheiro extraordinário. Gatos são seres incrivelmente carinhosos, higiênicos, silenciosos e que se adaptam imensamente a espaços menores, tornando-se o companheiro ideal para a rotina urbana moderna.
            </p>

            {/* Medical Fun Fact */}
            <div className="rounded-xl border border-green-200 bg-green-50/50 p-4 shrink-0 flex gap-3 items-start">
              <span className="text-xl shrink-0" aria-hidden="true">🩺</span>
              <div>
                <span className="font-sans text-xs font-bold text-green-800 uppercase tracking-widest block mb-0.5">Fato Clínico Interativo</span>
                <p className="font-sans text-xs text-green-700 leading-relaxed">
                  Estudos científicos sérios mostram que a frequência sonora do **ronrom (purring)** dos gatos (entre 20Hz e 140Hz) tem propriedades terapêuticas reais que ajudam a **reduzir a ansiedade, aliviar o estresse** e diminuir o risco de doenças cardíacas em humanos. É puramente um remédio natural peludo!
                </p>
              </div>
            </div>
          </div>

          {/* Guide for Responsible Adoption */}
          <div className="flex flex-col gap-4 border-t border-[#EADCC9]/50 pt-5">
            <h4 className="font-sans text-lg font-bold text-[#2C2A29] flex items-center gap-2">
              <Award className="h-5 w-5 text-[#E8C26E] stroke-[2]" /> Mandamentos da Adoção Responsável:
            </h4>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="h-5 w-5 text-[#C85C50] shrink-0 stroke-[2.5]" />
                <div>
                  <span className="font-sans text-xs font-bold text-[#2C2A29]">Redes de Proteção são Leis</span>
                  <p className="font-sans text-[11px] text-[#5C554F] leading-tight mt-0.5">
                    Gatos voam apenas em fábulas! Coloque telas em todas as janelas do apartamento antes do soberano chegar.
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="h-5 w-5 text-[#C85C50] shrink-0 stroke-[2.5]" />
                <div>
                  <span className="font-sans text-xs font-bold text-[#2C2A29]">Castração é Símbolo de Amor</span>
                  <p className="font-sans text-[11px] text-[#5C554F] leading-tight mt-0.5">
                    Evita fugas perigosas, demarcação territorial, filhotes abandonados e graves doenças. Castre sempre!
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="h-5 w-5 text-[#C85C50] shrink-0 stroke-[2.5]" />
                <div>
                  <span className="font-sans text-xs font-bold text-[#2C2A29]">Água Corrente e Fontes</span>
                  <p className="font-sans text-[11px] text-[#5C554F] leading-tight mt-0.5">
                    Eles bebem muito pouca água parada. Use fontes elétricas para proteger os preciosos rins felinos.
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="h-5 w-5 text-[#C85C50] shrink-0 stroke-[2.5]" />
                <div>
                  <span className="font-sans text-xs font-bold text-[#2C2A29]">A Cama do Coração</span>
                  <p className="font-sans text-[11px] text-[#5C554F] leading-tight mt-0.5">
                    Muitos gatos em abrigos aguardam uma segunda chance de te fazer sorrir. Conecte-se com ONGs idôneas locais!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick interactive checklist & motivational push */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#EADCC9]/50 pt-5 gap-4">
            <div className="flex items-center gap-2">
              <HeartHandshake className="h-6 w-6 text-[#C85C50]" />
              <span className="font-sans text-xs font-extrabold text-[#5C554F]">Quer dar esse passo de amor saudável?</span>
            </div>
            <a 
              href="https://www.amigosdesaofrancisco.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 rounded-xl bg-[#C85C50] hover:bg-[#B34E43] text-sm font-extrabold text-[#FAF6F0] py-3.5 px-6 shadow-md transition-all hover:scale-105"
              id="btn-real-adoption-link"
            >
              Procurar ONGs de Adoção ❤️
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
