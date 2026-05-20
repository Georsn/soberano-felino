import { TESTIMONIALS } from '../data';
import { Star, MessageSquareQuote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="relatos" className="bg-[#FAF6F0] px-6 py-16 md:py-24 border-t border-[#EADCC9]">
      <div className="mx-auto max-w-7xl">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C85C50]">Relatórios de Vítimas</span>
          <h2 className="font-sans text-3xl font-black text-[#2C2A29] sm:text-4xl mt-2 cursor-default">
            Sobrou Alguém para Contar a História?
          </h2>
          <p className="font-sans text-sm md:text-base text-[#5C554F] mt-2">
            Leia os depoimentos verídicos extraídos de diários secretos de humanos que ousaram desafiar o aviso de "não adote" e hoje trabalham duro para pagar os brinquedos intocados.
          </p>
        </div>

        {/* Carousel / Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="relative p-6 bg-[#FFF] rounded-3xl border border-[#EADCC9] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              id={`testimony-card-${t.id}`}
            >
              {/* Decorative quotation icon */}
              <div className="absolute right-6 top-6 text-[#E8C26E]/15">
                <MessageSquareQuote className="h-12 w-12" />
              </div>

              {/* Star review representation */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 text-[#E8C26E] fill-[#E8C26E]" />
                ))}
              </div>

              {/* Message */}
              <p className="font-sans text-sm leading-relaxed text-[#5C554F] mb-6 italic z-10">
                "{t.content}"
              </p>

              {/* Author and avatar details */}
              <div className="border-t border-[#FAF6F0] pt-4 mt-auto">
                <h4 className="font-sans text-base font-extrabold text-[#2C2A29]">
                  {t.author}
                </h4>
                <span className="font-mono text-[10px] font-bold text-[#C85C50] uppercase tracking-wider block mt-0.5">
                  {t.role}
                </span>
                <span className="inline-block mt-2 rounded bg-green-50 px-2 py-0.5 font-sans text-[10px] font-bold text-green-700 border border-green-200">
                  Refém Satisfeito ✅
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing humorous quote */}
        <div className="mt-12 text-center">
          <p className="font-mono text-[11px] font-extrabold text-[#5C554F] uppercase tracking-widest italic">
            "Nossos advogados deixaram claro que as chances de arrependimento são de 0.0001%."
          </p>
        </div>

      </div>
    </section>
  );
}
