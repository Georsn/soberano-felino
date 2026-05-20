import { useState } from 'react';
import * as Icons from 'lucide-react';
import { MOTIVOS } from '../data';
import { Motivo } from '../types';
import { Star, Flame, Info, Heart, Lightbulb } from 'lucide-react';

// Help helper to get Lucide icons dynamically
const getIcon = (name: string) => {
  // @ts-ignore
  const IconComponent = Icons[name];
  if (IconComponent) {
    return <IconComponent className="h-6 w-6 stroke-[2]" />;
  }
  return <Icons.Cat className="h-6 w-6 stroke-[2]" />;
};

export default function ReasonsGallery() {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'casa' | 'rotina' | 'psicologico'>('todos');
  const [expandedTipId, setExpandedTipId] = useState<string | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Perigos 🚨' },
    { id: 'casa', label: 'Sua Casa 🏠' },
    { id: 'rotina', label: 'Sua Rotina ⏰' },
    { id: 'psicologico', label: 'Seu Psicológico 🧠' }
  ] as const;

  const filteredMotivos = activeCategory === 'todos' 
    ? MOTIVOS 
    : MOTIVOS.filter(m => m.category === activeCategory);

  const handleToggleTip = (id: string) => {
    if (expandedTipId === id) {
      setExpandedTipId(null);
    } else {
      setExpandedTipId(id);
    }
  };

  const renderGravidade = (index: number) => {
    return (
      <div className="flex items-center gap-1" title={`Nivel de Perigo: ${index}/5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Flame 
            key={i} 
            className={`h-4 w-4 ${
              i < index 
                ? 'text-[#C85C50] fill-[#C85C50]' 
                : 'text-[#EADCC9]'
            }`} 
          />
        ))}
      </div>
    );
  };

  return (
    <section id="perigos" className="bg-[#FAF6F0] px-6 py-16 md:py-24 border-t border-[#EADCC9]">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C85C50]">A Dura Realidade</span>
          <h2 className="font-sans text-3xl font-extrabold text-[#2C2A29] sm:text-4xl mt-2 cursor-default">
            Motivos Absolutamente Irrefutáveis para Reconsiderar
          </h2>
          <p className="font-sans text-sm md:text-base text-[#5C554F] mt-3">
            Gatos não são animais de estimação. São imperadores em reabilitação que descobriram que miar em dó menor garante comida grátis. Escolha uma categoria para filtrar as sabotagens fofas:
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sm:max-w-2xl sm:mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedTipId(null);
              }}
              className={`rounded-full px-5 py-2.5 font-sans text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#C85C50] text-[#FAF6F0] shadow-md hover:bg-[#B34E43]'
                  : 'bg-[#FFF] text-[#5C554F] border border-[#EADCC9] hover:bg-[#FDFBF7] hover:border-[#C85C50]/40'
              }`}
              id={`filter-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredMotivos.map((motivo) => {
            const isTipExpanded = expandedTipId === motivo.id;
            return (
              <div 
                key={motivo.id}
                className="flex flex-col rounded-2xl border border-[#EADCC9] bg-[#FFF] p-6 shadow-sm hover:shadow-xl transition-all duration-300 group hover:translate-y-[-4px]"
                id={`motivo-card-${motivo.id}`}
              >
                {/* Header of the Card */}
                <div className="flex items-start justify-between mb-4">
                  <div className="rounded-xl bg-[#FAF6F0] p-3 text-[#C85C50] group-hover:bg-[#C85C50] group-hover:text-[#FAF6F0] transition-colors duration-300 shadow-inner">
                    {getIcon(motivo.icon)}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#5C554F] mb-1">
                      Gravidade
                    </span>
                    {renderGravidade(motivo.gravityIndex)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-sans text-xl font-bold text-[#2C2A29] leading-tight mb-2 group-hover:text-[#C85C50] transition-colors">
                  {motivo.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-[#5C554F] leading-relaxed mb-4 flex-grow">
                  {motivo.description}
                </p>

                {/* Cat quote speech bubble */}
                <div className="relative rounded-xl bg-[#FAF6F0] p-3.5 border border-[#F3E5D4] italic text-xs text-[#2C2A29] font-sans mb-4">
                  <div className="absolute top-0 left-6 -translate-y-1/2 w-3 h-3 bg-[#FAF6F0] border-t border-l border-[#F3E5D4] rotate-45" />
                  <p className="relative z-10 leading-relaxed font-medium">
                    {motivo.quote}
                  </p>
                  <span className="absolute right-3 bottom-1.5 font-mono text-[8.5px] uppercase font-bold tracking-widest text-[#C85C50]">
                    — O Gato 🐾
                  </span>
                </div>

                {/* Survival tip expander button */}
                <button
                  onClick={() => handleToggleTip(motivo.id)}
                  className="w-full mt-auto inline-flex items-center justify-between rounded-xl bg-orange-50 hover:bg-orange-100/80 p-3 text-left transition-colors cursor-pointer group/tip border border-[#F3E5D4]/40"
                  id={`btn-tip-${motivo.id}`}
                >
                  <div className="flex items-center gap-2">
                    <Lightbulb className={`h-4.5 w-4.5 text-[#E8C26E] transition-transform ${isTipExpanded ? 'rotate-12 scale-110' : ''}`} />
                    <span className="font-sans text-xs font-extrabold text-[#783E2E]">
                      {isTipExpanded ? 'Ocultar tática de sobrevivência' : 'Tática de Sobrevivência'}
                    </span>
                  </div>
                  <svg 
                    className={`h-4 w-4 text-[#783E2E] transition-transform duration-300 ${isTipExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Secret Tip panel (Dynamic Height Simulation) */}
                {isTipExpanded && (
                  <div className="mt-3 p-3.5 rounded-xl bg-[#E8C26E]/10 border border-[#E8C26E]/30 text-xs font-sans text-[#783E2E] leading-relaxed animate-slideDown">
                    <span className="font-bold block mb-1">Como Sobreviver:</span>
                    {motivo.catTip}
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
