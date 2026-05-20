import { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data';
import { RotateCcw, AlertTriangle, ChevronRight, HelpCircle, HeartHandshake, Smile, ShieldAlert } from 'lucide-react';

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 corresponds to introductory stage
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);
  const [selectedResponse, setSelectedResponse] = useState<'yes' | 'no' | null>(null);

  const handleStartQuiz = () => {
    setCurrentStep(1);
    setUserAnswers([]);
    setSelectedResponse(null);
  };

  const handleAnswerSelect = (isYes: boolean) => {
    if (selectedResponse !== null) return; // Prevent double clicking
    setSelectedResponse(isYes ? 'yes' : 'no');
    setUserAnswers([...userAnswers, isYes]);
  };

  const handleNextStep = () => {
    setSelectedResponse(null);
    setCurrentStep(prev => prev + 1);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setUserAnswers([]);
    setSelectedResponse(null);
  };

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestionIdx = currentStep - 1;
  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIdx];

  // Scoring
  const yesCount = userAnswers.filter(a => a).length;
  const percentage = Math.round((yesCount / totalQuestions) * 100);

  // Result assessment text
  let resultTitle = '';
  let resultDescription = '';
  let resultColor = '';
  let emojiCode = '';

  if (percentage >= 80) {
    resultTitle = 'Rendição Inevitável e Humilhação Doce';
    resultDescription = 'Esqueça, você não tem chances de lutar. Você já está chamando pet-shops escondido, salvando vídeos de gatinhos miando no TikTok e cogitando comprar sachê sabor salmão trufado. Aceite seu papel de servo e herdeiro de pelos na cama com orgulho!';
    resultColor = 'text-[#C85C50]';
    emojiCode = '👑😺';
  } else if (percentage >= 50) {
    resultTitle = 'Resistência Gravemente Abalada';
    resultDescription = 'Você finge que é uma pessoa durona e séria, mas seus batimentos cardíacos disparam quando vê uma patinha branca arrepiada com "meias". Você está a um final de semana nublado e um ronrom baixinho de distância de ceder completamente. Prevemos um felino no seu sofá em 20 dias.';
    resultColor = 'text-orange-500';
    emojiCode = '📦🐾';
  } else if (percentage >= 20) {
    resultTitle = 'Zelador Provisório de Copos de Vidro';
    resultDescription = 'Você realmente valoriza a física experimental de seus copos intactos e portas perfeitamente trancadas, mas a semente da curiosidade gateira está germinando. Um encontro breve de 5 minutos com um gatinho desabrigado em uma feirinha de adoção será fatal para o seu orgulho.';
    resultColor = 'text-amber-500';
    emojiCode = '🏺🔍';
  } else {
    resultTitle = 'Humano Altamente Suspeito (Cachorrento)';
    resultDescription = 'Ou você possui zero sentimentos no peito ou é apenas um robô programado por cães. Como assim você quer travesseiros perfeitamente secos e total silêncio às 4 da manhã? Volte aqui caso perceba o vazio existencial da falta de arranhões charmosos na lateral do sofá.';
    resultColor = 'text-[#5C554F]';
    emojiCode = '🤖🐶';
  }

  return (
    <section id="quiz" className="bg-[#FAF6F0] px-6 py-16 md:py-24 border-t border-[#EADCC9]">
      <div className="mx-auto max-w-4xl">
        
        {/* Intro Layout & Wrapper Card */}
        <div className="rounded-3xl border border-[#EADCC9] bg-[#FFF] p-8 md:p-12 shadow-md">
          
          {/* STEP 0: Landing start screen */}
          {currentStep === 0 && (
            <div className="text-center flex flex-col items-center gap-6 animate-fadeIn">
              <div className="rounded-full bg-[#FAF6F0] p-4 text-[#C85C50] shadow-inner">
                <HelpCircle className="h-10 w-10 stroke-[1.8]" />
              </div>
              
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C85C50]">Super Simulador Computacional</span>
              <h2 className="font-sans text-3xl font-black text-[#2C2A29] sm:text-4xl leading-tight">
                Qual a chance de você ceder e adotar mesmo assim?
              </h2>
              
              <p className="font-sans text-base text-[#5C554F] leading-relaxed max-w-2xl">
                Nossa inteligência artificial de alta precisão felina vai avaliar suas defesas psicológicas contra ronrons e olhares de coitadinho. Responda a 5 perguntas sinceras para saber quanto tempo resta antes da sua cama ser roubada.
              </p>

              <button
                onClick={handleStartQuiz}
                className="inline-flex items-center gap-2 rounded-xl bg-[#C85C50] hover:bg-[#B34E43] px-8 py-4 font-sans text-lg font-bold text-[#FAF6F0] shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                id="btn-quiz-start"
              >
                Iniciar Teste de Resistência 📊
              </button>
            </div>
          )}

          {/* ACTIVE STEPS 1-5: The Question Engine */}
          {currentStep >= 1 && currentStep <= totalQuestions && (
            <div className="animate-fadeIn">
              {/* Progress and indicators */}
              <div className="flex items-center justify-between border-b border-[#EADCC9]/60 pb-4 mb-8">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C85C50]">
                  Pergunta {currentStep} de {totalQuestions}
                </span>
                <div className="h-2.5 w-32 sm:w-48 rounded-full bg-[#FAF6F0] overflow-hidden">
                  <div 
                    className="h-full bg-[#C85C50] transition-all duration-300"
                    style={{ width: `${(currentStep / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-[#2C2A29] leading-tight mb-8 cursor-default">
                {currentQuestion.question}
              </h3>

              {/* Buttons options selection */}
              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                {/* YES Option */}
                <button
                  type="button"
                  onClick={() => handleAnswerSelect(true)}
                  disabled={selectedResponse !== null}
                  className={`flex flex-col text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                    selectedResponse === 'yes'
                      ? 'border-[#C85C50] bg-[#C85C50]/5 shadow-inner'
                      : selectedResponse === 'no'
                      ? 'border-[#EADCC9]/50 opacity-40'
                      : 'border-[#EADCC9] bg-[#FAF6F0]/20 hover:border-[#C85C50] hover:bg-[#FAF6F0]/40'
                  }`}
                  id="quiz-opt-yes"
                >
                  <span className="font-mono text-xs font-extrabold text-[#C85C50] uppercase tracking-wider mb-2">Sim, com certeza</span>
                  <p className="font-sans text-sm font-semibold text-[#2C2A29]">
                    {currentQuestion.yesDescription}
                  </p>
                </button>

                {/* NO Option */}
                <button
                  type="button"
                  onClick={() => handleAnswerSelect(false)}
                  disabled={selectedResponse !== null}
                  className={`flex flex-col text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                    selectedResponse === 'no'
                      ? 'border-[#2C2A29] bg-[#2C2A29]/5 shadow-inner'
                      : selectedResponse === 'yes'
                      ? 'border-[#EADCC9]/50 opacity-40'
                      : 'border-[#EADCC9] bg-[#FAF6F0]/20 hover:border-[#2C2A29] hover:bg-[#FAF6F0]/40'
                  }`}
                  id="quiz-opt-no"
                >
                  <span className="font-mono text-xs font-extrabold text-[#5C554F] uppercase tracking-wider mb-2">De jeito nenhum</span>
                  <p className="font-sans text-sm font-semibold text-[#2C2A29]">
                    {currentQuestion.noDescription}
                  </p>
                </button>
              </div>

              {/* Cat Comment (revealed on selection) */}
              {selectedResponse !== null && (
                <div className="rounded-2xl border-2 border-dashed border-[#EADCC9] bg-[#FAF6F0] p-5 relative animate-slideIn">
                  <div className="flex gap-4 items-start">
                    <div className="rounded-full bg-[#C85C50] text-[#FFF] p-2 text-xs font-mono font-bold shrink-0">
                      MIAL!
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold text-[#C85C50] uppercase tracking-widest block mb-1">Nota mental do Gato-Chefe:</span>
                      <p className="font-sans text-xs italic text-[#5C554F]">
                        "{currentQuestion.catComment}"
                      </p>
                    </div>
                  </div>

                  {/* Move to next question button */}
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-1 hover:gap-2 rounded-xl bg-[#2C2A29] hover:bg-[#3E3A38] text-[#FAF6F0] font-sans font-bold text-xs py-2 px-4 shadow transition-all cursor-pointer"
                      id="quiz-btn-next"
                    >
                      {currentStep === totalQuestions ? 'Ver Resultado' : 'Próxima'}
                      <ChevronRight className="h-4.5 w-4.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 6: RESULTS */}
          {currentStep > totalQuestions && (
            <div className="text-center flex flex-col items-center gap-8 animate-fadeIn">
              
              {/* Dial gauge indicator */}
              <div className="relative flex justify-center items-center">
                
                {/* SVG Gauge Circle */}
                <svg className="w-48 h-48 transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="84"
                    stroke="#F5EFE6"
                    strokeWidth="12"
                    fill="transparent"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="84"
                    stroke={percentage >= 50 ? "#C85C50" : "#E8C26E"}
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 84}
                    strokeDashoffset={2 * Math.PI * 84 * (1 - percentage / 100)}
                    className="transition-all duration-1000 ease-out"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Inner Text percentage */}
                <div className="absolute flex flex-col items-center">
                  <span className="font-mono text-5xl font-black text-[#2C2A29]">
                    {percentage}%
                  </span>
                  <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-[#5C554F] mt-1">
                    Chance de ceder
                  </span>
                </div>
              </div>

              {/* Feedback cards */}
              <div className="max-w-xl mx-auto flex flex-col gap-3">
                <span className="text-3xl" aria-hidden="true">{emojiCode}</span>
                <span className="font-mono text-xs font-bold text-[#C85C50] uppercase tracking-widest">Seu Veredito</span>
                <h3 className={`font-sans text-2xl font-black ${resultColor}`}>
                  {resultTitle}
                </h3>
                <p className="font-sans text-sm md:text-base text-[#5C554F] leading-relaxed">
                  {resultDescription}
                </p>
              </div>

              {/* Actions panel */}
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex justify-center items-center gap-2 rounded-xl border-2 border-[#EADCC9] bg-[#FFF] px-6 py-3 font-sans text-sm font-bold text-[#5C554F] hover:bg-[#FAF6F0] transition-colors cursor-pointer"
                  id="quiz-btn-restart"
                >
                  <RotateCcw className="h-4.5 w-4.5" />
                  Refazer o Teste de Resistência
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
